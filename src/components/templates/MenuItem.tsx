interface MenuItemProps {
    urlMenu: string
    textMenu: string
    iconMenu: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className={``}>
            {props.iconMenu}
        </li>
    )
}