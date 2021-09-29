import useAppData from "../../data/hook/useAppData";
import ButtonTheme from "./ButtonTheme";
import Title from "./Title";
import UserAvatar from "./UserAvatar";

interface TopBarProps {
    title: string
    subtitle: string
}

export default function TopBar(props: TopBarProps) {

    const { theme, switchTheme } = useAppData()

    return (
        <div className={'flex'}>
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <ButtonTheme theme={theme} setTheme={switchTheme} />
                <UserAvatar className="ml-3"/>
            </div>
        </div>
    )
}