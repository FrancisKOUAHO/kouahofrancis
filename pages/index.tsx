import type {NextPage} from 'next'
import Head from 'next/head'
import TheHeader from "../components/TheHeader/TheHeader";
import Presentation from "../components/Presentation/Presentation";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Francis Kouaho.FrontEnd Software Engineer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className="min-h-full max-w-6xl mx-auto p-6 relative">
                <div className="min-h-full relative">
                    <TheHeader/>
                </div>
                <div
                    className="relative flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12 flex-col-reverse sm:flex-row Profile_profileHeight__1Q9Zk">
                    <Presentation/>
                    <Profile/>
                </div>
                <div className="flex flex-col gap-12 mt-16 sm:mt-0 sm:gap-24 items-center">
                    <Skills/>
                </div>
            </div>
        </>
    )
}

export default Home
