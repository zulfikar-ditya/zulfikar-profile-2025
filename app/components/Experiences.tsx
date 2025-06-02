import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  date_start: string;
  date_end: string;
  type: string;
  descriptions: string[] | string[][]; // Descriptions can be string array or array of string arrays
}

interface ExperiencesProps {
  experiences: ExperienceItem[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return <p>No experiences to display.</p>;
  }

  return (
    <section className="mt-8">
      <h2 className="text-primary dark:text-primary">Experiences</h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center flex-col gap-2 w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="mt-4 w-full">
              <h3>{exp.title}</h3>
              <h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
                {exp.company} ({exp.date_start} - {exp.date_end})
                <span className="ml-2 bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                  {exp.type}
                </span>
              </h5>
              <div className="text-secondaryText mt-2">
                <ul className="list-disc list-inside space-y-1">
                  {Array.isArray(exp.descriptions[0])
                    ? (exp.descriptions[0] as string[]).map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))
                    : (exp.descriptions as string[]).map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
