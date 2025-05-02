import {
	CodeBracketIcon,
	DocumentIcon,
	EnvelopeIcon,
	NewspaperIcon,
	PhotoIcon,
	UserCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import experiencesData from "./experiences.json";
import skillsData from "./skills.json";

export default function desktop() {
	const experiences = experiencesData;
	const skills = skillsData;

	return (
		<div className="container mx-auto p-4">
			<div className="flex flex-wrap md:flex-nowrap gap-4">
				<aside className="w-full md:w-2/4 lg:w-4/12 relative md:sticky top-4 h-fit mb-4 lg:mb-0">
					<div className="bg-backgroundLight dark:bg-backgroundDarken rounded-lg shadow-lg p-4">
						<div className="flex items-center gap-2 mb-4 flex-col">
							<Image
								src="/images/profile.jpg"
								alt="Zulfikar Ditya"
								className="w-32 h-32 rounded-full object-cover border-4 border-primary transition-transform hover:scale-110"
								width={128}
								height={128}
							/>
							<div className="text-center">
								<h1>Zulfikar Ditya</h1>
								<p className="text-secondaryText">
									Backend Developer | 5+ Years of Experience in Laravel, NestJS
									& API Architecture
								</p>
							</div>
						</div>

						<div className="flex items-center gap-2 mb-4">
							<div className="w-full">
								<h3>Contact</h3>
								<div className="space-y-2">
									<p className="text-secondaryText">
										<a
											href="mailto:zulfikarditya.work@gmail.com"
											className="flex items-center hover:text-primary dark:hover:text-primary"
										>
											<EnvelopeIcon className="h-5 w-5 mr-2" />
											<span className="break-all">
												zulfikarditya.work@gmail.com
											</span>
										</a>
									</p>
									<p className="text-secondaryText">
										<a
											href="https://www.instagram.com/zulfikar.ditya"
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
											href="https://www.linkedin.com/in/zulfikar-ditya"
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
											href="https://github.com/zulfikar-ditya"
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
											href="https://drive.google.com/file/d/1kkHIHo48Lvj6Ug832puMIMHCx4JTTnRD/view?usp=sharing"
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
											href="https://medium.com/@zulfikarditya"
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
				</aside>

				<main className="w-full">
					<div className="bg-backgroundLight dark:bg-backgroundDarken rounded-lg shadow-lg p-4">
						<section id="about">
							<h2 className="text-primary dark:text-primary">About Me</h2>
							<p className="text-secondaryText">
								Seasoned Backend Developer with 5 years of experience designing
								secure, high-performance web applications and RESTful APIs.
								Specialized in Laravel, NestJS, and database optimization with
								proven expertise in third-party integrations and ERP system
								architecture. Combines technical excellence with strong
								collaboration skills to deliver scalable solutions that drive
								business value. Committed to clean, maintainable code and
								continuous improvement.
							</p>
						</section>

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
														? exp.descriptions[0].map((desc, descIndex) => (
																<li key={descIndex}>{desc}</li>
														  ))
														: exp.descriptions.map((desc, descIndex) => (
																<li key={descIndex}>{desc}</li>
														  ))}
												</ul>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						<section id="education" className="mt-8">
							<h2 className="text-primary dark:text-primary">Education</h2>
							<div className="flex items-center gap-4 mb-4">
								<div className="flex items-center flex-col gap-2 w-full">
									<div className="mt-4 w-full">
										<h3>Universitas Cakrawala</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											Data Science (2024 - Present)
										</h5>
									</div>
									<div className="mt-4 w-full">
										<h3>SMKN 1 jenangan</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											Software Engineer (July 2019 - June 2022)
										</h5>
									</div>
								</div>
							</div>
						</section>

						<section id="award" className="mt-8">
							<h2 className="text-primary dark:text-primary">Award</h2>
							<div className="flex items-center gap-4 mb-4">
								<div className="flex items-center flex-col gap-2 w-full">
									<div className="mt-4 w-full">
										<h3>2nd Position KKSI Smart School Field 2021</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											2021
										</h5>
										<p className="text-secondaryText">
											Get position 2nd in KKSI Smart School Field 2021 with the
											theme of Smart School. Making web app using Laravel And
											Bootstrap, the app is about School management, it contains
											landing pages, student management, library management, etc
										</p>
									</div>

									<div className="mt-4 w-full">
										<h3>3rd Position SAKKSI Smart School Field 2021</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											2021
										</h5>
										<p className="text-secondaryText">
											Get position 3rd in SAKKSI Smart School Field 2021 with
											the theme of Smart School. We add some feature from KKSI
											app, and we make it more better, we add some feature like
											employee management, improving landing pages, todo app,
											etc.
										</p>
									</div>

									<div className="mt-4 w-full">
										<h3>1st Position LKS Web Technology (Regional Level)</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											2022
										</h5>
										<p className="text-secondaryText">
											Get 1st position in Competency Competition for Students
											(LKS) in the Field of Web Technology Working Area 4 East
											Java. I must make web app using Laravel and Bootstrap, the
											app is about Course Online, contains page for student,
											teacher, and admin.
										</p>
									</div>

									<div className="mt-4 w-full">
										<h3>
											Rank 5 LKS Web Technology East Java (Province Level)
										</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											2022
										</h5>
										<p className="text-secondaryText">
											Get rank 5ft in Competency Competition for Students (LKS)
											in the Field of Web Technology (Province of East Java).
											Make an App using laravel and React js, the app is about
											vaccination registration, contains page for user, user can
											booking ticket for vacination.
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
