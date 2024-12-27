
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import AboutPage from '../pages/About/AboutPage'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectsPage from '../pages/Project/ProjectsPage'
import ContactPage from '../pages/Contact/ContactPage'
import Resume from '../pages/Resume/Resume'
import ProjectDetail from '../pages/Project/ProjectDetail'

const ClientRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default ClientRoutes


import { useParams } from "react-router-dom";
import projects from "../../lib/data";
import { Project } from "../../helper/interface";
import NotFoundPage from "../NotFoundPage";

const ProjectDetail = () => {
    const { id } = useParams();

    const project = projects.find((project: Project) => project.id === id);
    if (!project) {
        return <NotFoundPage />
    }

    console.log(project)

    return (
        <div className="flex flex-col gap-y-6 mt-20 xxs:p-2 xs:p-2 sm:p-6 md:p-4 xl:p-0 max-w-[1000px] mx-auto p-3">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <div className="flex items-center justify-between gap-x-2">
                        <h1 className="xxs:text-xl xs:text-2xl lg:text-4xl font-bold">
                            {project.title}
                        </h1>
                        <a
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:hover:text-gray-50 h-10 px-4 py-2"
                            target="_blank"
                            href={project.url}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-link"
                            >
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            Visit
                        </a>
                    </div>
                    <p className="max-w-xl text-gray-500 xxs:max-w-full md:max-w-xl xxs:text-sm xs:text-base xl:text-lg">
                        {project.description}
                    </p>
                    <div className="flex xxs:flex-col xl:flex-row xxs:items-start xl:items-center gap-2 justify-between flex-wrap">
                        <div className="flex flex-col gap-y-2">
                            <h5 className="text-lg md:text-xl font font-medium">Services</h5>
                            <div className="flex items-center gap-x-2">
                                {
                                    project.service.map((item: string, index: number) => (
                                        <div key={index} className="inline-flex items-center rounded-sm border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300 text-gray-950 dark:text-gray-50 cursor-pointer">
                                            {item}
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h5>Technologies</h5>
                            <div className="flex items-center gap-x-2">

                                {
                                    project.technologies.map((item: string, index: number) => (
                                        <div key={index} className="inline-flex items-center rounded-sm border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300 text-gray-950 dark:text-gray-50 cursor-pointer">
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 my-10">
                        {project?.imageUrl.map((img: string, index: number) => (
                            <img
                                key={index}
                                alt="1.png"
                                className="w-full h-full object-cover border border-gray-200 shadow-lg rounded"
                                src={img}
                                style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;


< !doctype html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/src/assets/profilepic.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Tausif Ansari</title>
        </head>
        <body>
            <div id="root"></div>
            <script type="module" src="/src/main.tsx"></script>
        </body>
    </html>

<body>
    <div id="root"><header class="fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-transparent px-6 py-4"><nav aria-label="Global" class="flex items-center relative justify-between lg:px-8"><div class="flex lg:flex-1"><a class=" p-1.5 font-medium text-lg" href="/">tausif.</a></div><div class="flex lg:hidden"><div class="lg:hidden block"><div class="flex justify-center"><label class="inline-flex relative items-center cursor-pointer"><input type="checkbox" class="sr-only peer" checked=""><div class="h-fit w-fit p-[0.3rem] peer-checked:bg-blue-
            500 rounded-md peer-checked:after:translate-x-full transition-all duration-200 ease-in hover:bg-slate-100 hover:scale-105 active:scale-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 hover:text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path></svg></div></label></div></div><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"><span class="sr-only">Open main menu</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6 dark:text-white text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div><div class="lg:flex lg:items-center lg:gap-x-8 hidden"><a class="text-sm font-semibold leading-6 py-1 px-2 rounded-md text-gray-900 dark:text-white dark:hover:bg-slate-100 dark:hover:text-black active:scale-100 transition-all duration-200 ease-out hover:bg-indigo-500 hover:text-white" href="/">Home</a><a class="text-sm font-semibold leading-6 py-1 px-2 rounded-md text-gray-900 dark:text-white dark:hover:bg-slate-100 dark:hover:text-black active:scale-100 transition-all duration-200 ease-out hover:bg-indigo-500 hover:text-white" href="/about">About</a><a aria-current="page" class="text-sm font-semibold leading-6 py-1 px-2 rounded-md text-gray-900 dark:text-white dark:hover:bg-slate-100 dark:hover:text-black active:scale-100 transition-all duration-200 ease-out hover:bg-indigo-500 hover:text-white active" href="/projects">Projects</a><a class="text-sm font-semibold leading-6 py-1 px-2 rounded-md text-gray-900 dark:text-white dark:hover:bg-slate-100 dark:hover:text-black active:scale-100 transition-all duration-200 ease-out hover:bg-indigo-500 hover:text-white" href="/resume">Resume</a><a class="text-sm font-semibold leading-6 py-1 px-2 rounded-md text-gray-900 dark:text-white dark:hover:bg-slate-100 dark:hover:text-black active:scale-100 transition-all duration-200 ease-out hover:bg-indigo-500 hover:text-white" href="/contact">Contact</a><div class="hidden lg:block"><div class="flex justify-center"><label class="inline-flex relative items-center cursor-pointer"><input type="checkbox" class="sr-only peer" checked=""><div class="h-fit w-fit p-[0.3rem] peer-checked:bg-blue-
            500 rounded-md peer-checked:after:translate-x-full transition-all duration-200 ease-in hover:bg-slate-100 hover:scale-105 active:scale-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 hover:text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path></svg></div></label></div></div></div></nav></header><div class="relative bg-gray-50 dark:bg-[#080808] px-2 "><div id="projects" class="max-w-[1000px] mx-auto md:px-12 py-5 md:py-10 bg-transparent  mt-10 md:mt-20 "><div class="flex min-[420px]:justify-between items-center flex-wrap justify-center gap-4"><h1 class="text-4xl font-black">Work</h1><div class="flex justify-start items-center flex-nowrap"><div class="relative group hidden md:block ml-2"><button class="p-2 rounded flex items-center bg-black text-white border"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg></button><span class="absolute left-1/2 -top-10 transform -translate-x-1/2 mt-2 w-max bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">List view</span></div><div class="relative group hidden md:block"> <button class="p-2 rounded flex items-center hover:bg-gray-200 hover:text-black"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"></path></svg></button><span class="absolute left-1/2 -top-10 transform -translate-x-1/2 mt-2 w-max bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Switch to grid view</span></div></div></div><div class="mt-5 px-3 flex flex-col max-w-[800px] mx-auto"><a class="relative bg-transparent border-gray-300 rounded-md dark:rounded-none shadow overflow-hidden dark:bg-transparent flex my-3" href="/projects/60d5f484f1a2c8b1c8e4e1a1"><div class="overflow-hidden cursor-pointer border border-transparent rounded-lg mr-4"><img src="/src/assets/mp.jpg" alt="Mission Pahal" class="w-[25rem] h-60 object-cover transition-transform transform hover:scale-105 duration-200"></div><div class="px-2 flex-1 ms-4 py-2"><div class="flex-1"><h2 class="text-base sm:text-lg md:text-xl font-bold">Mission Pahal</h2><p class="mt-2 text-sm sm:text-base md:text-lg"><strong>Role : </strong> <em>Full Stack Developer</em></p><p class="mt-2"><span class="hidden md:inline">I developed the Mission Pahal website to effectively showcase the NGO's initiatives and services. The platform is designed to b...</span><span class="inline md:hidden">I developed the Mission Pahal website to effectively showcase the N... </span></p></div><button class="h-fit py-1 rounded  absolute bottom-3 px-4 hover:bg-[#FFF8EA]  dark:hover:bg-[#FFF8EA] dark:hover:text-black transition duration-300 min-w-[100px] font-medium border-gray-200 border-2 rounded">Case Study</button></div></a><a class="relative bg-transparent border-gray-300 rounded-md dark:rounded-none shadow overflow-hidden dark:bg-transparent flex my-3" href="/projects/60d5f484f1a2c8b1c8e4e1a2"><div class="overflow-hidden cursor-pointer border border-transparent rounded-lg mr-4"><img src="/src/assets/shiva.png" alt="SHIVA ENVIRO LAB AND RESEARCH CENTRE" class="w-[25rem] h-60 object-cover transition-transform transform hover:scale-105 duration-200"></div><div class="px-2 flex-1 ms-4 py-2"><div class="flex-1"><h2 class="text-base sm:text-lg md:text-xl font-bold">SHIVA ENVIRO LAB AND RESEARCH CENTRE</h2><p class="mt-2 text-sm sm:text-base md:text-lg"><strong>Role : </strong> <em>Frontend Web Developer</em></p><p class="mt-2"><span class="hidden md:inline">I worked on the frontend of the SHIVA ENVIRO LAB AND RESEARCH CENTRE website, creating an engaging platform that monitors and e...</span><span class="inline md:hidden">I worked on the frontend of the SHIVA ENVIRO LAB AND RESEARCH CENTR... </span></p></div><button class="h-fit py-1 rounded  absolute bottom-3 px-4 hover:bg-[#FFF8EA]  dark:hover:bg-[#FFF8EA] dark:hover:text-black transition duration-300 min-w-[100px] font-medium border-gray-200 border-2 rounded">Case Study</button></div></a><a class="relative bg-transparent border-gray-300 rounded-md dark:rounded-none shadow overflow-hidden dark:bg-transparent flex my-3" href="/projects/60d5f484f1a2c8b1c8e4e1a3"><div class="overflow-hidden cursor-pointer border border-transparent rounded-lg mr-4"><img src="/src/assets/project-3.png" alt="CM SCHOOL OF EXELLENCE" class="w-[25rem] h-60 object-cover transition-transform transform hover:scale-105 duration-200"></div><div class="px-2 flex-1 ms-4 py-2"><div class="flex-1"><h2 class="text-base sm:text-lg md:text-xl font-bold">CM SCHOOL OF EXELLENCE</h2><p class="mt-2 text-sm sm:text-base md:text-lg"><strong>Role : </strong> <em>Frontend Web Developer</em></p><p class="mt-2"><span class="hidden md:inline">I developed the frontend for the CM SCHOOL OF EXCELLENCE website, promoting the school's services and enhancing visibility to a...</span><span class="inline md:hidden">I developed the frontend for the CM SCHOOL OF EXCELLENCE website, p... </span></p></div><button class="h-fit py-1 rounded  absolute bottom-3 px-4 hover:bg-[#FFF8EA]  dark:hover:bg-[#FFF8EA] dark:hover:text-black transition duration-300 min-w-[100px] font-medium border-gray-200 border-2 rounded">Case Study</button></div></a></div></div></div><footer class="px-5 sm:px-16"><div class="relative py-20 rounded-2xl flex flex-col items-center text-center overflow-hidden w-full "><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 433px; animation-delay: 0.548689s; animation-duration: 5s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 516px; animation-delay: 0.844868s; animation-duration: 3s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 878px; animation-delay: 0.430975s; animation-duration: 2s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 511px; animation-delay: 1.19659s; animation-duration: 2s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 100px; animation-delay: 0.521321s; animation-duration: 4s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 661px; animation-delay: 0.973913s; animation-duration: 7s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 129px; animation-delay: 0.306084s; animation-duration: 9s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 476px; animation-delay: 0.814697s; animation-duration: 6s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 856px; animation-delay: 0.535577s; animation-duration: 2s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 1031px; animation-delay: 0.315795s; animation-duration: 2s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 66px; animation-delay: 0.915239s; animation-duration: 2s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 931px; animation-delay: 1.19325s; animation-duration: 2s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 951px; animation-delay: 0.407104s; animation-duration: 3s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 921px; animation-delay: 0.89175s; animation-duration: 7s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><span class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-gray-500 shadow-[0_0_0_1px_#ffffff10]" style="top: -5px; left: 716px; animation-delay: 1.02679s; animation-duration: 4s;"><div class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-gray-500 to-transparent"></div></span><h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-6xl">Let's Talk about Your Project.</h2><p class="mt-2 opacity-50 text-lg md:text-md lg:text-xl xl:text-2xl">Something on your mind? Get in touch and let's chat!</p><div class="flex items-center mt-5"><button class="relative gradient-border m-1 px-7 py-2 rounded-xl flex items-center justify-center bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 duration-200 text-white" style="transform: none;">Schedule a call</button><a class="m-1 px-3 py-2 rounded-xl flex items-center justify-center border border-gray-50 bg-gray-100 hover:bg-gray-200 hover:border-gray-100 active:border-gray-300 ml-5 dark:text-black dark:hover:bg-gray-300 dark:hover:border-gray-300" href="/contact">Send me an email</a></div></div></footer><div class="flex flex-wrap gap-y-2  justify-center flex-col lg:flex-row lg:justify-between items-center sm:w-full bg-gray-50 px-5 sm:px-16 py-4 dark:bg-[#080808] false"><div class="flex flex-wrap gap-y-2 justify-center md:justify-start"><a class="px-2 hover:underline" href="/">Home</a><a class="px-2 hover:underline" href="/about">About</a><a aria-current="page" class="px-2 hover:underline active" href="/projects">Projects</a><a class="px-2 hover:underline" href="/blogs">Blogs</a><a class="px-2 hover:underline" href="/resume">Resume</a><a class="px-2 hover:underline" href="/contact">Contact</a></div><div><div class="flex justify-start space-x-4"><a href="https://github.com" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-full bg-black hover:scale-105 transition-transform transform text-white dark:bg-white dark:text-black" aria-label="GitHub"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-full bg-black hover:scale-105 transition-transform transform text-white dark:bg-white dark:text-black" aria-label="LinkedIn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-full bg-black hover:scale-105 transition-transform transform text-white dark:bg-white dark:text-black" aria-label="Twitter"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-full bg-black hover:scale-105 transition-transform transform text-white dark:bg-white dark:text-black" aria-label="Facebook"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-full bg-black hover:scale-105 transition-transform transform text-white dark:bg-white dark:text-black" aria-label="Instagram"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a></div></div></div></div>
    <script type="module" src="/src/main.tsx?t=1733684505830"></script>
  

</body>