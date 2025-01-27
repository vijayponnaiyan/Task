import React from "react";
import web from "../../../images/product/web.webp";
import icon from "../../../images/icon/check.png"; // Assuming the path to the icon image

export default function Web() {
  return (
    <div className="pl-5 pr-5 z-10">
      <div className="flex flex-col-reverse md:flex-row bg-gray-100 p-10 rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="flex-1 sm:pr-6 mb-6 sm:mb-0  p-1 ">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Explore the new way to manage web apps and websites
          </h1>
          <div className="">
            <div className="space-y-4 text-gray-700   ">
              <p className="flex items-center text-lg">
                <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                Let users access essential and approved web apps, website and
                files only.
              </p>
              <p className="flex items-center text-lg">
                <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                Make the best use of website kiosk with Hexnode's advanced
                settings.
              </p>
              <p className="flex items-center text-lg">
                <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                Tailor your experience to match your unique use case.
              </p>
              <p className="flex items-center text-lg">
                <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                From configuring toolbar options to scheduling page refresh,
                remote debugging, and limiting incognito tabs, take full control
                of your website kiosk experience.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center sm:justify-start  p-1">
          <img src={web} alt="Single App Kiosk" className=" rounded-lg " />
        </div>
      </div>
    </div>
  );
}
