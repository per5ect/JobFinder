import { useState } from "react";
import { Layout } from "../Layout.jsx";

export function GuestCompanyHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="w-full bg-black">
            <Layout>
                <div>
                    <div className="flex justify-between items-center h-16 sm:h-20 lg:h-25">
                        <div className="flex items-center gap-4 lg:gap-[68px]">
                            <a href="/" className="bg-white flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 flex-shrink-0">
                                <img src="/Logo.svg" alt=""/>
                            </a>
                            <a href="/" className="hidden lg:block px-4 xl:px-6 py-2 text-black bg-white underline underline-offset-3 font-kosugi rounded-xl
                                transition-colors ease-in-out hover:bg-white/90">
                                For the employees
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center gap-3 xl:gap-5">
                            <a href="/company-login" className="px-4 xl:px-6 py-2 text-white bg-blue font-kosugi rounded-xl transition-colors ease-in-out hover:bg-blue/90 whitespace-nowrap">
                                Sign in / Sign up
                            </a>
                            <img src="/icons/Arrow.svg" alt=""/>
                            <a href="/my-account" className="bg-blue flex justify-center items-center lg:w-25 lg:h-25 transition-colors ease-in-out hover:bg-blue/90">
                                <img src="/icons/Me.svg" alt=""/>
                            </a>
                        </div>

                        <div className="flex lg:hidden items-center gap-2">
                            <a href="/company-login" className="px-3 sm:px-4 py-1.5 text-white bg-blue rounded-xl font-kosugi text-sm sm:text-base transition-colors ease-in-out hover:bg-blue/90 whitespace-nowrap">
                                Sign in
                            </a>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="bg-green flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 transition-colors ease-in-out hover:bg-green/90"
                            >
                                <img src="/icons/Menu.svg" alt="Menu"/>
                            </button>
                        </div>
                    </div>

                    {mobileOpen && (
                        <div className="lg:hidden flex flex-col border-t border-white/10">
                            <a href="/" className="px-4 py-3 sm:py-4 text-black bg-white font-kosugi sm:text-lg transition-colors hover:bg-white/90">
                                For the employees
                            </a>
                            <a href="/my-account" className="px-4 py-3 sm:py-4 text-white bg-blue font-kosugi sm:text-lg transition-colors hover:bg-blue/90">
                                My account
                            </a>
                        </div>
                    )}
                </div>
            </Layout>
        </header>
    );
}
