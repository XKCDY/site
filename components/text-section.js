import React from 'react';

const Section = ({children, label}) => (
  <div className="mt-5">
    <h1 className="font-bold text-4xl mb-6">{label}</h1>

    {children}
  </div>
);

const SectionContent = ({children}) => (
  <p className="text-xl">
    {children}
  </p>
);

Section.Content = SectionContent;

export default Section;
