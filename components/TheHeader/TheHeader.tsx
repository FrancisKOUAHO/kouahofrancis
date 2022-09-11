import {NextPage} from "next";


const TheHeader: NextPage = () => {
    return (
        <header>
            <div className="items-center hidden md:flex py-4">
                <img src="/Logo_Portfolio_Francis_Jaune.png" alt="Logo Portfolio Francis Jaune"
                     className="mr-auto fadeup-enter fadeup-enter-done"
                     style={{transitionDelay: "0ms", width: "2.5rem", height: "2.5rem"}}/>
                <nav>
                    <ul className="flex items-baseline gap-6 fadeup-enter fadeup-enter-done"
                        style={{transitionDelay: "100ms"}}>
                        <li style={{transform: "translate(0px, 0px) rotate(0deg) scale(1)"}}
                            className="hidden sm:block">
                            <a href="#Skills" className="text-2xl md:text-base">
                                <span className="font-mono text-amber-200">0.</span>
                                <span>Skills</span>
                            </a>
                        </li>
                        <li style={{transform: "translate(0px, 0px) rotate(0deg) scale(1)"}}>
                            <a href="#Projects" className="text-2xl md:text-base">
                                <span className="font-mono text-amber-200">1.</span>
                                <span>Projects</span>
                            </a>
                        </li>
                        <li style={{transform: "translate(0px, 0px) rotate(0deg) scale(1)"}}>
                            <a href="#Contact" className="text-2xl md:text-base">
                                <span className="font-mono text-amber-200">2.</span>
                                <span>Contact</span>
                            </a>
                        </li>
                        <li style={{transform: "translate(0px, 0px) rotate(0deg) scale(1)"}}>
                            <a className="text-2xl md:text-base">
                                <span className="font-mono text-amber-200">3.</span>
                                <span>Blog</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default TheHeader
