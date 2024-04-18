import { SplitText } from "gsap-trial/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function PartnerSection() {
  const headingRef = useRef(null);
  const borderTopRef = useRef(null);
  const borderBottomRef = useRef(null);
  const subHeadingtextRef = useRef(null);
  const textRef = useRef(null);
  const blackBoxRef = useRef(null);
  const blackBoxTextRef = useRef(null);
  const redBoxRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  const blackBoxAnimation = gsap.to(blackBoxRef.current, {
    paused: true,
    x: "-61%",
  });
  const redBoxAnimation = gsap.to(redBoxRef.current, {
    paused: true,
    opacity: 0.5,
  });
  const blackBoxTextAnimation = gsap.to(blackBoxTextRef.current, {
    paused: true,
    opacity: 1,
  });
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
    gsap.fromTo(
      borderTopRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },

      {
        opacity: 1,
        duration: 3,
        ease: "power4.out",
        clipPath: "inset(0% 0% 0% 0%)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
    gsap.fromTo(
      borderBottomRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },

      {
        opacity: 1,
        duration: 3,
        ease: "power4.out",
        clipPath: "inset(0% 0% 0% 0%)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
    gsap.from(subHeadingtextRef.current, {
      opacity: 0,
      duration: 1,
      y: 50,

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
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "restart reverse restart reverse",
      },
    });
  }, []);
  return (
    <section className="h-auto px-[20px] pb-[70px] bg-white ">
      <div className=" pt-[10px] pb-[30px] mb-2">
        <div
          ref={borderTopRef}
          className="w-full h-[1px] bg-primary mb-[10px]"
        ></div>
        <h2
          ref={headingRef}
          className="text-7xl text-right mb-[32px] text-primary"
        >
          Trusted long-term partner
        </h2>
        <p ref={subHeadingtextRef} className="text-right text-lg text-primary">
          For leading B2B tech and <br />
          service companies{" "}
        </p>
        <div
          ref={borderBottomRef}
          className="w-full h-[1px] bg-primary mt-[25px]"
        ></div>
      </div>
      <p ref={textRef} className="text-primary mb-[20px]">
        We combine disruptive marketing techniques with proven tech solutions to
        provide maximum business value.
      </p>
      <div className="flex whitespace-nowrap overflow-x-hidden">
        <div className="min-w-[70vw] bg-primary pt-[40px] pl-[40px] text-white relative whitespace-normal ">
          <div ref={redBoxRef}>
            <p className="mb-3">1</p>
            <h2 className="text-5xl mb-10">B2B Marketing</h2>
            <p className="w-[75%] mb-8">
              Your solution is of high value and great quality, but you have a
              hard time attracting the right audience? Wish to work with
              specific clients but can&#39;t cut through the noise of a
              saturated market? Or simply looking to advance your growth
              efforts?
            </p>
            <p className="w-[75%] pb-[200px]">
              That&#39;s the challenge for real B2B marketing pros. Having a
              perfect knowledge of the digital landscape, we will help you
              identify the lowest hanging fruits before you spend a fortune on
              marketing campaigns. While you make good use of the results, we
              work on a sustainable strategy to scale your business in the long
              run.{" "}
            </p>
            <img
              className="absolute bottom-[20px] left-[20px]"
              src="./white-circle.svg"
              alt=""
            />
            <a
              className="absolute bottom-[20px] right-[40px] text-white bg-[#101820] py-[10px] px-[20px] "
              href="#"
            >
              <span className="mr-5">&#8594;</span> Learn more
            </a>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            blackBoxAnimation.play();
            redBoxAnimation.play();
            blackBoxTextAnimation.play();
          }}
          onMouseLeave={() => {
            blackBoxAnimation.reverse();
            redBoxAnimation.reverse();
            blackBoxTextAnimation.reverse();
          }}
          ref={blackBoxRef}
          className="min-w-[70vw] bg-black pt-[40px] pl-[40px] text-white whitespace-normal relative "
        >
          <div ref={blackBoxTextRef} className="opacity-[0.5]">
            <p className="mb-3">2</p>
            <h2 className="text-5xl mb-10">LinkedIn Lead Generation</h2>
            <p className="w-[75%] mb-8">
              Your business is all set up and now feel ready to expand your
              client list? You understand your ideal client and how your product
              can solve their problems?
            </p>
            <p className="w-[75%] pb-[200px]">
              That&#39;s when we come in with the comprehensive lead generation
              campaign to employ your sales team with more deals? Like
              experienced detectives, we will search for the prospects who drive
              the most value for your business. ext step? We make them talk to
              you. Unlike most salesy outreaches, our customized campaign is
              focused on building long-term relationships. Your sales team will
              love it.hv
            </p>
            <img
              className="absolute bottom-[20px] left-[20px]"
              src="./grey-circle.svg"
              alt=""
            />
            <a
              className="absolute bottom-[20px] right-[40px] !text-[#101820] bg-primary py-[10px] px-[20px] "
              href="#"
            >
              <span className="mr-5">&#8594;</span> Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
