import { useState } from "react";
import { DropdownElement } from "./DropdownElement.jsx";

export function HeaderCompanyElement() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center h-16 sm:h-20 lg:h-25">
        <a
          href="/for-companies"
          className="bg-white flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 flex-shrink-0"
        >
          <img src="/Logo.svg" alt="" />
        </a>

        <div className="hidden lg:flex items-center gap-3 xl:gap-14">
          <a
            href="/create-work"
            className="px-4 xl:px-6 py-1.5 text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                        transition-colors ease-in-out hover:bg-green/90"
          >
            Create a vacancy
          </a>
          <a
            href="/my-vacancies"
            className="px-4 xl:px-6 py-1.5 text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                        transition-colors ease-in-out hover:bg-green/90"
          >
            Find employees
          </a>
          <a
            href="/my-vacancies"
            className="px-4 xl:px-6 py-1.5 text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                        transition-colors ease-in-out hover:bg-green/90"
          >
            My vacancies
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
        <div className="lg:hidden flex flex-col border-t border-white/10">
          <a
            href="/create-work"
            className="px-4 py-3 sm:py-4 text-black bg-green font-kosugi sm:text-lg transition-colors hover:bg-green/90"
          >
            Create a vacancy
          </a>
          <a
            href="/my-vacancies"
            className="px-4 py-3 sm:py-4 text-black bg-green font-kosugi sm:text-lg transition-colors hover:bg-green/90"
          >
            Find employees
          </a>
          <a
            href="/my-vacancies"
            className="px-4 py-3 sm:py-4 text-black bg-green font-kosugi sm:text-lg transition-colors hover:bg-green/90"
          >
            My vacancies
          </a>
        </div>
      )}
    </div>
  );
}
