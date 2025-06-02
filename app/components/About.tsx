import React from 'react';

interface AboutProps {
  aboutText: string;
}

const About: React.FC<AboutProps> = ({ aboutText }) => {
  return (
    <section id="about">
      <h2 className="text-primary dark:text-primary">About Me</h2>
      <p className="text-secondaryText">{aboutText}</p>
    </section>
  );
};

export default About;
