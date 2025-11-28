import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// --- Import our new useAuth hook ---
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  // --- Get the user and logout function from context ---
  const { user, logout } = useAuth();
  
  // --- Dynamic Navbar Logic ---
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';
  const isMachinePage = location.pathname === '/machine';
  const isAddListingPage = location.pathname === '/sell';
  const isHomePage = location.pathname === '/';

  // Define links based on the current page
  const navLinks = (() => {
    if (isSearchPage) {
      return [
        { name: 'Home', to: '/' },
        { name: 'Categories', href: '#' },
        { name: 'Sell a Machine', to: '/sell' },
      ];
    }
    if (isMachinePage) {
      return [
        { name: 'All Machines', to: '/search' },
        { name: 'Sell Machine', to: '/sell' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ];
    }
    // Default / Home
    return [
      { name: 'Browse Machines', to: '/search' },
      { name: 'Sell a Machine', to: '/sell' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ];
  })();

  return (
    <header className="bg-white dark:bg-background-dark/50 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section: Logo & (NavLinks for Home/Search) */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo with Spin Animation */}
              {/* The wrapper div handles the size and the rotation animation */}
              <div className="size-8 transition-transform duration-500 group-hover:rotate-90">
                <img 
                  src="/logo.svg" 
                  alt="Vishwakarma Setu Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <h2 className="text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Vishwakarma Setu</h2>
            </Link>

            {/* Standard Nav Links (Left Aligned) - Show for Home and Search pages */}
            {!isMachinePage && (
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  link.to ? (
                    <Link key={link.name} to={link.to} className="text-sm font-medium leading-normal text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a key={link.name} href={link.href} className="text-sm font-medium leading-normal text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  )
                ))}
              </nav>
            )}
          </div>

          {/* Right Section: Search Bar + (NavLinks for MachinePage) + Auth */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Show if NOT on Home Page */}
            {!isHomePage && (
              <div className="hidden lg:block w-72 mx-2">
                <label className="flex flex-col w-full">
                  {/* Added focus-within classes here to style the container when input is focused */}
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-10 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 flex items-center justify-center pl-3 text-[20px]">search</span>
                    <input 
                      // Added border-none and focus:ring-0 to remove default input styling
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-gray-200 focus:outline-none focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-2 text-sm" 
                      placeholder="Search machines..." 
                      defaultValue={isSearchPage ? "CNC Lathe" : ""}
                    />
                  </div>
                </label>
              </div>
            )}

            {/* Nav Links (Right Aligned) - Only for Machine Listing Page */}
            {isMachinePage && (
              <nav className="hidden lg:flex items-center gap-8 mr-4">
                {navLinks.map((link) => (
                  link.to ? (
                    <Link key={link.name} to={link.to} className="text-sm font-medium leading-normal text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a key={link.name} href={link.href} className="text-sm font-medium leading-normal text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  )
                ))}
              </nav>
            )}

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              {user ? (
                <>
                  <span className="hidden sm:flex items-center text-sm text-text-light dark:text-text-dark mr-2">
                    Hi, {user.companyName}
                  </span>
                  <button
                    onClick={logout}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <span className="truncate">Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                  >
                    <span className="truncate">Log In</span>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <span className="truncate">Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;