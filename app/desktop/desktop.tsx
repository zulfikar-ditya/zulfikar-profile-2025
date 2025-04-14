import {
	CodeBracketIcon,
	DocumentIcon,
	EnvelopeIcon,
	PhotoIcon,
	UserCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

export default function desktop() {
	return (
		<div className="container mx-auto p-4">
			<div className="flex flex-wrap md:flex-nowrap gap-4">
				<aside className="w-full md:w-2/4 lg:w-4/12 relative md:sticky top-4 h-fit mb-4 lg:mb-0">
					<div className="bg-backgroundLight dark:bg-backgroundDarken rounded-lg shadow-lg p-4">
						<div className="flex items-center gap-2 mb-4 flex-col">
							<Image
								src="images/profile.jpg"
								alt="Zulfikar Ditya"
								className="w-32 h-32 rounded-full object-cover border-4 border-primary transition-transform hover:scale-110"
							/>
							<div className="text-center">
								<h1>Zulfikar Ditya</h1>
								<p className="text-secondaryText">
									Backend Developer | 5+ Years of Experience in Laravel, NestJS & API Architecture
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
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2 mb-4">
							<h3>Weapons</h3>
							<div className="flex flex-wrap gap-2">
								{[
									"PHP",
									"Laravel",
									"JavaScript",
									"TypeScript",
									"NestJS",
									"Express",
									"Golang",
									"Mendix",
									"MySQL",
									"PostgreSQL",
									"Mongo",
									"NextJs",
									"ReactJS",
									"TailwindCSS",
									"Bootstrap",
									"jQuery",
									"Git",
									"Github",
									"Gitlab",
									"Github Action",
								].map((tech, index) => (
									<span
										key={index}
										className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-200 text-center text-ellipsis text-nowrap"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</aside>

				<main className="w-full">
					<div className="bg-backgroundLight dark:bg-backgroundDarken rounded-lg shadow-lg p-4">
						<section id="about">
							<h2 className="text-primary dark:text-primary">About Me</h2>
							<p className="text-secondaryText">
								Seasoned Backend Developer with 5 years of experience designing secure, high-performance web applications and RESTful APIs. Specialized in Laravel, NestJS, and database optimization with proven expertise in third-party integrations and ERP system architecture. Combines technical excellence with strong collaboration skills to deliver scalable solutions that drive business value. Committed to clean, maintainable code and continuous improvement.
							</p>
						</section>

						<section id="experiences" className="mt-8">
							<h2 className="text-primary dark:text-primary">Experiences</h2>
							<div className="flex items-center gap-4 mb-4">
								<div className="flex items-center flex-col gap-2 w-full">
									<div className="mt-4 w-full">
										<h3>Backend Developer</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											SUPER FUTURE KOMPANY (Sept 2024 - Present)
										</h5>
										<div className="text-secondaryText">
											<p>
												I have designed and implemented RESTful APIs using
												Laravel and NestJS frameworks, ensuring consistency and
												efficiency by following industry-standard practices like
												HTTP methods, status codes, and JSON data formats. My
												experience includes securing APIs with robust
												authentication and authorization mechanisms, optimizing
												database performance through efficient schemas, and
												utilizing SQL and ORM techniques.
											</p>
											<p>
												I integrated third-party APIs (e.g., Microsoft,
												WhatsApp, Google) using Laravel&apos;s Http and Guzzle
												libraries, implementing error handling and retry
												mechanisms for resilience. Throughout, I adhered to
												coding standards, conducted code reviews and unit tests,
												and set up comprehensive logging and monitoring systems
												to ensure optimal application performance.
											</p>
										</div>
									</div>

									<div className="mt-4 w-full">
										<h3>Web Developer</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											Self Employee (May 2024 - Present)
										</h5>
										<div className="text-secondaryText">
											<p>
												As a freelance web developer, I engage closely with
												clients to understand their goals, target audience, and
												desired functionalities, documenting all requirements
												and defining the project scope. This includes designing
												wireframes and prototypes with iterative client
												feedback. I leverage an RDBMS like MySQL, applying
												database normalization and creating ERDs for clear table
												relationships.
											</p>
											<p>
												Throughout the development cycle, I use Git for version
												control and rely on project management tools like Trello
												and Notion to track tasks and milestones, adopting Agile
												methodologies for iterative progress. I also ensure
												smooth deployment by setting up development, staging,
												and production environments and incorporating CI/CD
												pipelines for automated testing and deployment.
											</p>
										</div>
									</div>

									<div className="mt-4 w-full">
										<h3>Mendix Developer</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											PT Anomali Trans Teknologi (Sept 2024 - Sept 2024)
										</h5>
										<div className="text-secondaryText">
											<p>
												As a Mendix Developer at PT. Anomali Trans Teknologi, I
												work on building applications for PT KAI Indonesia,
												focusing on delivering high-quality solutions using the
												Mendix platform. As a core developer, I am responsible
												for designing, developing, and maintaining various
												features of the application, ensuring they meet the
												requirements of the client. My role involves
												collaborating with the project team to ensure that the
												development process runs smoothly, while also ensuring
												the applications are optimized, scalable, and aligned
												with the project goals.
											</p>
										</div>
									</div>

									<div className="mt-4 w-full">
										<h3>Application Developer Officer</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											PT Anomali Trans Teknologi (June 2023 - August 2024)
										</h5>
										<div className="text-secondaryText">
											<p>
												At PT. Anomali Trans Teknologi, I have developed
												expertise in full-stack web development, focusing on
												building scalable, user-centric applications. I designed
												efficient database schemas using PostgreSQL, ensuring
												optimized data storage and retrieval to support growing
												web applications. My experience includes writing complex
												SQL queries for seamless data manipulation, empowering
												robust functionality. By leveraging Laravel&apos;s MVC
												architecture, I constructed responsive, secure, and
												user-friendly web apps, implementing efficient data
												interactions with Eloquent ORM while prioritizing data
												integrity and security across the backend.
											</p>
											<p>
												I have thrived in cross-functional collaboration,
												working closely with designers and product managers to
												translate user needs into technical requirements,
												ensuring a user-centric experience. In addition, I
												continuously explore emerging technologies, such as the
												Mendix low-code platform and ASP.NET, expanding my
												skillset and adaptability. This dedication to learning
												culminated in the development of a functional web
												application using ASP.NET, further solidifying my
												understanding of diverse frameworks and platforms.
											</p>
										</div>
									</div>

									<div className="mt-4 w-full">
										<h3>Backend Developer</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											PT SEJE DIGITAL UTAMA (Oct 2023 - May 2024)
										</h5>
										<div className="text-secondaryText">
											<p>
												As a Backend Developer at PT. Seje Digital Utama, I
												specialize in crafting secure and optimized APIs for
												seamless data exchange between web applications and
												external services, such as Hue Huy &amp; Aku Hadir APIs.
												Utilizing Laravel&apos;s HTTP clients and data mapping, I
												ensure efficient interaction and data integrity across
												integrations. I am proficient in leveraging Laravel&apos;s
												powerful features for third-party API integrations,
												implementing robust error handling, and enforcing
												security measures to prevent failures and breaches. My
												focus on writing clean, maintainable code with Laravel&apos;s
												Eloquent ORM ensures efficient CRUD operations, while
												prioritizing data validation and sanitization to protect
												against vulnerabilities.
											</p>
											<p>
												I collaborate closely with front-end developers to
												design user-friendly APIs, create detailed
												documentation, and implement versioning for smooth
												updates. Through continuous feedback loops, I optimize
												API usability and performance. As a strong advocate for
												clean, readable code, I ensure that all PHP and Laravel
												code is well-commented and maintainable, fostering
												collaboration, reducing errors, and ensuring long-term
												application stability.
											</p>
										</div>
									</div>

									<div className="mt-4 w-full">
										<h3>Freelance Laravel Developer</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											INTIVE STUDIO (June 2023 - March 2024)
										</h5>
										<div className="text-secondaryText">
											<p>
												As a Freelance Laravel Developer at Intive Studio, I
												played a pivotal role in building custom ERP web
												applications, leveraging Laravel to design efficient
												database structures, implement complex business logic,
												and create user-friendly interfaces. I developed robust
												algorithms to handle multi-currency transactions within
												the ERP system, ensuring accurate and reliable financial
												data management. My expertise in full-stack development
												allowed me to collaborate seamlessly with front-end
												developers, contributing to all stages of the
												development lifecycle, from planning to deployment. I
												have a strong problem-solving mindset, using my
												exceptional debugging and code analysis skills to
												resolve complex issues.
											</p>
										</div>
									</div>

									<div className="mt-4 w-full">
										<h3>Web App Developer</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											INTIVE STUDIO (July 2022 - June 2023)
										</h5>
										<div className="text-secondaryText">
											<p>
												As an ERP Systems Architect with Laravel, I played a key
												role as a core developer in building custom ERP web
												applications. I designed efficient database structures,
												implemented complex business logic, and crafted
												intuitive user interfaces, ensuring the solutions were
												scalable and user-friendly. My expertise includes
												developing robust algorithms to handle multi-currency
												transactions, guaranteeing reliable financial data
												management within the ERP system. I thrived in
												collaborative environments, working seamlessly with
												front-end developers to deliver cohesive user
												experiences and contributing to all phases of the
												development lifecycle, from planning to deployment.
											</p>
											<p>
												I have a strong problem-solving mindset, with
												exceptional debugging and code analysis skills that
												allow me to effectively identify and resolve complex
												issues. I have also actively mentored other developers,
												tackling intricate algorithms and contributing
												innovative solutions to optimize ERP systems. As a code
												review leader, I ensured high-quality, maintainable code
												through rigorous reviews, refactoring, and adhering to
												best practices. I have hands-on experience with core ERP
												modules, including Purchase, Sales, Delivery, Invoice,
												Warehouse, Master Data, Finance, and Human Resources.
												Committed to continuous improvement, I stay updated on
												the latest Laravel advancements, constantly seeking to
												enhance my skills and contribute to future web
												application projects.
											</p>
										</div>
									</div>

									<div className="mt-4 w-full">
										<h3>Backend Developer</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											SEJE DIGITAL (May 2022 - August 2022)
										</h5>
										<div className="text-secondaryText">
											<p>
												As a Backend Developer at Seje Digital, I focus on
												ensuring high-quality code by applying meticulous
												attention to detail in quality assurance and testing. I
												conduct thorough test runs to verify that applications
												produce accurate results and adhere to defined
												specifications, minimizing potential issues in
												production environments. I also specialize in
												integrating third-party APIs using Laravel, enabling
												seamless data exchange and expanding application
												functionality. My approach to development is highly
												structured, using workflow charts and diagrams to plan,
												analyze, and optimize code for efficiency,
												maintainability, and clarity.
											</p>
											<p>
												Additionally, I have expertise in front-end
												technologies, using Next.js and Tailwind CSS to create
												visually appealing and highly responsive user
												interfaces. I ensure exceptional user experiences. I am
												committed to continuous improvement, staying informed
												about the latest advancements in web development
												frameworks and technologies to ensure that my projects
												remain on the cutting edge and deliver the best possible
												results.
											</p>
										</div>
									</div>

									<div className="mt-4 w-full">
										<h3>Software Engineer Internship</h3>
										<h5 className="text-secondaryTextLight dark:text-secondaryTextDark">
											PT. Promedia Citra Informatindo (Jan 2021 - June 2021)
										</h5>
										<div className="text-secondaryText">
											<p>
												During my Software Engineer Internship at PT. Promedia
												Citra Informatindo, I focused on refining software by
												identifying and correcting errors in existing systems,
												contributing to interface upgrades, and improving
												performance to enhance user satisfaction and system
												efficiency. I played a key role in technical
												documentation, clearly communicating complex concepts
												through user manuals and guides to empower end-users in
												efficiently leveraging software applications. My
												attention to detail extended to workflow design, where I
												translated detailed charts and diagrams into
												well-structured, maintainable code, ensuring smooth
												program execution.
											</p>
											<p>
												Additionally, I gained experience in cross-platform
												development by building Android applications using Java,
												catering to the mobile device market, and creating APIs
												for mobile app integration. As a versatile developer, I
												worked with both Laravel and Yii frameworks, selecting
												the most suitable one based on project requirements.
												Committed to continuous learning, I actively expanded my
												knowledge and skills, ensuring adaptability to evolving
												technologies and project needs.
											</p>
										</div>
									</div>
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
