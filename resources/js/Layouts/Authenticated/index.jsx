import Sidebar from "@/Layouts/Authenticated/sidebar";
import Topbar from "@/Layouts/Authenticated/topbar";

export default function Authenticated({ auth, children }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Awal:sidebar */}
                {/* Akhir:sidebar */}
                <Sidebar auth={auth} />
                {/* Awal:content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* Awal:Topbar */}
                        <Topbar name={auth.user.name} />
                        {/* Akhir:Topbar */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* Akhir:content */}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    )
}
