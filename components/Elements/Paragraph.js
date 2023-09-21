"use client";

import gsap from "gsap";
import { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { useRef, useContext } from "react";
import useIsomorphicLayoutEffect from "../Animations/UseIsomorphicLayoutEffect";
import AnimationsContext from "@/context/AnimationsContext";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Paragraph({ children }) {
  const element = useRef(null);
  const { completed } = useContext(AnimationsContext);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (completed) {
        let childSplit = new SplitText(element.current, {
          type: "lines",
          linesClass: "line-child",
        });
        let parentSplit = new SplitText(element.current, {
          type: "lines",
          linesClass: "line-parent",
        });

        gsap.set(childSplit.lines, {
          yPercent: -100,
        });

        gsap.to(childSplit.lines, {
          yPercent: 0,
          stagger: 0.04,
          scrollTrigger: {
            trigger: element.current,
            horizontal: window.innerWidth < 1024 ? false : true,
            start: "left 90%",
          },
          ease: Power2.easeOut,
          duration: 1,
          delay: 0.75,
        });

        return () => {
          childSplit.revert();
          parentSplit.revert();
        }; // context cleanup
      }
    }, element); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [completed]);

  return (
    <p ref={element} className="paragraph">
      {children}
    </p>
  );
}
