import React from 'react';

interface SectionProps {
  backgroundColor: string;
  padding: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  backgroundColor,
  padding,
  children,
}) => {
  return (
    <section
      style={{ backgroundColor, padding }}
      className="w-full rounded-lg"
    >
      {children || (
        <div className="text-center text-gray-400">
          Add components to this section
        </div>
      )}
    </section>
  );
}