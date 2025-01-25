import React from "react";
import Slider from "../../pages/Home/Slider";
import one from "../../images/logo/one-logo.svg";
import two from "../../images/logo/logo-two.svg";
import three from "../../images/logo/logo-three.svg";

export default function CustomerLogos() {
  return (
    <section className="dark:bg-gray-900 py-14 px-4 sm:px-8 md:px-16 lg:px-28">
      <Slider width="100%" duration={30} pauseOnHover={true}>
        <Slider.Slide>
          <img src={one} alt="Logo One" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={two} alt="Logo Two" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={three} alt="Logo Three" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        {/* Duplicate for seamless scrolling */}
        <Slider.Slide>
          <img src={one} alt="Logo One" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={two} alt="Logo Two" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={three} alt="Logo Three" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={one} alt="Logo One" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={two} alt="Logo Two" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={three} alt="Logo Three" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={one} alt="Logo One" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={two} alt="Logo Two" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={three} alt="Logo Three" className="h-16 sm:h-20 md:h-24" />
        </Slider.Slide>
      </Slider>
    </section>
  );
}
