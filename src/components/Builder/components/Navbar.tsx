import React from 'react';

interface NavbarProps {
  logo: string;
  links: Array<{ text: string; url: string }>;
}

export const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">{logo}</span>
          </div>
          <div className="flex items-center space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}