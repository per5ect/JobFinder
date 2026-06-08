export function FindJobElement() {
    return (
        <>
            <div className="xl:hidden flex flex-col items-center text-center gap-6 py-8">
                <p className="text-[72px] sm:text-[100px] md:text-[120px] leading-none font-konkhmer text-black tracking-tight">
                    FIND YOUR JOB
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-7 font-kosugi text-black px-2">
                    Our service helps you quickly and conveniently analyze resumes and find jobs that perfectly match your experience and skills
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-kosugi text-black">Start now — upload your CV</p>
                <p className="text-4xl sm:text-5xl md:text-6xl">🔍🔍🔍</p>
            </div>

            <div className="hidden xl:grid grid-rows-3 gap-3 auto-rows-auto">
                <div className="flex items-center gap-12 max-h-34">
                    <p className="text-[150px] leading-none font-konkhmer text-black">
                        FIND
                    </p>
                    <p className="text-[32px] leading-8 font-kosugi text-black">
                        Our service helps you quickly and conveniently analyze resumes and find jobs that perfectly match your experience and skil
                    </p>
                </div>

                <div className="grid grid-cols-10 items-center max-h-[135px]">
                    <span className="h-[86px] max-w-[192px] bg-black block col-start-1 col-end-3"></span>
                    <p className="text-[150px] col-span-1 col-start-3 col-end-8 leading-none font-konkhmer text-black">
                        YOUR
                    </p>
                    <span className="h-[86px] bg-black block col-start-8 col-end-11"></span>
                </div>

                <div className="flex flex-row items-center justify-between max-h-[135px]">
                    <p className="text-[39px] font-kosugi text-black">
                        Start now upload your CV
                    </p>
                    <p className="text-[150px] font-konkhmer text-black">JOB</p>
                    <p className="text-[64px]">🔍🔍🔍</p>
                </div>
            </div>
        </>
    )
}
