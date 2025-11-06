import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a className="text-base text-gray-300 hover:text-white" href="#">About Us</a></li>
              <li><a className="text-base text-gray-300 hover:text-white" href="#">Careers</a></li>
              <li><a className="text-base text-gray-300 hover:text-white" href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a className="text-base text-gray-300 hover:text-white" href="#">Contact Us</a></li>
              <li><a className="text-base text-gray-300 hover:text-white" href="#">FAQ</a></li>
              <li><a className="text-base text-gray-300 hover:text-white" href="#">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a className="text-base text-gray-300 hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="text-base text-gray-300 hover:text-white" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Vishwakarma Setu</h2>
            <p className="text-sm text-gray-400 mt-2">The future of industrial commerce.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex items-center justify-between">
          <p className="text-base text-gray-400">© 2025 Vishwakarma Setu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;