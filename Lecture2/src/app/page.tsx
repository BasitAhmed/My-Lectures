import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "/public/hero.webp";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    // Parent Div
    <div>
      <Header />

      <div className="flex pt-20">
        {/* Left */}
        <div className="flex-1">
          <Button className="mb-10 bg-blue-200 text-blue-500 hover:bg-blue-200">
            Sale 70%
          </Button>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-10">
            An Industrial Take on Streetwear
          </h1>
          <p className="pb-10">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button>
            <ShoppingCart className="mr-5" />
            Start Shopping
          </Button>
        </div>
        {/* Right */}
        <div className="flex-1">
          <div className="bg-orange-100 rounded-full">
            <Image src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
