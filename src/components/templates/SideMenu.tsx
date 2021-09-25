import { IconHome, IconLogout, IconNotifications, IconSettings } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu() {
    return (
        <aside className="flex flex-col">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem urlMenu="/" textMenu="Home" iconMenu={IconHome} />
                <MenuItem urlMenu="/notifications" textMenu="Notifications" iconMenu={IconNotifications} />
                <MenuItem urlMenu="/settings" textMenu="Settings" iconMenu={IconSettings} />
            </ul>
            <ul>
                <MenuItem textMenu="Logout" iconMenu={IconLogout} 
                    onClick={() => console.log('logout')} 
                    className={`
                        text-red-600
                        hover:bg-red-400 hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}