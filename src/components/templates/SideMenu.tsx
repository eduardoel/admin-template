import { IconHome, IconNotifications, IconSettings } from "../icons";
import MenuItem from "./MenuItem";

export default function SideMenu() {
    return (
        <aside>
            <ul>
                <MenuItem urlMenu="/" textMenu="Home" iconMenu={IconHome} />
                <MenuItem urlMenu="/Notifications" textMenu="Notifications" iconMenu={IconNotifications} />
                <MenuItem urlMenu="/Settings" textMenu="Home" iconMenu={IconSettings} />
            </ul>
        </aside>
    )
}