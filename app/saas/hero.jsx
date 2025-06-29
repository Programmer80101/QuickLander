import { Bricolage_Grotesque } from "next/font/google";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Spotlight } from "@/components/aceternity/spotlight";
import { HoverBorderGradient } from "./border-gradient";
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
      <Spotlight fill="#ffffffaa" flip={true} />
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
        <HoverBorderGradient
          containerClassName="rounded-full"
        >
          <Button className="rounded-full">
            Start Free Trial Now!
          </Button>
        </HoverBorderGradient>
        <p className="text-sm text-muted-foreground mt-1">
          No credit card required!
        </p>
      </div>
      <div className="grid place-items-center-safe mt-6">
        <span className="text-sm">Trusted by 1000+ individuals</span>
        <div className="*:data-[slot=avatar]:ring-background w-fit mt-2 -translate-x-3 flex flex-row-reverse -space-x-3.5 *:data-[slot=avatar]:ring-2">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/64?u=user3" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/64?u=user2" alt="USer 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/64?u=user19" alt="User 3" />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/64?u=user9" alt="USer 4" />
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
          <Avatar className="translate-x-3.5">
            <AvatarImage src="https://i.pravatar.cc/64?u=user11" alt="User 5" />
            <AvatarFallback>U5</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </main>
  );
}