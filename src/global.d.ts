// Wildcard declaration for all file types
import { FC } from "react";
import { projectDataType } from "./components/inxed";

declare module "../components/Hero" {
  const Hero: FC; 
  export default Hero;
}
declare module "./../data/projectData" {
  const projectData: projectDataType[];
  export default projectData;
}





