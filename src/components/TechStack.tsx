import Bootstrap from "./icons/Bootstrap";
import Css from "./icons/Css";
import Express from "./icons/Express";
import Html from "./icons/Html";
import JavaScript from "./icons/JavaScript";
import MongoDB from "./icons/MongoDB";
import MySQL from "./icons/MySQL";
import NodeJS from "./icons/NodeJS";
import PHP from "./icons/PHP";
import ReactIcon from "./icons/ReactIcon";
import Tailwind from "./icons/Tailwind";

const TechStack = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="max-w-[300px]">
                <div className="text-xl font-semibold text-start">Tech Stack</div>
                <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                    <Html height={40} width={40} />
                    <Css height={40} width={40} />
                    <Bootstrap height={40} width={40} />
                    <Tailwind height={35} width={35} />
                    <JavaScript height={35} width={35} />
                    <ReactIcon height={35} width={35} />
                    <Express height={35} width={35} />
                    <NodeJS height={35} width={35} />
                    <PHP height={35} width={35} />
                    <MySQL height={35} width={35} />
                    <MongoDB height={35} width={35} />
                </div>
            </div>
        </div>
    );
}

export default TechStack;