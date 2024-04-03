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
					ref={textRef}
					tabIndex="0"
					className="my-5 text-xl flex"
					style={{
						transform: isTextInView ? "none" : "translateX(-200px)",
						opacity: isTextInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					<div className="mr-8">
						<p>
            •	Implemented a scalable microservice with CRUD operations to manage fragments of files in formats such as txt, JSON, PNG, JPEG, WebP, and GIF. Key AWS technologies including Cognito, ECR, ECS, S3, and DynamoDB were leveraged for efficient integration.
            •	Utilized Docker and Docker Compose, along with a robust CI/CD pipeline, to facilitate the project's transition through local, development, and production phases. Achieved secure deployment in a domain environment with HTTPS support.
            •	Developed unit tests, achieving an 80% coverage of the project. Tools like JEST and HURL were employed to ensure code reliability and quality across all stages of development.
						</p>
					</div>
					<div>
						<PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
							<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
								<h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Cloud-Based Microservice for Automotive Parts Company
								</h3>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
							</div>
						</PinContainer>
					</div>
				</div>
				<div className="mt-8 flex">
					<div className="mr-8"></div> {/* Espacio en blanco para alinear */}
					<div
          ref={textRef}
                      tabIndex="0"
                      className="my-5 text-xl"
                      style={{
                        transform: isTextInView ? "none" : "translateX(-200px)",
                        opacity: isTextInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}>
						<PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji"
            >
							<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
								<h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
									Chronicle App (Social App Journal)
								</h3>
								<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
							</div>
						</PinContainer>
					</div>
						<p
            					ref={textRef}
                      tabIndex="0"
                      className="my-5 text-xl"
                      style={{
                        transform: isTextInView ? "none" : "translateX(-200px)",
                        opacity: isTextInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}>
            •	Developed with MERN stack (MongoDB, Express.js, React, Node.js) along with the NEXT framework for robust development in both the backend and frontend. Additionally, I managed data within the application using Redux.
            •	Implemented a user-centered UI/UX design in Figma, incorporating features such as travel journal creation, destination ratings, forums, and meetups.
            •	Maintained a detailed project schedule with milestones and acceptance criteria, monitoring progress on GitHub.
						</p>
				</div>
			</section>
		</LazyMotion>
	);
}
