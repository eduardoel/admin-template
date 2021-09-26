import Link from 'next/link'
interface MenuItemProps {
    urlMenu?: string
    textMenu: string
    iconMenu: any
    className?: string
    onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (
            <a className={`
                flex flex-col justify-center items-center
                h-20 w-20 dark:text-gray-200
                ${props.className}
            `}>
                {props.iconMenu}
                <span className={`text-xs font-light`}>
                    {props.textMenu}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            hover:bg-gray-100 dark:hover:bg-gray-800
            cursor-pointer
            `}>
            {props.urlMenu ? (
                <Link href={props.urlMenu}>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}
        </li>
    )
}