import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "../../images/desktop.webp";

export default function Banner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    const emailRegex =
      /^(?![_.])([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (emailRegex.test(data.email)) {
      toast.success(`Thank you! Email submitted: ${data.email}`, {
        position: "top-center",
        autoClose: 3000,
      });
      reset(); // Clear the form inputs
      setTimeout(() => {
        window.location.reload(); // Reload the page after 3 seconds
      }, 3000);
    } else {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="px-6 md:px-14 py-6 flex flex-col-reverse md:flex-row items-center justify-between md:space-x-8">
      {/* Text Section */}
      <div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-medium text-white"
          style={{ lineHeight: "1.3" }}
        >
          Turn your devices into kiosks in a few minutes with Hexnode UEM
        </h1>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 pt-6">
            {/* Input Field */}

            <input
              type="text"
              placeholder="Enter your email"
              aria-label="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(?![_.])([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full md:w-3/4 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Error Message */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-1/2 px-4 py-3 bg-rose-600 text-white font-medium rounded hover:bg-rose-800 focus:ring-4 focus:ring-red-300 transition-transform duration-200 transform hover:scale-105 shadow-lg mt-4"
              aria-label="Get Started Now"
            >
              GET STARTED NOW!
            </button>
          </div>
        </form>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src={banner}
          alt="Hexnode UEM banner showcasing device kiosks"
          className="w-full md:max-w-md h-auto rounded-lg shadow-lg delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
          data-taos-offset="300"
        />
      </div>

      {/* Toast Container for Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
