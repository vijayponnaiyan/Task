import React, { useRef, useEffect, useState } from "react";

function Slider({ children, width = "800px", duration = 40, pauseOnHover = false }) {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      let animation;

      const startAnimation = () => {
        track.style.animation = `scroll ${duration}s linear infinite`;
      };

      const stopAnimation = () => {
        track.style.animation = "none";
      };

      if (!isPaused) startAnimation();

      return () => stopAnimation();
    }
  }, [duration, isPaused]);

  return (
    <div
      className="slider overflow-hidden relative"
      style={{ height: "100px", width }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="slide-track flex"
        style={{
          animation: isPaused ? "none" : `scroll ${duration}s linear infinite`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

Slider.Slide = ({ children }) => (
  <div className="slide flex-shrink-0 flex items-center justify-center w-64">
    {children}
  </div>
);

export default Slider;
