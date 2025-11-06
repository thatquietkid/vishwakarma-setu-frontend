import React, { useState } from 'react';

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-text-light dark:text-text-dark">The Trusted Marketplace for Verified Industrial Machinery</h1>
          <h2 className="mt-4 text-lg md:text-xl font-normal text-secondary dark:text-gray-400 max-w-3xl mx-auto">Find reliable, pre-owned equipment for your business with confidence.</h2>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="flex-grow flex items-center relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary dark:text-gray-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-accent border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-14 placeholder:text-secondary dark:placeholder:text-gray-500 pl-12 pr-4 text-base font-normal leading-normal"
                  placeholder="Search by machine name, model, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-shrink-0 flex gap-3">
                <button className="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                  <span className="truncate">Search</span>
                </button>
                <button className="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-600">
                  <span className="truncate">Advanced Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;