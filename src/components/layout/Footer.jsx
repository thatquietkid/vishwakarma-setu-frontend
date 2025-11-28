import React from 'react';

function Footer() {

  const companyLinks = [
    { label: "About Us", url: "/about" },
    { label: "Careers", url: "/career" },
    { label: "Press", url: "/press" }
  ];

  const supportLinks = [
    { label: "Contact Us", url: "/contact" },
    { label: "FAQ", url: "/faq" },
    { label: "Shipping", url: "/shipping" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms of Service", url: "/terms" }
  ];

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <a className="text-base text-gray-300 hover:text-white" href={item.url}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              {supportLinks.map((item, index) => (
                <li key={index}>
                  <a className="text-base text-gray-300 hover:text-white" href={item.url}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              {legalLinks.map((item, index) => (
                <li key={index}>
                  <a className="text-base text-gray-300 hover:text-white" href={item.url}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Info */}
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