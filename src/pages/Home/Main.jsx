import React, { useState } from "react";
import effortless from "../../images/product/effortless.jpeg";
import customized from "../../images/product/customized.webp";
import power from "../../images/product/power.webp";
import secure from "../../images/product/secure.webp";
import easy from "../../images/product/easy.webp";
import { FaChevronRight } from "react-icons/fa6";
import tick from '../../images/icon/ads.svg';


export default function Main() {
  const images = [effortless, customized, power, secure, easy]; // Images for accordion items
  const buttons = [
    "Hello",
    "Brand Visibility",
    "Data Security",
    "App Management",
    "Easy-to-Use Interface",
  ]; // Buttons for accordion items

  const [openIndex, setOpenIndex] = useState(0); // Default open accordion index
  const [currentImage, setCurrentImage] = useState(images[0]); // Default image
  const [currentButton, setCurrentButton] = useState(buttons[0]); // Default button text

  const toggleAccordion = (index) => {
    setOpenIndex(index);
    setCurrentImage(images[index]); // Update image on selection
    setCurrentButton(buttons[index]); // Update button text on selection
  };

  return (
    <div>
      <div className="pt-20 md:pt-30 lg:pt-40">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
          What additional possibilities does the <br className="hidden sm:block" /> Kiosk mode offer?
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row p-6 lg:p-24">
        {/* Left Section: Image and Button */}
        <div className="p-5 lg:w-1/2 relative ">
          <img src={currentImage} alt="Current product " className="w-full -z-10 rounded-xl" />
          <div className="absolute top-72 right-0 transform -translate-y-1/2">
            <button
              type="button"
              className="bg-gray-200 text-slate-900 py-2 px-4 rounded-lg w-auto text-xl font-normal flex items-center space-x-2 transition transform duration-300 hover:-translate-y-2"
            >
              <img src={tick} alt="tick icon" className="w-6 h-6" />
              <span>{currentButton}</span>
            </button>
          </div>


        </div>

        {/* Right Section: Accordion Items */}
        <div className="lg:w-1/2">
          {[
            {
              title: "Effortless kiosk deployment & management",
              content:
                "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox, or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
            },
            {
              title: "Customized interface for brand visibility",
              content:
                "Create a locked-down environment with a customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services, and key messages directly to users through the customized interface.",
            },
            {
              title: "What more can you do with Hexnode kiosk?",
              content:
                "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
            },
            {
              title: "Secure and update your app ecosystem",
              content:
                "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security, and improve your efficiency using Hexnode’s silent app installation and update features.",
            },
            {
              title: "Provide an easy-to-use interface for end-users",
              content:
                "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`border-gray-300 rounded-xl mb-2 ${openIndex === index ? "bg-slate-50" : ""
                }`}
            >
              <div
                className="flex items-center justify-between p-5 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-2xl font-semibold">{item.title}</span>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out text-lg text-gray-600 overflow-hidden ${openIndex === index ? "max-h-screen p-5" : "max-h-0 p-0"
                  }`}
              >
                <p onClick={() => toggleAccordion(index)}>{item.content}</p>
                <p
                  className="mt-4 flex items-center  text-rose-600 py-2 px-4 rounded-lg text-lg font-medium  transition duration-300 lg:text-xl group"
                  onClick={() => toggleAccordion(index)}
                >
                  TRY FOR FREE
                  <FaChevronRight
                    className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                  />
                </p>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
