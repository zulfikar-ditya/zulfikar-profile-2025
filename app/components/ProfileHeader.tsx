import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, UserCircleIcon, CodeBracketIcon, DocumentIcon, NewspaperIcon, PhotoIcon } from '@heroicons/react/20/solid';

interface ProfileHeaderProps {
  imageUrl: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  instagramUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  mediumUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  imageUrl,
  name,
  title,
  phone,
  email,
  location,
  instagramUrl,
  linkedinUrl,
  githubUrl,
  resumeUrl,
  mediumUrl,
}) => {
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDarken rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4 flex-col">
        <Image
          src={imageUrl}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-primary transition-transform hover:scale-110"
          width={128}
          height={128}
        />
        <div className="text-center">
          <h1>{name}</h1>
          <p className="text-secondaryText">{title}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="w-full">
          <h3>Contact</h3>
          <div className="space-y-2">
            {phone && (
              <p className="text-secondaryText">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center hover:text-primary dark:hover:text-primary"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  {phone}
                </a>
              </p>
            )}
            <p className="text-secondaryText">
              <a
                href={`mailto:${email}`}
                className="flex items-center hover:text-primary dark:hover:text-primary"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span className="break-all">{email}</span>
              </a>
            </p>
            {location && (
               <p className="text-secondaryText">
                <span className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  {location}
                </span>
              </p>
            )}
             <p className="text-secondaryText">
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary dark:hover:text-primary"
                >
                    <PhotoIcon className="h-5 w-5 mr-2" />
                    Instagram
                </a>
            </p>
            <p className="text-secondaryText">
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary dark:hover:text-primary"
                >
                    <UserCircleIcon className="h-5 w-5 mr-2" />
                    LinkedIn
                </a>
            </p>
            <p className="text-secondaryText">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary dark:hover:text-primary"
                >
                    <CodeBracketIcon className="h-5 w-5 mr-2" />
                    GitHub
                </a>
            </p>
            <p className="text-secondaryText">
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary dark:hover:text-primary"
                >
                    <DocumentIcon className="h-5 w-5 mr-2" />
                    Resume
                </a>
            </p>
            <p className="text-secondaryText">
                <a
                    href={mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary dark:hover:text-primary"
                >
                    <NewspaperIcon className="h-5 w-5 mr-2" />
                    Medium
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
