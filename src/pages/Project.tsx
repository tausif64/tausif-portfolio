import ProjectCard from "../components/ProjectCard"
import { projectDataType } from "../components/inxed";
import projectData from '../data/projectData';


const Project = () => {
    return (
        <div className="my-5">
            <h3 className="text-2xl font-medium">Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 flex-wrap  items-start gap-x-3 gap-y-5 py-3">
                {projectData.map((item: projectDataType, index: number|string) => (
                    <ProjectCard data={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Project
