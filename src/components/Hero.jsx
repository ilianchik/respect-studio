import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

function Hero() {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const images = [
    "./01header.jpg",
    "./02header.jpg",
    "./03header.jpg",
    "./04header.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  let isAnimationBgPaused = false;

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 2.3 });
    const tl2 = gsap.timeline({ repeat: -1 });

    images.forEach((_, index) => {
      if (index >= 0) {
        tl2.to(bgRef.current, {
          duration: 0.6,
          onStart: () => {
            isAnimationBgPaused = false;
          },
          onComplete: () => {
            setCurrentIndex(index);
          },
        });
      }
    });
    gsap.fromTo(
      overlayRef.current,
      { backgroundColor: "rgba(0, 0, 0, 0.0)" },
      {
        backgroundColor: "rgba(0, 0, 0, 0.5)",

        scrollTrigger: {
          trigger: overlayRef.current,
          start: "bottom 70%",
          toggleActions: "restart reverse restart reverse",
        },
        onComplete: () => {
          if (!isAnimationBgPaused) {
            tl2.pause();
            isAnimationBgPaused = true;
          } else {
            tl2.play();
            isAnimationBgPaused = false;
          }
        },
      }
    );
    tl.fromTo(
      textRef.current.children,
      { opacity: 0, zIndex: 60 },
      {
        opacity: 1,

        x: 0,
        stagger: 0.2,
        duration: 2,
        ease: "power4.out",
        clipPath: "inset(0% 0% 0% 0%)",
        onComplete: () => {
          gsap.set(textRef.current, { zIndex: 10 });
        },
      }
    );
    tl.fromTo(
      bgRef.current,
      { height: "100vh" },
      {
        height: "92vh",
        duration: 0.5,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section>
      <div
        className="fixed left-[21px] top-[20px] z-[60]  flex flex-col text-6xl text-primary"
        ref={textRef}
      >
        <span style={{ clipPath: "inset(0% 100% 0% 0%)" }}>Respect</span>
        <span
          className="[writing-mode:vertical-lr] ml-1"
          style={{ clipPath: "inset(0% 0% 100% 0%)" }}
        >
          .Studio
        </span>
      </div>
      <div className="fixed right-[21px] top-[20px] z-0 flex flex-col text-6xl text-primary">
        <h2 className="text-lg custom-shadow ">
          Digital Marketing <br /> Agency
        </h2>
      </div>
      <div className="sticky top-0 -z-10">
        <div
          ref={bgRef}
          className="h-[100vh] flex bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <div ref={overlayRef} className="w-full h-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
