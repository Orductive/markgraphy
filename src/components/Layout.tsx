import React from 'react';
import AnimatedOutlet from './AnimatedOutlet';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatedOutlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
