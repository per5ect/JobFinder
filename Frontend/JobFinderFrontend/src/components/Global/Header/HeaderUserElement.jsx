import { useState } from "react";
import { DropdownElement } from "./DropdownElement.jsx";

export function HeaderUserElement() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center h-16 sm:h-20 lg:h-25">
        <a
          href="/"
          className="bg-white flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 flex-shrink-0"
        >
          <img src="/Logo.svg" alt="" />
        </a>

        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          <a
            href="/all-vacancies"
            className="px-4 xl:px-6 py-1.5 text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                        transition-colors ease-in-out hover:bg-green/90"
          >
            Job Search
          </a>
          <a
            href="/analyze"
            className="px-4 xl:px-6 py-1.5 text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                        transition-colors ease-in-out hover:bg-green/90"
          >
            Analyzing resumes
          </a>
          <a
            href="/suitable-vacancies"
            className="px-4 xl:px-6 py-1.5 text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                        transition-colors ease-in-out hover:bg-green/90"
          >
            Suitable vacancies
          </a>
        </div>

        <div className="hidden lg:flex items-center">
          <a
            href="/my-account"
            className="bg-blue flex justify-center items-center lg:w-25 lg:h-25 transition-colors ease-in-out hover:bg-blue/90"
          >
            <img src="/icons/Me.svg" alt="" />
          </a>
          <DropdownElement />
        </div>

        <div className="flex lg:hidden items-center">
          <a
            href="/my-account"
            className="bg-blue flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 transition-colors ease-in-out hover:bg-blue/90"
          >
            <img src="/icons/Me.svg" alt="" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="bg-green flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 transition-colors ease-in-out hover:bg-green/90"
          >
            <img src="/icons/Menu.svg" alt="Menu" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden flex flex-col">
          <a
            href="/all-vacancies"
            className="px-4 py-3 sm:py-4 text-black bg-green font-kosugi sm:text-lg transition-colors hover:bg-green/90"
          >
            Job Search
          </a>
          <a
            href="/analyze"
            className="px-4 py-3 sm:py-4 text-black bg-green font-kosugi sm:text-lg transition-colors hover:bg-green/90"
          >
            Analyzing resumes
          </a>
          <a
            href="/suitable-vacancies"
            className="px-4 py-3 sm:py-4 text-black bg-green font-kosugi sm:text-lg transition-colors hover:bg-green/90"
          >
            Suitable vacancies
          </a>
          <a
            href="/my-applications"
            className="px-4 py-3 sm:py-4 text-black bg-green font-kosugi sm:text-lg transition-colors hover:bg-green/90"
          >
            Applications
          </a>
          <a
            href="/favorite-vacancies"
            className="px-4 py-3 sm:py-4 text-black bg-green font-kosugi sm:text-lg transition-colors hover:bg-green/90"
          >
            Favorite vacancies
          </a>
        </div>
      )}
    </div>
  );
}
