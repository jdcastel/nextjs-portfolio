"use client";
import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { PinContainer } from "../../../components/3d-pin";

export function ProjectsSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="project" className="section">
				<HeadingDivider title="Latest projects" />
				<div
					className="my-5 flex"
				>
					<div className="mr-8">
						<ul
						ref={textRef}
						tabIndex="0"
						className="pt-14 pb-16 font-light text-lg max-w-5xl flex flex-col gap-3"
						style={{
							transform: isTextInView ? "none" : "translateX(-200px)",
							opacity: isTextInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
							<li>
								- Implemented a scalable microservice with CRUD operations to manage fragments of
								files in formats such as txt, JSON, PNG, JPEG, WebP, and GIF. Key AWS technologies
								including Cognito, ECR, ECS, S3, and DynamoDB were leveraged for efficient
								integration.
							</li>
							<li>
								- Utilized Docker and Docker Compose, along with a robust CI/CD pipeline, to
								facilitate the project's transition through local, development, and production
								phases. Achieved secure deployment in a domain environment with HTTPS support.
							</li>
							<li>
								- Developed unit tests, achieving an 80% coverage of the project. Tools like JEST
								and HURL were employed to ensure code reliability and quality across all stages of
								development.
							</li>
						</ul>
					</div>
					<div>
						<PinContainer title="/youtu.be/oiVnywvvH7E" href="https://youtu.be/oiVnywvvH7E">
							<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
								<h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold text-slate-100">
									Cloud-Based Microservice for Automotive Parts Company
								</h3>
								<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
							</div>
						</PinContainer>
					</div>
				</div>
				<div className="mt-8 flex">
					<div className="mr-8"></div>
					<div
						ref={textRef}
						tabIndex="0"
						className="pt-10 pb-16 max-w-5xl flex flex-col gap-3"
						style={{
							transform: isTextInView ? "none" : "translateX(-200px)",
							opacity: isTextInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<PinContainer title="/chronicle-web-app-eight.vercel.app/" href="https://chronicle-web-app-eight.vercel.app/">
							<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
								<h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold text-slate-100">
									Chronicle App (Social App Journal)
								</h3>
								<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
							</div>
						</PinContainer>
					</div>
					<ul
						ref={textRef}
						tabIndex="0"
						className="pt-28 pb-16 font-light text-lg max-w-5xl flex flex-col gap-3"
						style={{
							transform: isTextInView ? "none" : "translateX(-200px)",
							opacity: isTextInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<li>
							- Developed with MERN stack (MongoDB, Express.js, React, Node.js) along with the NEXT
							framework for robust development in both the backend and frontend. Additionally, I
							managed data within the application using Redux.
						</li>
						<li>
							- Implemented a user-centered UI/UX design in Figma, incorporating features such as
							travel journal creation, destination ratings, forums, and meetups.
						</li>
						<li>
							- Maintained a detailed project schedule with milestones and acceptance criteria,
							monitoring progress on GitHub.
						</li>
					</ul>
				</div>
			</section>
		</LazyMotion>
	);
}
