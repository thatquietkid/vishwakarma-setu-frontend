import React, { useState, useEffect } from 'react';

// Helper component for the counting animation
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
};

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative py-24 md:py-36 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/1087083/pexels-photo-1087083.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center">
          {/* Added hover scale animation to the main title */}
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter cursor-default transition-transform duration-500 hover:scale-[1.02]">
            The Trusted Marketplace for Verified Industrial Machinery
          </h1>
          {/* Removed hover color transition from the subtitle */}
          <h2 className="mt-4 text-lg md:text-xl font-normal text-gray-300 max-w-3xl mx-auto cursor-default">
            Find reliable, pre-owned equipment for your business with confidence.
          </h2>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="flex-grow flex items-center relative group text-gray-800 dark:text-white">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary dark:text-gray-400 group-focus-within:text-accent transition-colors duration-300">
                  <span className="material-symbols-outlined">search</span>
                </div>
                {/* Added focus shadow and transition to input */}
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-accent border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-14 placeholder:text-secondary dark:placeholder:text-gray-500 pl-12 pr-4 text-base font-normal leading-normal transition-all duration-300 hover:border-accent/50 focus:shadow-lg"
                  placeholder="Search by machine name, model, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-shrink-0 flex gap-3">
                {/* Added scale and shadow hover effects to Search button */}
                <button className="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95">
                  <span className="truncate">Search</span>
                </button>
                {/* Added scale and shadow hover effects to Advanced Filters button */}
                <button className="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-lg active:scale-95">
                  <span className="truncate">Advanced Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Stats Section */}
          <div className="grid max-w-md grid-cols-2 mx-auto mt-16 gap-x-6 text-white">
            <div className="flex flex-col items-center p-4 rounded-xl">
              <p className="text-4xl font-bold text-white">
                <Counter end={38942} />
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Orders Delivered
              </p>
            </div>

            <div className="flex flex-col items-center p-4 rounded-xl">
              <p className="text-4xl font-bold text-white">
                <Counter end={14344} />
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Registered Customers
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;