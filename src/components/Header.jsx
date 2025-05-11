import { useRef } from "react";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Your Hotel Manager is here
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Simplify and enhance your hotel operations with our comprehensive
          all-in-one platform
        </p>
      </div>

      <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center lg:mb-2">
        Effortlessly manage room bookings, guest check-ins and check-outs,
        customer profiles, billing and payments and additional services
        <br />
        all from a single, intuitive dashboard designed to save time, reduce
        manual work, and improve guest satisfaction.
      </p>
      <div className="flex flex-col items-center justify-center h-full space-y-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </a>
        <div className="flex flex-col justify-center max-w-full space-x-10 md:flex-row">
          <img
            src="header3.jpg"
            className="w-full mx-auto md:w-auto md:max-w-xs p-6"
            alt=""
          />
          <img
            src="header1.jpg"
            className="w-full mx-auto md:w-auto md:max-w-xs p-6"
            alt=""
          />
          <img
            src="header2.jpg"
            className="w-full mx-auto md:w-auto md:max-w-xs p-6"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
