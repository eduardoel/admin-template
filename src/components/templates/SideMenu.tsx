import { IconHome, IconNotifications, IconSettings } from "../icons";
import MenuItem from "./MenuItem";

export default function SideMenu() {
    return (
        <aside>
            <ul>
                <MenuItem urlMenu="/" textMenu="Home" iconMenu={IconHome} />
                <MenuItem urlMenu="/notifications" textMenu="Notifications" iconMenu={IconNotifications} />
                <MenuItem urlMenu="/settings" textMenu="Settings" iconMenu={IconSettings} />
            </ul>
        </aside>
    )
}