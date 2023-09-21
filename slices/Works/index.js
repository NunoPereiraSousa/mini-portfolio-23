import { PrismicRichText } from "@prismicio/react";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Bars from "@/components/Elements/Bars/Bars";
import Project from "@/components/Elements/Projects/Project";
import useIsomorphicLayoutEffect from "@/components/Animations/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

/**
 * @typedef {import("@prismicio/client").Content.WorksSlice} WorksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksSlice>} WorksProps
 * @param {WorksProps}
 */
const Works = ({ slice }) => {
  const element = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      return () => {};
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section className="works" data-scroll-section ref={element}>
      <div className="works_wrapper">
        <div className="works_content">
          <div className="works_left">
            <div className="works_headline">
              <PrismicRichText field={slice?.primary.headline} />
            </div>
            <div className="works_description">
              <PrismicRichText field={slice?.primary.description} />
            </div>
          </div>

          <div className="works_grid">
            {slice?.items.map((project, index) => (
              <Project
                key={index}
                url={project.projects.data.link.url}
                name={project.projects.data.name}
                image={project.projects.data.image}
                mystery={project.projects.data.mystery}
              />
            ))}
          </div>
        </div>

        <Bars color={"white"} />
      </div>
    </section>
  );
};

export default Works;
