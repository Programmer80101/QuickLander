import { Bricolage_Grotesque } from "next/font/google";
import { Spotlight } from "@/components/aceternity/spotlight";
import { Button } from "./button";

const heroHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});


export default function Hero() {
  return (
    <main className="pt-18">
      <span className="glow"></span>
      <Spotlight fill="#ffffffaa" />
      <div className={heroHeading.className}>
        <h1>
          Launch Faster
          <span />
        </h1>
        <h1>
          Sell Smarter!
          <span />
        </h1>
      </div>
      <p className="subtitle">
        Built to scale — effortlessly and efficiently.
      </p>
      <div className="w-full grid place-items-center mt-5">
        <Button
          className="border border-green-600 hover:shadow-xs hover:shadow-emerald-500/50"
        >Start Free Trial Now!</Button>
        <p className="text-sm text-muted-foreground mt-1">
          No credit card required!
        </p>
      </div>
    </main>
  );
}