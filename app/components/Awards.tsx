import React from 'react';

interface AwardItem {
  title: string;
  year: string;
  description: string;
}

interface AwardsProps {
  awardsData: AwardItem[];
}

const Awards: React.FC<AwardsProps> = ({ awardsData }) => {
  if (!awardsData || awardsData.length === 0) {
    return <p>No awards data to display.</p>;
  }

  return (
    <section id="award" className="mt-8">
      <h2 className="text-primary dark:text-primary">Award</h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center flex-col gap-2 w-full">
          {awardsData.map((award, index) => (
            <div key={index} className="mt-4 w-full">
              <h3>{award.title}</h3>
              <h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
                {award.year}
              </h5>
              <p className="text-secondaryText">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
