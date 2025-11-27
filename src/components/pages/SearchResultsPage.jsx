import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar'; // Import Navbar
import Footer from '../layout/Footer'; // Import Footer

function SearchResultsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-secondary-text min-h-screen flex flex-col">
      {/* Replaced hardcoded header with Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar (Left Column) */}
          <aside className="w-full lg:w-1/4 xl:w-1/5">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-background-dark/50 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">Filters</h2>
                  <button className="text-sm font-medium text-primary hover:underline">Clear All</button>
                </div>
                {/* Filter Sections */}
                <div className="space-y-6">
                  {/* Machine Type */}
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Machine Type</h3>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-x-3"><input defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /><span>CNC Lathe</span></label>
                      <label className="flex items-center gap-x-3"><input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /><span>Milling Machine</span></label>
                      <label className="flex items-center gap-x-3"><input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /><span>Grinding Machine</span></label>
                      <label className="flex items-center gap-x-3"><input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /><span>Drill Press</span></label>
                      <a className="text-primary text-xs font-medium hover:underline" href="#">Show more</a>
                    </div>
                  </div>
                  {/* Manufacturer */}
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Manufacturer</h3>
                    <label className="flex flex-col w-full">
                      <div className="flex w-full flex-1 items-stretch rounded-lg h-10 bg-background-light dark:bg-background-dark">
                        <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 flex items-center justify-center pl-3">search</span>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-secondary-text dark:text-gray-200 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 pl-2 text-sm" placeholder="Search manufacturer" />
                      </div>
                    </label>
                    <div className="space-y-2 mt-3 text-sm">
                      <label className="flex items-center gap-x-3"><input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /><span>Haas</span></label>
                      <label className="flex items-center gap-x-3"><input defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /><span>DMG Mori</span></label>
                      <label className="flex items-center gap-x-3"><input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" /><span>Mazak</span></label>
                    </div>
                  </div>
                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Price Range</h3>
                    <div className="relative flex w-full flex-col items-start gap-3">
                      <div className="flex h-[38px] w-full pt-1.5">
                        <div className="flex h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 pl-[20%] pr-[40%]">
                          <div className="relative">
                            <div className="absolute -left-2.5 -top-2 flex flex-col items-center">
                              <div className="size-5 rounded-full bg-primary border-2 border-white dark:border-gray-800 shadow cursor-pointer"></div>
                            </div>
                          </div>
                          <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                          <div className="relative">
                            <div className="absolute -right-2.5 -top-2 flex flex-col items-center">
                              <div className="size-5 rounded-full bg-primary border-2 border-white dark:border-gray-800 shadow cursor-pointer"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between w-full text-xs text-gray-500 dark:text-gray-400">
                        <span>$1,000</span>
                        <span>$500,000+</span>
                      </div>
                    </div>
                  </div>
                  {/* Verification Status */}
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Verification Status</h3>
                    <label className="flex items-center gap-x-3 text-sm">
                      <input defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Vishwakarma Verified</span>
                      <span className="material-symbols-outlined text-accent-yellow text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    </label>
                  </div>
                </div>
                <button className="flex w-full mt-8 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                  <span className="truncate">Apply Filters</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Search Results (Right Column) */}
          <div className="w-full lg:w-3/4 xl:w-4/5">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <p className="text-secondary-text dark:text-gray-300">Showing <span className="font-bold text-gray-800 dark:text-white">24</span> of <span className="font-bold text-gray-800 dark:text-white">157</span> results</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-secondary-text dark:text-gray-400" htmlFor="sort">Sort by:</label>
                  <select className="form-select text-sm rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark/50 text-secondary-text dark:text-gray-200 focus:border-primary focus:ring-primary" id="sort">
                    <option>Newest First</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                  </select>
                </div>
                <div className="flex items-center gap-1 p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
                  <button className="p-1.5 rounded-md bg-white dark:bg-gray-800 text-primary dark:text-white"><span className="material-symbols-outlined text-lg">grid_view</span></button>
                  <button className="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50"><span className="material-symbols-outlined text-lg">view_list</span></button>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Machine Card Component 1 */}
              <Link to="/machine" className="bg-white dark:bg-background-dark/50 rounded-lg shadow-sm overflow-hidden group block">
                <div className="relative">
                  <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" alt="A modern CNC lathe machine in a clean workshop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9r4hSD1tspDT88l83oxEANWHuC00UWYK3NomFvEFyFZfcfKa7uXP2G9CP1nhf0_TmEdLiOBrO9GKT-OP-m1DtULpk-WLrb1KNLq-kdpEqHNXR02ePvmqs7kTUhPY1DI903rWT3rr5oIDl2_4mceVaPsCAPzUlfQ6QR-bFQEVIPg-4HMrVl95C-0syeLwboiJN80cMy1XuYVxdTR4nEh1lxelbRr6m48MBRacA8prwJVog0SWgArr_V1ll6pfWQdUWigcZVAx65w" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-accent-yellow/90 text-gray-800 text-xs font-bold py-1 px-2 rounded-full">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span>VERIFIED</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white truncate">Haas VF-2 CNC Vertical Mill</h3>
                  <p className="text-sm text-secondary-text dark:text-gray-400">Model: VF-2, Year: 2021</p>
                  <p className="text-lg font-bold text-primary mt-2">$75,000</p>
                  <div className="flex items-center gap-1 text-sm text-secondary-text dark:text-gray-400 mt-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <button className="w-full mt-4 text-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
              </Link>

              {/* Machine Card 2 */}
              <div className="bg-white dark:bg-background-dark/50 rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" alt="A large industrial milling machine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIJqyNjyyMzVg--Ta6V4WoGbfjux1wIIXANtEy5XeXh6T-tuRoxGmYNu6nxqPVrJZy_4ugOkcxyXOpphRWKjXuFgfPH5iEXN2-Q5NPaA2cRYOKD2WnsBktx41iCSGUwQixOU4jRJS1uN74XE92o4wvq-zo6t5ifLZuFb1c8wL4AICLEofRxtBXy9TZMIAngRP7cH_w2PXnipb6V_SxpTOihJ3U9qBGxK3ZNXc7wT9CbLzSiwj4jiTYO0eFUBHPvJJYpKmYjzefhQ" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-accent-yellow/90 text-gray-800 text-xs font-bold py-1 px-2 rounded-full">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span>VERIFIED</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white truncate">DMG Mori CMX 1100 V</h3>
                  <p className="text-sm text-secondary-text dark:text-gray-400">Model: CMX 1100, Year: 2020</p>
                  <p className="text-lg font-bold text-primary mt-2">$120,000</p>
                  <div className="flex items-center gap-1 text-sm text-secondary-text dark:text-gray-400 mt-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>Pune, Maharashtra</span>
                  </div>
                  <button className="w-full mt-4 text-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
              </div>

              {/* Machine Card 3 */}
              <div className="bg-white dark:bg-background-dark/50 rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" alt="Close-up of a CNC machine control panel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4BUJKFFNODw0ITht4dPxyrrlBWsyz3Xmj4IUcCMCSEbG7oSmZcj1udC7clog-K9sdhnhDBQsdVJTddBpq5D2Gb_4j59qafq5fziQgJhZBI27NUqY_mjXeFHwM59HMPfw06MYCVL1qbndGSjk24gf_BlAcKlcn0oCGgjuCaLLVmdAOg3EKXyZ7ikz4659NOgend0LjqJE69Fa1nQxADeiOKCO4hgENYmviVuufYQHr7CL8fhOx7HbJ75mXdAbvIL9QnBPtO8nv8w" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-accent-yellow/90 text-gray-800 text-xs font-bold py-1 px-2 rounded-full">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span>VERIFIED</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white truncate">Mazak QUICK TURN 250MSY</h3>
                  <p className="text-sm text-secondary-text dark:text-gray-400">Model: QT 250, Year: 2019</p>
                  <p className="text-lg font-bold text-primary mt-2">$98,500</p>
                  <div className="flex items-center gap-1 text-sm text-secondary-text dark:text-gray-400 mt-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>Bengaluru, Karnataka</span>
                  </div>
                  <button className="w-full mt-4 text-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
              </div>

              {/* Machine Card 4 */}
              <div className="bg-white dark:bg-background-dark/50 rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" alt="An automated robotic arm working on a production line." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0a3B8_z3SrY7Lvfhwjepoi05MyB5W89uGzK9MBTwCzixGPAXvxULaHeFp1lkQou8ztCEPLdDfjyv5vYumCyQ9v26qStGBkFmTVuDdkmMAlNO_7rvZYlc0x5-JBqWAXCpSaN5ERkHvalOnHSGW3xxZBhJVQv1enPlpIdyfozi5otdd1QnItIDAppjun0cHep7xZNm5onwfGQh5xhDDwLs6sjLdCAzHId4pAY9EVZxmNVsWjP5Z_Mb0els42eUtATfWCoc2nOom-w" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white truncate">Okuma GENOS L300-M</h3>
                  <p className="text-sm text-secondary-text dark:text-gray-400">Model: L300-M, Year: 2022</p>
                  <p className="text-lg font-bold text-primary mt-2">$82,000</p>
                  <div className="flex items-center gap-1 text-sm text-secondary-text dark:text-gray-400 mt-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>Chennai, Tamil Nadu</span>
                  </div>
                  <button className="w-full mt-4 text-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
              </div>

              {/* Machine Card 5 */}
              <div className="bg-white dark:bg-background-dark/50 rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" alt="A technician operating a complex industrial machine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLdpVGsiY1AJ1WqyAe5gGZfNf1ZNeiMmoQu9sVv3w38JPxRZUy6uyzjESO0Y0HcTFs7zdn7ycWAlQkblhcZQETNJMk-8d8Q46EfgqAUrIo6jJ8TJkrMQ6Pe8gVG0PXcazMn-flv40iek8rr9grsYa5aOrPyWlyXoNGkOcM3IIfdjVweIPPfdz4Qf3IdcSHOqKZqb4J9txnPVBUNMAiUQi_XrZCBXLaN9HLZh9mgm3UL9s1M8xGGQNF6gTl48jH_qAl_Rhc2ikyBw" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-accent-yellow/90 text-gray-800 text-xs font-bold py-1 px-2 rounded-full">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span>VERIFIED</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white truncate">Fanuc Robodrill α-D21LiB5</h3>
                  <p className="text-sm text-secondary-text dark:text-gray-400">Model: α-D21, Year: 2021</p>
                  <p className="text-lg font-bold text-primary mt-2">$115,000</p>
                  <div className="flex items-center gap-1 text-sm text-secondary-text dark:text-gray-400 mt-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>Ahmedabad, Gujarat</span>
                  </div>
                  <button className="w-full mt-4 text-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
              </div>

              {/* Machine Card 6 */}
              <div className="bg-white dark:bg-background-dark/50 rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" alt="Wide shot of a factory floor with multiple machines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNnX49LJMIbB0vCM7pIyRcaR4FTfpLZWOClYmF2v8dTsvOubVIbTCNJxOXDwQ1O-gy2SAK1pPo-RIvj8Exp3Hkfv4XTh-xRD99JfI9IebJb_M4wRJBH7lrY0qSRALHO-u5HyXulUAv2Ip8XnjuavkSkoROOPT7-wE5XVYc30QcAJFd1OkS6TWZ7L97TMy2ypusxTuU4LdRgZOOIy6IAJ63woCZzzbHnXagPRa-Udr5-SVCb9N4xHTWJRrce1EDwncO6XHms03dJA" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white truncate">Bridgeport Series I Milling Machine</h3>
                  <p className="text-sm text-secondary-text dark:text-gray-400">Model: Series I, Year: 2018</p>
                  <p className="text-lg font-bold text-primary mt-2">$25,000</p>
                  <div className="flex items-center gap-1 text-sm text-secondary-text dark:text-gray-400 mt-1">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>Noida, Uttar Pradesh</span>
                  </div>
                  <button className="w-full mt-4 text-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-1">
                <a className="inline-flex justify-center items-center size-9 rounded-lg text-secondary-text dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" href="#"><span className="material-symbols-outlined text-lg">chevron_left</span></a>
                <a className="inline-flex justify-center items-center size-9 rounded-lg text-white bg-primary" href="#">1</a>
                <a className="inline-flex justify-center items-center size-9 rounded-lg text-secondary-text dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" href="#">2</a>
                <a className="inline-flex justify-center items-center size-9 rounded-lg text-secondary-text dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" href="#">3</a>
                <span className="inline-flex justify-center items-center size-9 text-secondary-text dark:text-gray-400">...</span>
                <a className="inline-flex justify-center items-center size-9 rounded-lg text-secondary-text dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" href="#">7</a>
                <a className="inline-flex justify-center items-center size-9 rounded-lg text-secondary-text dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" href="#"><span className="material-symbols-outlined text-lg">chevron_right</span></a>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* Replaced hardcoded footer with Footer component */}
      <Footer />
    </div>
  );
}

export default SearchResultsPage;