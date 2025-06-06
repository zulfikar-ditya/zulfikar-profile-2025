import React from "react";
import experiencesData from "../experiences.json";
import skillsData from "../skills.json";

import {
	ProfileHeader,
	Skills,
	About,
	Experiences,
	Education,
	Awards,
	DarkMode,
} from "../components";

export default function DesktopPage() {
	// Renamed function
	const experiences = experiencesData;
	const skills = skillsData;
	const aboutMeText =
		"Seasoned Backend Developer with 5 years of experience designing secure, high-performance web applications and RESTful APIs. Specialized in Laravel, NestJS, and database optimization with proven expertise in third-party integrations and ERP system architecture. Combines technical excellence with strong collaboration skills to deliver scalable solutions that drive business value. Committed to clean, maintainable code and continuous improvement.";

	const educationData = [
		{
			institution: "Universitas Cakrawala",
			degree: "Data Science",
			duration: "2024 - Present",
		},
		{
			institution: "SMKN 1 jenangan",
			degree: "Software Engineer",
			duration: "July 2019 - June 2022",
		},
	];

	const awardsData = [
		{
			title: "2nd Position KKSI Smart School Field 2021",
			year: "2021",
			description:
				"Get position 2nd in KKSI Smart School Field 2021 with the theme of Smart School. Making web app using Laravel And Bootstrap, the app is about School management, it contains landing pages, student management, library management, etc",
		},
		{
			title: "3rd Position SAKKSI Smart School Field 2021",
			year: "2021",
			description:
				"Get position 3rd in SAKKSI Smart School Field 2021 with the theme of Smart School. We add some feature from KKSI app, and we make it more better, we add some feature like employee management, improving landing pages, todo app, etc.",
		},
		{
			title: "1st Position LKS Web Technology (Regional Level)",
			year: "2022",
			description:
				"Get 1st position in Competency Competition for Students (LKS) in the Field of Web Technology Working Area 4 East Java. I must make web app using Laravel and Bootstrap, the app is about Course Online, contains page for student, teacher, and admin.",
		},
		{
			title: "Rank 5 LKS Web Technology East Java (Province Level)",
			year: "2022",
			description:
				"Get rank 5ft in Competency Competition for Students (LKS) in the Field of Web Technology (Province of East Java). Make an App using laravel and React js, the app is about vaccination registration, contains page for user, user can booking ticket for vacination.",
		},
	];

	// Profile data - this would typically come from a CMS, API, or config file
	const profileData = {
		imageUrl: "/images/profile.jpg", // This path might need adjustment depending on public directory structure
		name: "Zulfikar Ditya",
		title:
			"Backend Developer | 5+ Years of Experience in Laravel, NestJS & API Architecture",
		phone: "",
		email: "zulfikarditya.work@gmail.com",
		location: "Indonesia",
		instagramUrl: "https://www.instagram.com/zulfikar.ditya",
		linkedinUrl: "https://www.linkedin.com/in/zulfikar-ditya",
		githubUrl: "https://github.com/zulfikar-ditya",
		resumeUrl:
			"https://drive.google.com/file/d/1kkHIHo48Lvj6Ug832puMIMHCx4JTTnRD/view?usp=sharing",
		mediumUrl: "https://medium.com/@zulfikarditya",
	};

	return (
		<div className="container mx-auto p-4">
			<div className="flex flex-wrap md:flex-nowrap gap-4">
				<aside className="w-full md:w-2/4 lg:w-4/12 relative md:sticky top-4 h-fit mb-4 lg:mb-0">
					<ProfileHeader {...profileData} />
					<Skills skills={skills} />
				</aside>

				<main className="w-full">
					<div className="bg-backgroundLight dark:bg-backgroundDarken rounded-lg shadow-lg p-4">
						<About aboutText={aboutMeText} />
						<Experiences experiences={experiences} />
						<Education educationData={educationData} />
						<Awards awardsData={awardsData} />
					</div>
				</main>
			</div>
			<DarkMode />
		</div>
	);
}
