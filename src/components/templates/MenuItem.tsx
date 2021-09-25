import Link from 'next/link'
interface MenuItemProps {
    urlMenu: string
    textMenu: string
    iconMenu: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className={`hover:bg-gray-100`}>
            <Link href={props.urlMenu}>
                <a className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                `}>
                    {props.iconMenu}
                    <span className={`
                        text-xs font-light text-gray-600
                    `}>
                        {props.textMenu}
                    </span>
                </a>        
            </Link>
        </li>
    )
}