import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  duration?: string; // Optional, as one of the items doesn't have a duration like "Present"
}

interface EducationProps {
  educationData: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationData }) => {
  if (!educationData || educationData.length === 0) {
    return <p>No education data to display.</p>;
  }

  return (
    <section id="education" className="mt-8">
      <h2 className="text-primary dark:text-primary">Education</h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center flex-col gap-2 w-full">
          {educationData.map((edu, index) => (
            <div key={index} className="mt-4 w-full">
              <h3>{edu.institution}</h3>
              <h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
                {edu.degree} {edu.duration && `(${edu.duration})`}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
