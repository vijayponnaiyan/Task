import React from "react";
import digital from "../../../images/product/digital.webp";
import icon from "../../../images/icon/check.png";

export default function Digital() {
  return (
    <>
      <div className="pl-5 pr-5 z-10">
        <div className="flex flex-col-reverse md:flex-row bg-gray-100 p-10 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="flex-1 sm:pr-6 mb-6 sm:mb-0  p-1 ">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Capture attention with Digital Signage Kiosks
            </h1>
            <div className="">
              <div className="space-y-4 text-gray-700   ">
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Transform your devices into captivating digital signage kiosks
                  that grab attention.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Engage your audience with vibrant images and seamless video
                  streaming.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Customize media files with trimming, muting, and background
                  music.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Advertise and show off your brand aesthetics to attract
                  customers in different ways.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Take control with Hexnode to reestablish your brand's
                  presence.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center sm:justify-start  p-1">
            <img
              src={digital}
              alt="Single App Kiosk"
              className=" rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
}
