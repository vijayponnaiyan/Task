import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
    <>
      <div>
        <div className="p-5 pt-20">
          <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
            Sign up and try Hexnode free for 14 days!
          </h1>
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-2 text-center">
            {errors.email.message}
          </p>
        )}
        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-2 pt-6">
              {/* Input field */}
              {/* Show validation error message */}

              <input
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
                className="w-full sm:w-96 md:w-80 p-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Submit button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-rose-600 text-white font-medium rounded-sm hover:bg-rose-800 focus:ring-4 focus:ring-red-300 transition-transform duration-200 transform hover:scale-105 shadow-lg"
              >
                GET STARTED NOW!
              </button>
            </div>
          </div>
        </form>

        {/* Additional Info Section */}
        <div>
          <div className="flex flex-wrap justify-center items-center space-x-2 p-2">
            <p className="text-gray-500 text-lg w-auto">
              No credit cards required.
            </p>
            <p
              className="flex items-center text-rose-600 rounded-lg text-lg font-light transition duration-300 lg:text-xl group"
              onClick={() => toggleAccordion(index)}
            >
              Request a demo
              <FaChevronRight className="pt-1 transform transition-transform duration-300 group-hover:translate-x-2" />
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notifications Container */}
      <ToastContainer />
    </>
  );
}
