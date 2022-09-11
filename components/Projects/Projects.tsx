import {NextPage} from "next";

const Projects: NextPage = () => {

    const projects = [
        {
            title: "Collector",
            link: "https://gitlab.com/Thibaudkhan/Collector",
            view: "https://gitlab.com/Thibaudkhan/Collector",
            icon: "🎇",
            description: "",
            skills: [
                {
                    name: "NuxtJs",
                    icon: "??"
                },
                {
                    name: "TailwindCss",
                    icon: "??"
                },
            ]
        },
        {
            title: "LetsGo App",
            link: "https://github.com/FrancisKOUAHO/Letsgo",
            view: "",
            icon: "📲",
            description: "",
            skills: [
                {
                    name: "Dart",
                    icon: "??"
                },
                {
                    name: "Flutter",
                    icon: "??"
                },
            ]
        },
        {
            title: "LetsGo Web",
            link: "https://letsg0.fr/",
            view: "https://letsg0.fr/",
            icon: "📲",
            description: "",
            skills: [
                {
                    name: "Wordpress",
                    icon: "??"
                },
                {
                    name: "Wordpress",
                    icon: "??"
                }
            ]
        },
        {
            title: "Messiant Calot",
            link: "https://messiantcalot.fr/",
            view: "https://messiantcalot.fr/",
            icon: "🚧",
            description: "",
            skills: [
                {
                    name: "Wordpress",
                    icon: "??"
                },
                {
                    name: "Wordpress",
                    icon: "??"
                }
            ]
        },
        {
            title: "Sud Renovation",
            link: "https://sudrenovationpiscine.fr/",
            view: "https://sudrenovationpiscine.fr/",
            icon: "🌊",
            description: "",
            skills: [
                {
                    name: "Wordpress",
                    icon: "??"
                },
                {
                    name: "Wordpress",
                    icon: "??"
                }
            ]
        },
        {
            title: "J-P Cheron",
            link: "https://auxfinsgastronomes.com/",
            view: "https://auxfinsgastronomes.com/",
            icon: "🥗",
            description: "",
            skills: [
                {
                    name: "Wordpress",
                    icon: "??"
                },
                {
                    name: "Wordpress",
                    icon: "??"
                }
            ]
        },
        {
            title: "Francis KOUAHO",
            link: "https://github.com/FrancisKOUAHO/kouahofrancis",
            view: "",
            icon: "🥗",
            description: "",
            skills: [
                {
                    name: "NextJs",
                    icon: "??"
                },
                {
                    name: "TailwindCss",
                    icon: "??"
                },
                {
                    name: "Sass",
                    icon: "??"
                }
            ]
        }
    ];


    return (
        <div className="w-full" id="Projects">
            <h2 className="mb-8 sm:mb-10 text-4xl text-center text-white fadeup-enter fadeup-enter-done"
                id="projects"
                style={{transitionDelay: "50ms"}}>Projects</h2>
            <div>
                <div className="flex flex-wrap gap-8">
                    {
                        projects.map((project, index) => {
                            console.log(project.skills);
                            return (
                                <div className="flex-1 fadeup-enter fadeup-enter-done" style={{transitionDelay: "0ms"}}
                                     key={index}>
                                    <div
                                        className="bg-paper p-8 gap-8 rounded-2xl flex flex-col ProjectCard_wrapper__R5XKv"
                                        style={{transform: "translate(0px, 0px) rotate(0deg) scale(1)"}}>
                                        <div className="flex justify-between items-center"><p
                                            className="text-2xl">{project.icon}</p>
                                            <div className="flex gap-2"><a
                                                href={project.link}
                                                className="ProjectCard_iconWrapper__rhgv1">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     role="img"
                                                     viewBox="0 0 24 24" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <title></title>
                                                    <path
                                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                                </svg>
                                            </a><a href={project.view}
                                                   className="ProjectCard_iconWrapper__rhgv1">
                                                <svg stroke="currentColor" fill="none" strokeWidth="0"
                                                     viewBox="0 0 24 24"
                                                     height="1em"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                </svg>
                                            </a></div>
                                        </div>
                                        <h3 className="text-3xl">{project.title}</h3>
                                        <p>Random app to choose student to
                                            present his
                                            project.
                                            I made this app for my teacher who using an ugly website. You can use this
                                            site
                                            to random
                                            everything, obviously.
                                        </p>
                                        <div className="flex gap-2">
                                            {
                                                project.skills.map((skill, index) => {
                                                    return (
                                                        <div
                                                            className="flex border-4 border-primary rounded-full gap-2 items-center py-1 px-2 w-fit"
                                                            key={index}>
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                 strokeWidth="0"
                                                                 role="img"
                                                                 viewBox="0 0 24 24" height="1em" width="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <title></title>
                                                                <path
                                                                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                                                            </svg>
                                                            <span>{skill.name}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;