import {Layout} from "./Layout.jsx";

export function Footer() {
    return (
        <footer className="bg-[#222A24] py-6 xl:py-0 xl:h-25">
            <Layout>
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center xl:h-25 gap-5 xl:gap-0">
                    <a href="/" className="bg-white flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 xl:w-25 xl:h-25 mx-auto xl:mx-0 flex-shrink-0">
                        <img src="/Logo.svg" alt=""/>
                    </a>

                    <a href="mailto:findjob@gmail.com" className="text-white font-kosugi text-base sm:text-lg md:text-xl xl:text-[20px] text-center xl:text-left">
                        findjob@gmail.com
                    </a>

                    <div className="flex flex-row items-center justify-center gap-6 xl:gap-7.5">
                        <a href=""><img src="/socials/Instagram.svg" alt="Instagram"/></a>
                        <a href=""><img src="/socials/Linkedin.svg" alt="LinkedIn"/></a>
                        <a href=""><img src="/socials/twitter.svg" alt="Twitter"/></a>
                        <a href=""><img src="/socials/Facebook.svg" alt="Facebook"/></a>
                    </div>

                    <p className="text-white font-kosugi text-sm sm:text-base md:text-lg xl:text-[20px] text-center xl:text-right">
                        ® 2025 Find Job. All right reserved
                    </p>
                </div>
            </Layout>
        </footer>
    )
}
