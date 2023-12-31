import { PrismicRichText, PrismicText } from "@prismicio/react";
import Paragraph from "./Paragraph";
import { useEffect, useRef, useState, useContext } from "react";
import { gsap } from "gsap";
import FontFaceObserver from "fontfaceobserver";
import AnimationsContext from "@/context/AnimationsContext";
import useIsomorphicLayoutEffect from "../Animations/UseIsomorphicLayoutEffect";
import { useLocomotiveScroll } from "react-locomotive-scroll";

let loadingImages = require("imagesloaded");

export default function Preloader({ preloader }) {
  const { toggleCompleted } = useContext(AnimationsContext);
  const { scroll } = useLocomotiveScroll();

  const [fontLoaded, setFontLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [number, setNumber] = useState(0);
  const element = useRef(null);
  const counter = useRef(null);

  const Count = {
    val: 0,
  };
  const final = 1;

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      scroll?.stop();

      gsap.set(element.current, {
        width: window.innerWidth,
      });

      // gsap.set(".preloader_wrapper", {
      //   filter: "blur(4rem)",
      // });
      // gsap.set(".preloader_counter_container", {
      //   autoAlpha: 0,
      // });

      let font1 = new FontFaceObserver("Mango Grotesque", {
        weight: 500,
      });
      let font2 = new FontFaceObserver("Neue Haas Grotesk Text Pro", {
        weight: 400,
      });

      Promise.all([font1.load(), font2.load()]).then(function (e) {
        setFontLoaded(true);
      });

      let imgLoad = loadingImages(document.querySelectorAll("img"));

      imgLoad.on("done", function (instance) {
        setImagesLoaded(true);
      });

      let tl = gsap.timeline();

      if (fontLoaded === true && imagesLoaded === true) {
        tl.to(".preloader_wrapper", {
          delay: 0.75,
          filter: "blur(0rem)",
          duration: 0.5,
        })
          .to(
            ".preloader_counter_container",
            {
              delay: 0.75,
              autoAlpha: 1,
              duration: 0.5,
            },
            0
          )
          .to(Count, {
            delay: 1,
            val: Math.floor(Math.random() * 10000),
            roundProps: "val",
            duration: 2,
            ease: "expo.out",
            snap: 0.01,
            onUpdate: () => {
              counter.current.innerHTML = Count.val.toFixed(2);
            },
          })
          .to(".preloader_wrapper", {
            filter: "blur(4rem)",
            autoAlpha: 0,
            duration: 0.5,
            delay: 0.5,
            onComplete: () =>
              setTimeout(() => {
                toggleCompleted(true);
              }, 500),
          });
        tl.to(element.current, {
          scaleY: 0,
          transformOrigin: "0 0",
          ease: "expo.inOut",
          duration: 2,
          onComplete: () => {
            scroll?.start();
            scroll?.update();
          },
        });
      }

      return () => {};
    }, element);

    return () => ctx.revert();
  }, [fontLoaded, imagesLoaded]);

  return (
    <section className="preloader" ref={element}>
      <div className="preloader_wrapper">
        <div className="preloader_top">
          <div className="preloader_label">
            <Paragraph>09</Paragraph>
          </div>
          <div className="preloader_label">
            <Paragraph>10</Paragraph>
          </div>
          <div className="preloader_label">
            <Paragraph>2000</Paragraph>
          </div>
        </div>
        <div className="preloader_counter_container">
          <div className="preloader_counter_text">% -&nbsp;</div>
          <div className="preloader_counter_text" ref={counter}>
            {number}
          </div>
        </div>
        <div className="preloader_bottom">
          <div className="preloader_label">
            <Paragraph>oPorto</Paragraph>
          </div>
          <div className="preloader_label">
            <Paragraph>Portugal</Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
