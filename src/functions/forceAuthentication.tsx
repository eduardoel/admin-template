import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import loadingGif from '../../public/images/loading.gif'
import useAuth from "../data/hook/useAuth"

export default function forceAuthentication() {

    const { user, loading } = useAuth()

    function renderContent(jsx) {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-auth")) {
                                    window.location.href = "/authentication"
                                }
                            `
                        }}
                    />
                    {jsx}            
                </Head>
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

/*
    To use this function, you must go to the 'Layout' component and place this function after 
    the 'return'and importing it at the beginning of the file.

        return (
            <ForceAuthentication>
                <div className={`${theme} flex h-screen w-screen`}>
                    <SideMenu/>
                    <div className={`
                        flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800 
                    `}>
                        <TopBar title={props.title} subtitle={props.subtitle}/>
                        <Content>
                            {props.children}
                        </Content>
                    </div>
                </div>
            </ForceAuthentication>
        )

        To:

        return forceAuthentication(
            <div className={`${theme} flex h-screen w-screen`}>
                <SideMenu/>
                <div className={`
                    flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800 
                `}>
                    <TopBar title={props.title} subtitle={props.subtitle}/>
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        )
*/