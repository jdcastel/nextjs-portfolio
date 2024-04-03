import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import timelineElements from "./timelineElements";

export function ExperienceSection() {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="experience" className="section">
        <HeadingDivider title="My Experience" />
        <br />
        <div
          ref={textRef}
          tabIndex="0"
          className="text-lg max-w-5xl flex flex-col space-y-8"
          style={{
            transform: isTextInView ? "none" : "translateX(-200px)",
            opacity: isTextInView ? 1 : 0,
            transition:
              "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {timelineElements.map((item, index) => (
            <div
              key={index}
              className="timeline-item font-light border-l-4 border-stone-500 rounded-lg p-4"
            >
              <div className="timeline-item-content">
                <span className="timeline-item-date font-bold">
                  {item.date}
                </span>
                <p className="timeline-item-title text-lg font-semibold mt-1">
                  {item.title}
                </p>
                <p className="timeline-item-location">
                  {item.location}
                </p>
                <div className="timeline-item-description mt-2">
                  {item.description.split('.').map((point, i) => (
                    <div key={i}>{point}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
