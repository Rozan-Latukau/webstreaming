import SubscriptionDetail from "@/Layouts/Authenticated/subscriptionDetail";
import MenuItem from "./menuitem";
import { userMenu, userOthers } from "./menulist";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <h1 className="font-bold text-[26px]">
                        Zan <br />
                        Streaming...
                    </h1>
                </a>
                <div className="links flex flex-col mt-[40px] h-full gap-[40px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {userMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                text={menu.text}
                                icon={menu.icon}
                                isActive={menu.link && route().current(menu.link)}
                            />
                        ))}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {userOthers.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                text={menu.text}
                                icon={menu.icon}
                                isActive={menu.link && route().current(menu.link)}
                                method={menu.method}
                            />
                        ))}
                    </div>

                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
