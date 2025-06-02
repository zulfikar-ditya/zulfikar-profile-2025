import React from 'react';

interface SkillsProps {
  skills: { [category: string]: string[] };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || Object.keys(skills).length === 0) {
    return <p>No skills to display.</p>;
  }

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDarken rounded-lg shadow-lg p-4 mt-4">
      <div className="flex flex-col gap-2 mb-4">
        <h3>Weapons</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(skills).map(([category, techs]) =>
              (techs as string[]).map((tech, index) => (
                <span
                  key={`${category}-${index}`}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-200 text-center text-ellipsis text-nowrap"
                >
                  {tech}
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
