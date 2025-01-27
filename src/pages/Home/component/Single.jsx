import React from "react";
import single from "../../../images/product/single.webp";
import icon from "../../../images/icon/check.png"; // Assuming the path to the icon image

export default function Single() {
  return (
    <>
      <div className="pl-5 pr-5 z-10">
        <div className="flex flex-col-reverse md:flex-row bg-gray-100 p-10 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="flex-1 sm:pr-6 mb-6 sm:mb-0  p-1 ">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Powerful Single-App Kiosk solutions for enhanced control
            </h1>
            <div className="">
              <div className="space-y-4 text-gray-700   ">
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Customize the device settings to cater to a specific use-case
                  each time.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Use Hexnode’s Advanced Kiosk settings for additional
                  restrictions or expanded device functionalities while in kiosk
                  mode.
                </p>
                <p className="flex items-center text-lg">
                  <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                  Empower your administrators with full control over the kiosk
                  devices.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center sm:justify-start  p-1">
            <img src={single} alt="Single App Kiosk" className=" rounded-lg " />
          </div>
        </div>
      </div>
    </>
  );
}
