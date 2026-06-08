export function HowItWorksElement() {
    return (
        <>
            <div className="xl:hidden flex flex-col mt-10 gap-8">
                <div className="bg-black w-fit px-6 py-4">
                    <p className="font-kosugi text-2xl sm:text-3xl md:text-4xl text-white">How it works???</p>
                </div>

                <ol className="list-decimal pl-6 font-kosugi text-lg sm:text-xl md:text-2xl space-y-0">
                    <li className="border-b border-black py-4 sm:py-5 md:py-6">
                        AI will analyze your experience, skills, and education
                    </li>
                    <li className="border-b border-black py-4 sm:py-5 md:py-6">
                        Get a list of suitable jobs
                    </li>
                    <li className="border-b border-black py-4 sm:py-5 md:py-6">
                        Filter jobs by salary, experience and city
                    </li>
                    <li className="border-b border-black py-4 sm:py-5 md:py-6">
                        Respond to the best offers in one click
                    </li>
                </ol>

                <a href="/analyze" className="py-4 sm:py-5 md:py-6 px-8 bg-green text-xl sm:text-2xl md:text-3xl text-center text-black font-kosugi transition-colors ease-in-out hover:bg-green/90">
                    Start right now
                </a>
            </div>

            <div className="hidden xl:flex flex-col mt-20 gap-15">
                <div className="bg-black h-25 flex justify-center items-center w-90">
                    <p className="font-kosugi text-[36px] text-white py-7.5">How it works???</p>
                </div>

                <div className="">
                    <ol className="grid grid-rows-4 grid-cols-12 row-start-2 list-decimal text-[33px] font-kosugi">
                        <li className="col-start-2 col-end-12 border-b">
                            <p className="py-[33px]">AI will analyze your experience, skills, and education</p>
                        </li>
                        <li className="col-start-3 col-end-9 row-start-2 border-b">
                            <p className="py-[35px]">Get a list of suitable jobs</p>
                        </li>
                        <li className="col-start-4 col-end-12 row-start-3 border-b">
                            <p className="py-[35px]">Filter jobs by salary, experience and city</p>
                        </li>
                        <li className="col-start-5 col-end-12 row-start-4 border-b">
                            <p className="py-[35px]">Respond to the best offers in one click</p>
                        </li>
                    </ol>
                </div>

                <a href="/analyze" className="py-[30px] px-[93px] bg-green text-[36px] text-center text-black font-kosugi ml-auto transition-colors ease-in-out hover:bg-green/90">
                    Start right now
                </a>
            </div>
        </>
    )
}
