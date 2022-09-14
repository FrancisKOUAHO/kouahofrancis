import type {NextPage} from 'next'
import TheHeader from "../components/TheHeader/TheHeader";
import Presentation from "../components/Presentation/Presentation";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import {useEffect} from "react";

const Home: NextPage = () => {

    useEffect(() => {
        const tracker = document.getElementById('tracker');

        document.body.addEventListener('mousemove', (e) => {
            tracker!.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });


    }, []);
    return (

        <>
            <div className="min-h-full max-w-6xl mx-auto p-6 relative">
                <div className="min-h-full relative">
                    <TheHeader/>
                </div>
                <div id="tracker">
                    <svg id="cursor" width="40" height="40">
                        <circle cx="20" cy="20" r="20" fill="none" stroke="white" strokeWidth="1"
                                className="cursor-circle"/>
                    </svg>
                </div>
                <div className="relative flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12 flex-col-reverse sm:flex-row Profile_profileHeight__1Q9Zk">
                    <Presentation/>
                    <Profile/>
                </div>
                <div className="flex flex-col gap-12 mt-16 sm:mt-0 sm:gap-24 items-center">
                    <Skills/>
                    <Projects/>
                    <Contact/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Home
