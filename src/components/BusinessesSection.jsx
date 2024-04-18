import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

function BusinessesSection() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  const split = new SplitText(".hero-title", { type: "chars" });
  const chars = split.chars;

  gsap.from(chars, {
    opacity: 0,
    duration: 0.3,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".hero-title",
      start: "top 85%",
      toggleActions: "restart reverse restart reverse",
    },
  });

  return (
    <section className="h-[100vh] bg-primary px-[20px]  sticky">
      <div className="w-full h-[8vh] flex items-center">
        <img className="h-[80%] mr-[200px]" src="./small-logo.svg" alt="logo" />
        <nav className="flex justify-between w-full items-center">
          <div>
            <ul className="flex gap-[50px]">
              {["Services", "Case Studies", "Blog"].map((e, i) => (
                <li key={i}>
                  <a href="#">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex gap-[50px]">
              {["We're hiring", "Contacts"].map((e, i) => (
                <li key={i}>
                  <a href="#">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="bg-black text-primary px-4 py-2" href="">
            <span className="mx-5"> &#8594;</span> Book a call
          </a>
        </nav>
      </div>
      <h1 className="text-8xl mt-[100px] text-end hero-title  ">
        Growing <br />
        businesses by <br />
        building <br />
        relationships
      </h1>
      <p className="absolute bottom-0 left-0 ml-[20px] mb-[30px]">
        B2B Marketing & LinkedIn Lead <br /> Generation agency{" "}
      </p>
    </section>
  );
}

export default BusinessesSection;
