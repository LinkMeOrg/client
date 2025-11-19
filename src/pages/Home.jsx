import Hero from "../components/home/Hero";
import WhatIs from "../components/home/WhatIs";
import HowItWorks from "../components/home/HowItWorks";
import WhyChoose from "../components/home/WhyChoose";
import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <div className="dark:bg-brand-dark bg-white">
      <Hero />
      <WhatIs />
      <HowItWorks />
      <WhyChoose />
      <FinalCTA />
    </div>
  );
};

export default Home;
