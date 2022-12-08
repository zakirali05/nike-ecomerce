import React from "react";
import heroimg from "../assets/hero.png";
import Social from "./Social";
// import clip from "../assets/video/clip.mp4";
// import vcover1 from "../assets/video/vcover1.png";
// import vcover2 from "../assets/video/vcover2.png";
// import vcover3 from "../assets/video/vcover3.png";
import { heroapi } from "../data/data";
const Hero = () => {
  return (
    <main className="bg-theme w-[100vw]  h-[auto] flex-col items-center content-center pt-8">
      <div className="hero-details flex flex-col item-center justify-center text-center p-8">
        <h1 className="text-white/90 py-1  font-bold text-4xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
          {heroapi.title}
        </h1>
        <h1 className="text-white/80 pb-8  font-semibold text-2xl sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl">
          {heroapi.subtitle}
        </h1>
        <button className="button-theme w-[13rem] mx-auto py-2 bg-white rounded-2xl shadow-white/80">
          {heroapi.btntext}
        </button>
      </div>

      <div align="center" className="hero-img ">
        <img
          className="w-[auto]  cursor-pointer -rotate-[20deg] duration-[700ms] hover:rotate-0 transition  hover:scale-110 ease-in-out  h-[150px] sm:h[190px] md:h-[230px] lg:h-[260px] "
          src={heroimg}
          alt="hero/img"
        />
      </div>
      <div className="grid items-center absolute top-[33vh] lg:top-[27vh] left-4 gap-3">
        {heroapi.sociallinks?.map((val, i) => (
          <Social key={i} icon={val.icon} />
        ))}
      </div>
    </main>
  );
};

export default Hero;
