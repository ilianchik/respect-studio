import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { SplitText } from "gsap-trial/SplitText";

function FlowSection() {
  const colRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  useGSAP(() => {
    const split = new SplitText(headingRef.current, { type: "chars" });
    const chars = split.chars;
    gsap.from(chars, {
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.from(textRef.current, {
      opacity: 0,
      duration: 1,
      y: 50,

      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        toggleActions: "restart reverse restart reverse",
      },
    });

    gsap.fromTo(
      colRef.current.children,
      { y: "100%" },
      {
        opacity: 1,
        duration: 0.8,
        y: "0",
        stagger: 0.1,
        scrollTrigger: {
          trigger: colRef.current,
          start: "top 100%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }, []);
  return (
    <section className="h-screen w-full bg-white px-[20px] relative">
      <div className="pt-[70px]">
        <h2 ref={headingRef} className="text-7xl mb-[30px]">
          Consitent leads flow to streamline <br />
          Your business growth.{" "}
        </h2>
        <p ref={textRef}>
          We combine disruptive marketing techniques with proven <br />
          tech solutions to provide maximum business value.{" "}
        </p>
      </div>
      <div
        ref={colRef}
        className=" grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[1px] align-bottom absolute bottom-1 left-[20px] right-[20px] overflow-hidden h-[550px] "
      >
        {[
          { h: "71", n: "27" },
          { h: "166", n: "53" },
          { h: "241", n: "61" },
          { h: "205", n: "58" },
          { h: "94", n: "30" },
          { h: "166", n: "63" },
          { h: "241", n: "55" },
          { h: "323", n: "63" },
          { h: "205", n: "71" },
          { h: "307", n: "76" },
          { h: "409", n: "67" },
          { h: "497", n: "88" },
          { h: "345", n: "78" },
          { h: "500", n: "90" },
        ].map((e, i) => (
          <div
            key={i}
            className={` bg-primary self-end relative`}
            style={{ height: e.h + "px" }}
          >
            <span className="absolute -top-8 left-[50%] translate-x-[-50%] text-xl text-primary">
              {e.n}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlowSection;
