import React from 'react';

interface FooterProps {
  copyright: string;
}

export const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}