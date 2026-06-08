import {Layout} from "../Global/Layout.jsx";

export function MainAdmin() {
    return (
        <main>
            <Layout>
                <div className="mt-13 mb-13 t-display w-full flex flex-col items-center gap-10">
                    <h1 className="font-konkhmer ">Welcome Back Admin </h1>
                    <div className="flex flex-col xl:flex-row gap-6 w-full">
                        <a href="/users" className="flex flex-row xl:flex-col xl:justify-center items-center gap-6 bg-blue px-8 py-6 xl:py-16 rounded-xl w-full xl:flex-1 transition-colors ease-in-out hover:bg-blue/90">
                            <img src="/icons/Group-personWhite.svg" className="w-[64px] h-[64px] shrink-0" alt=""/>
                            <div className="flex flex-col items-start xl:items-center gap-1">
                                <h3 className="text-white t-display">Users</h3>
                                <p className="text-white t-subhead xl:text-center">Manage your user base with maximum accuracy</p>
                            </div>
                        </a>
                        <a href="/companies" className="flex flex-row xl:flex-col xl:justify-center items-center gap-6 bg-black px-8 py-6 xl:py-16 rounded-xl w-full xl:flex-1 transition-colors ease-in-out hover:bg-black/90">
                            <img src="/icons/CompanyWhite.svg" className="w-[64px] h-[64px] shrink-0" alt=""/>
                            <div className="flex flex-col items-start xl:items-center gap-1">
                                <h3 className="text-white t-display">Companies</h3>
                                <p className="text-white t-subhead xl:text-center">Full control over employers</p>
                            </div>
                        </a>
                        <a href="/technologies" className="flex flex-row xl:flex-col xl:justify-center items-center gap-6 bg-green px-8 py-6 xl:py-16 rounded-xl w-full xl:flex-1 transition-colors ease-in-out hover:bg-green/70">
                            <img src="/icons/CPU.svg" className="w-[64px] h-[64px] shrink-0" alt=""/>
                            <div className="flex flex-col items-start xl:items-center gap-1">
                                <h3 className="text-black t-display">Technologies</h3>
                                <p className="text-black t-subhead xl:text-center">Analyze technologies - add new trends</p>
                            </div>
                        </a>
                    </div>
                </div>
            </Layout>
        </main>
    )
}
