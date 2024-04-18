import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

function Flow2Section() {
  const colRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      colRef.current.children,
      { x: "-100%" },
      {
        duration: 0.8,
        x: "0",
        stagger: 0.1,
        scrollTrigger: {
          trigger: colRef.current,
          start: "top 90%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }, []);
  return (
    <section className="h-auto px-[20px] pb-[70px] bg-white ">
      <div ref={colRef} className="grid grid-rows-4 h-full gap-[1px]">
        {[
          {
            width: "100%",
            text1: "Revenue generated",
            text2: "for clients",
            text3: "1570",
            justify: "end",
          },
          {
            width: "60%",
            text1: "Conversations",
            text2: "opened",
            text3: "1200",
            justify: "start",
          },
          {
            width: "100%",
            text1: "Leads generated",
            text2: "via targeted",
            text3: "378",
            justify: "start",
          },
          {
            width: "50%",
            text1: "Calls scheduled",
            text2: "for clients",
            text3: "197",
            justify: "start",
          },
        ].map((e, i) => (
          <div
            key={i}
            className={`bg-black  h-[93px] flex items-center  justify-self-end`}
            style={{ width: e.width, justifyContent: e.justify }}
          >
            <div className="text-primary  mr-[40px] flex  items-center gap-2 my-auto text-right pl-[100px]">
              <p>
                {e.text1} <br /> {e.text2}
              </p>
              <p className="text-7xl">{e.text3}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flow2Section;
