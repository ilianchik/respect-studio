import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Preloader({ setIsLoading }) {
  const numbers = [
    "02",
    "06",
    "12",
    "24",
    "48",
    "56",
    "64",
    "76",
    "82",
    "98",
    "100",
  ];
  const [currentNumber, setCurrentNumber] = useState(null);
  const loaderRef = useRef(null);
  const progressNumberRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: 0 });
    document.body.style.overflow = "hidden";
    numbers.forEach((number) => {
      tl.to(progressNumberRef.current, {
        duration: 0.3,
        onComplete: () => {
          setCurrentNumber(number);
        },
      });
    });
    tl.to(loaderRef.current, {
      duration: 1,
      y: "-100%",
      delay: 1,

      onComplete: () => {
        setIsLoading(false);
        document.body.style.overflowY = "scroll";
      },
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="bg-[#1E1E1E] text-primary w-screen h-screen fixed top-0 left-0 z-50 overflow-x-hidden"
    >
      <div className="relative w-full h-full">
        <span
          className="text-[170px] absolute bottom-0 right-[20px]"
          ref={progressNumberRef}
        >
          {currentNumber}
        </span>
      </div>
    </div>
  );
}

export default Preloader;
