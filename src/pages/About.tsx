import React from 'react';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-12 md:py-24 px-6 md:px-10">
      
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-[60px] items-start">

        {/* Bio Text */}
        <Reveal className="flex flex-col justify-start text-left font-body w-full lg:w-1/2">
          <h1 className="font-heading text-4xl md:text-8xl uppercase tracking-tight leading-none text-white mb-10">My Story</h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>I didn't grow up knowing I wanted to be a creative visual storyteller. In fact, visual storytelling found me when the world came to a standstill.</p>
            <p>In 2020, during the COVID-19 pandemic, life slowed down in ways none of us expected. Like many people, I found myself spending hours watching Netflix. But while others were focused on the stories, I became obsessed with how those stories were made. I started watching behind-the-scenes documentaries, director interviews, and production breakdowns, fascinated by the thought that a camera, a team, and a vision could make millions of people laugh, cry, and see the world differently.</p>
            <p>That curiosity quickly became an obsession.</p>
            <p>Around the same time, churches everywhere were forced to move online. My church suddenly faced a challenge no one had prepared for: how do you create a meaningful worship experience when people can't gather in person? Alongside two friends, I volunteered to help make it happen. None of us were experts — we were simply willing to learn.</p>
            <p>We became the entire creative team overnight.</p>
            <p>Every week brought a new challenge. I learned graphic design so we could promote services online. I learned sound mixing because clear audio mattered just as much as great visuals. I studied camera operation, directing, video editing, production workflows, and how to use live-streaming platforms effectively. There was no handbook, so I spent countless late nights researching, watching tutorials, testing ideas, making mistakes, and trying again.</p>
            <p>For five months, I lived and breathed creativity.</p>
            <p>Somewhere in that process, I realized this wasn't just something I enjoyed. It was something I wanted to build my life around.</p>
            <p>As I shared that dream with people around me, there was one creator whose work constantly inspired me: Mawuli Adjabeng. His storytelling, cinematography, and attention to detail were unlike anything I had seen. I admired his work from a distance, never imagining our paths would cross. When I mentioned him to my pastor, I was surprised to learn that he was actually my pastor's brother-in-law. My pastor arranged for me to learn directly from him, and that opportunity changed everything.</p>
            <p>Working alongside Mawuli took me from learning the theory to living the craft.</p>
            <p>I explored every corner of visual storytelling — photography, cinematography, lighting, editing, directing, and creative production. Before long, I became one of his assistants, helping cover weddings, funerals, documentaries, product campaigns, corporate events, conferences, and church productions. Every project introduced me to new people, new stories, and new ways of seeing the world through a lens.</p>
            <p>Those years gave me more than technical skills. They taught me to observe before I filmed, to listen before I directed, and to remember that every person has a story worth telling. I discovered that the best visuals don't come from expensive equipment — they come from understanding people.</p>
            <p>That's when I knew this wasn't just a hobby anymore.</p>
            <p>Today, I'm pursuing a degree in Digital Media & Communication, continuing to refine my craft while combining filmmaking, photography, design, and marketing into one purpose: creating stories that move people. Whether I'm producing a documentary, capturing a community event, building a brand, or creating content for social media, my goal remains the same as it was back in 2020 — to tell honest stories that connect people, preserve meaningful moments, and leave a lasting impact.</p>
            <p>Looking back, it's incredible to think that a season of uncertainty led me to discover my calling. What began with late nights watching documentaries became a lifelong passion for visual storytelling. Every opportunity since has reminded me why I picked up a camera in the first place — not to capture images, but to capture humanity.</p>
          </div>
        </Reveal>

        {/* Profile Images */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-[100px] flex-shrink-0">
          {/* Large top photo */}
          <div style={{ marginBottom: '0.75rem', overflow: 'hidden' }}>
            <img
              src="https://ik.imagekit.io/orductive/photography/myStory/h.jpg?tr=cm-extract,x-450,y-450,w-2300,h-3100"
              alt="Bismark Akoto"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          {/* Two smaller photos side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '0.75rem' }}>
            <img
              src="https://ik.imagekit.io/orductive/photography/myStory/IMG_3273.JPG"
              alt="Bismark Akoto"
              style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <img
              src="https://ik.imagekit.io/orductive/photography/myStory/IMG_3328.jpg"
              alt="Bismark Akoto"
              style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center bottom', display: 'block' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
