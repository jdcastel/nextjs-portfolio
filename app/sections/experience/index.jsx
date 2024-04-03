import { useRef, React } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import timelineElements from "./timelineElements";

export function ExperienceSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });
	console.log(timelineElements);

	return (
		<LazyMotion features={domAnimation}>
			<section id="experience" className="section">
				<HeadingDivider title="My Experience" />
				<div
				ref={textRef}
				tabIndex="0"
				className="my-5 text-xl flex"
				style={{
					transform: isTextInView ? "none" : "translateX(-200px)",
					opacity: isTextInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
					{timelineElements.map((item, index) => (
						<div key={index} className="timeline-item">
							<div className="timeline-item-content">
								<span className="timeline-item-date ">{item.date}</span>
								<p className="timeline-item-title">{item.title}</p>
								<p className="timeline-item-location">{item.location}</p>
								<p className="timeline-item-description">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</LazyMotion>
	);
}
