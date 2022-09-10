import type {NextPage} from 'next'
import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Presentation: NextPage = () => {
    return (
        <div className="flex flex-col gap-6 sm:gap-10 w-full">
            <div className="w-fit flex flex-col gap-2 relative">
                <img src="https://www.commentcamarche.net/applis-sites/services-en-ligne/715-modifier-la-photo-de-profil-d-un-compte-google/" alt="" className="Profile_pointBg__1Z7Zk"/>
                <p className="text-amber-200 text-2xl font-bold relative right-2 fadeup-enter fadeup-enter-done"
                   style={{transitionDelay:"300ms"}}>Hey there! I&lsquo;m -
                </p>
                <h1 className="header-h1-fluid font-bold text-gradient-primary fadeup-enter fadeup-enter-done"
                    style={{transitionDelay:"400ms"}}>Francis KOUAHO
                </h1>
                <p className="header-h2-fluid text-textSecondary sm:mt-4 fadeup-enter fadeup-enter-done"
                   style={{transitionDelay:"500ms"}}><b className="text-textPrimary">FrontEnd Software Engineer.</b> Self-taught
                    since I was 16 years old, then apprenticed in a company  </p>
            </div>
            <SocialNetwork/>
        </div>
    )
}

export default Presentation
