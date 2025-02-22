import { projectDataType } from "../components/inxed";
import NotFoundPage from "./NotFoundPage";
import projectData from '../data/projectData';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();

    const project = projectData.find((project:projectDataType) => project.id === id);
    if (!project) {
        return <NotFoundPage />
    }


    return (
        <div className="flex flex-col gap-y-6 mt-20 xxs:p-2 xs:p-2 sm:p-6 md:p-4 xl:p-0 max-w-[1000px] mx-auto p-3">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <div className="flex items-center justify-between gap-x-2">
                        <h1 className="xxs:text-xl xs:text-2xl lg:text-4xl font-bold">
                            {project.name}
                        </h1>
                        <a
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white hover:bg-gray-100 text-black hover:text-gray-900 dark:border-gray-800 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:hover:text-gray-50 h-10 px-4 py-2"
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
                    <p className="w-full text-gray-500 xxs:max-w-full xxs:text-sm xs:text-base xl:text-lg"
                        dangerouslySetInnerHTML={{ __html: project.description }} />
                    <div className="flex xxs:flex-col xl:flex-row xxs:items-start xl:items-center gap-2 justify-between flex-wrap">
                        <div className="flex flex-col gap-y-2">
                            <h5>Technologies</h5>
                            <div className="flex items-center gap-x-2">

                                {
                                    project.technology.map((item, index: number) => (
                                        <div key={index} className="inline-flex items-center rounded-sm border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300 text-gray-950 dark:text-gray-50 cursor-pointer">
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 my-10">
                        {project?.images.map((img: string, index: number) => (
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