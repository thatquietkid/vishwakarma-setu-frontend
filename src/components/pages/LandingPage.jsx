import React from 'react';

// Import the new layout components
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// Import the new landing page sections (we'll create these next)
import HeroSection from '../landing/HeroSection';
import FeaturedMachines from '../landing/FeaturedMachines';
import TrustSection from '../landing/TrustSection';

function LandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        
        <Navbar />

        <main className="flex-grow">
          <HeroSection />
          <FeaturedMachines />
          <TrustSection />
        </main>
        
        <Footer />

      </div>
    </div>
  );
}

export default LandingPage;