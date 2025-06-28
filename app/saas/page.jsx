import AnimationWrapper from "./animation-wrapper";
import Navbar from "./navbar";
import Hero from "./hero";
import Features from "./features";
import Testimonials from "./testimonials";
import "./page.css";

export default function Saas() {
  return (
    <>
      <Navbar />
      <AnimationWrapper>
        <Hero />
        <Features />
        <Testimonials />
      </AnimationWrapper>
    </>
  )
}