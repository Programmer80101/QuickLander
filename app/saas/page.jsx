import AnimationWrapper from "./animation-wrapper";
import Navbar from "./navbar";
import Hero from "./hero";
import Features from "./features";
import Testimonials from "./testimonials";
import FAQ from "./faq";
import Footer from "./footer";
import "./page.css";

export default function Saas() {
  return (
    <>
      <Navbar />
      <AnimationWrapper>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Footer />
      </AnimationWrapper>
    </>
  )
}