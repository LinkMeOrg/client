import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";

const ScrollToTopButton = () => {
  const { shown, scrollToTop } = useScrollToTop(300);

  return (
    <button
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={`${
        shown ? "scale-100" : "scale-0"
      } w-12 h-12 transition-transform duration-800 flex fixed right-5 sm:right-10 z-[1000] bottom-10 bg-primary rounded-full shadow-lg  justify-center items-center`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
