import type { Handler, HandlerEvent } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Parse and validate body
  let name: string, email: string, message: string;
  try {
    const body = JSON.parse(event.body ?? '{}');
    name = body.name?.trim();
    email = body.email?.trim();
    message = body.message?.trim();
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'name, email, and message are all required' }),
    };
  }

  // --- Supabase: insert submission ---
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase environment variables');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { error: dbError } = await supabase
    .from('contact_submissions')
    .insert([{ name, email, message, created_at: new Date().toISOString() }]);

  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save submission' }),
    };
  }

  // --- Resend: send emails ---
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !contactToEmail) {
    console.error('Missing Resend environment variables');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  const resend = new Resend(resendApiKey);

  // Notification email to Bismark
  const notificationResult = await resend.emails.send({
    from: 'Markgraphy Contact <noreply@marrkgraphy.com>',
    to: [contactToEmail],
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    `,
  });

  if (notificationResult.error) {
    console.error('Resend notification error:', notificationResult.error);
    // Don't fail the whole request — data is saved; log and continue
  }

  // Auto-reply to the submitter
  const autoReplyResult = await resend.emails.send({
    from: 'Bismark at Markgraphy <noreply@marrkgraphy.com>',
    to: [email],
    subject: "We received your message — we'll be in touch!",
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for reaching out! I've received your message and will get back to you as soon as possible.</p>
      <p>Here's a copy of what you sent:</p>
      <blockquote style="border-left: 3px solid #ccc; padding-left: 12px; color: #555;">
        ${message}
      </blockquote>
      <p>Talk soon,<br/>Bismark<br/>Markgraphy</p>
    `,
  });

  if (autoReplyResult.error) {
    console.error('Resend auto-reply error:', autoReplyResult.error);
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, message: 'Message sent successfully!' }),
  };
};

export { handler };
