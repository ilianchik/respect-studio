import { useState } from "react";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import BusinessesSection from "./components/BusinessesSection";
import FlowSection from "./components/FlowSection";
import Flow2Section from "./components/Flow2Section";
import PartnerSection from "./components/PartnerSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <Preloader setIsLoading={setIsLoading} />}

      <Hero />

      <div className=" z-20 sticky top-0">
        <BusinessesSection />
        <FlowSection />
        <Flow2Section />
        <PartnerSection />
      </div>
    </div>
  );
}

export default App;
