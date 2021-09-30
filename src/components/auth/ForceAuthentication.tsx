import Image from 'next/image'
import router from 'next/router'
import loadingGif from '../../../public/images/loading.gif'
import useAuth from "../../data/hook/useAuth"

export default function forceAuthentication() {

    const { user, loading } = useAuth()

    function renderContent(props) {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={` flex justify-center items-center h-screen `}>
                <Image src={loadingGif} />
            </div>
        )
    }

    if(!loading && user?.email) {
        return renderContent
    } else if (loading) {
        return renderLoading
    } else {
        router.push('/authentication')
        return null
    }
}