import React, { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
           <a href="/">
           <div
              className="text-lg font-bold tracking-wide flex flex-row items-center space-x-2"
              tabIndex={0}
              aria-label="HotelManage Logo"
            >
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              >
                <circle cx="6.5" cy="7" r="4" />
                <circle cx="6.5" cy="20" r="3" />
                <circle cx="17.5" cy="4" r="3" />
                <circle cx="17.5" cy="17" r="5" />
              </svg>
              <h2>YourHotelManager</h2>
            </div>
           </a>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-6 items-center">
              <li>
                <a
                onClick={()=> alert("This feature is not available yet")}
                  href="#rooms"
                  className="hover:text-yellow-400 focus:text-yellow-400 focus:outline-none font-semibold"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                onClick={()=> alert("This feature is not available yet")}
                  href="#book"
                  className="hover:text-yellow-400 focus:text-yellow-400 focus:outline-none font-semibold"
                >
                  Book
                </a>
              </li>
              <li>
                <a
                onClick={()=> alert("This feature is not available yet")}
                  href="#checkin"
                  className="hover:text-yellow-400 focus:text-yellow-400 focus:outline-none font-semibold"
                >
                  Check-in
                </a>
              </li>
              <li>
                <a
                onClick={()=> alert("This feature is not available yet")}
                  href="#checkout"
                  className="hover:text-yellow-400 focus:text-yellow-400 focus:outline-none font-semibold"
                >
                  Check-out
                </a>
              </li>
              <li>
                <a
                onClick={()=> alert("This feature is not available yet")}
                  href="#billing"
                  className="hover:text-yellow-400 focus:text-yellow-400 focus:outline-none font-semibold"
                >
                  Billing
                </a>
              </li>
              <li>
                <a href="/sign-in">
                <button
                  type="button"
                  className="bg-yellow-400 text-blue-700 font-bold px-4 py-1 rounded hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition cursor-pointer"
                >
                  Sign In
                </button>
                </a>
              </li>
            </ul>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden flex flex-col justify-center w-7 h-6 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setMenuOpen(!menuOpen);
                }
              }}
            >
              <span
                className={`block h-0.5 bg-black rounded transform transition duration-300 ease-in-out origin-left ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-black rounded transition-opacity duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-black rounded transform transition duration-300 ease-in-out origin-left ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <ul
          className={`md:hidden fixed top-14 right-0 bg-white shadow-xl w-48 h-[calc(100vh-3.5rem)] flex flex-col pt-4 space-y-3 transition-transform duration-300 ease-in-out z-40 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
            onClick={()=> alert("This feature is not available yet")}
              href="#rooms"
              className="block px-5 py-2 font-semibold hover:text-yellow-400 focus:text-yellow-400 focus:outline-none"
            >
              Rooms
            </a>
          </li>
          <li>
            <a
            onClick={()=> alert("This feature is not available yet")}
              href="#book"
              className="block px-5 py-2 font-semibold hover:text-yellow-400 focus:text-yellow-400 focus:outline-none"
            >
              Book
            </a>
          </li>
          <li>
            <a
            onClick={()=> alert("This feature is not available yet")}
              href="#checkin"
              className="block px-5 py-2 font-semibold hover:text-yellow-400 focus:text-yellow-400 focus:outline-none"
            >
              Check-in
            </a>
          </li>
          <li>
            <a
            onClick={()=> alert("This feature is not available yet")}
              href="#checkout"
              className="block px-5 py-2 font-semibold hover:text-yellow-400 focus:text-yellow-400 focus:outline-none"
            >
              Check-out
            </a>
          </li>
          <li>
            <a
            onClick={()=> alert("This feature is not available yet")}
              href="#billing"
              className="block px-5 py-2 font-semibold hover:text-yellow-400 focus:text-yellow-400 focus:outline-none"
            >
              Billing
            </a>
          </li>
          <li>
           <a href="/sign-in">
           <button
              type="button"
              className="mx-5 mt-4 bg-yellow-400 text-blue-700 font-bold rounded py-2 w-auto text-left hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            >
              Sign In
            </button>
           </a>
          </li>
        </ul>
      </nav>
      {/* Add padding so content isn't hidden behind navbar */}
      <div className="pt-14" />
    </>
  );
};
