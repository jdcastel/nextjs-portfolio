"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
						Highly motivated software developer, graduated from an advanced diploma in Computer Analysis and Programming at Seneca Polytechnic. Equipped with comprehensive web programming skills gained through rigorous IT training, he also developed a solid foundation in databases and cloud computing, positioning me for success in the dynamic and rapidly evolving field of software development.
						</p>
						<br />
						<p>
						I am constantly looking for ways to work efficiently and accurately. By managing many stressful situations and resolving them under time pressure, I have honed my problem-solving skills and learned to prioritize tasks effectively. With a passion to learn and a drive to succeed, I am eager to take on new challenges and contribute to the success of any team.
						</p>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}