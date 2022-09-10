import type {NextPage} from 'next'
import TheHeader from "../components/TheHeader/TheHeader";
import Presentation from "../components/Presentation/Presentation";
import Profile from "../components/Profile/Profile";

const Home: NextPage = () => {
    return (
        <div className="min-h-full max-w-6xl mx-auto p-6 relative">
            <div className="min-h-full relative">
                <TheHeader/>
            </div>
            <div
                className="relative flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12 flex-col-reverse sm:flex-row Profile_profileHeight__1Q9Zk">
                <Presentation/>
                <Profile/>
            </div>
        </div>
    )
}

export default Home
