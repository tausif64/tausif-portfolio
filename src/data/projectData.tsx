// Updated Project Data Array with Randomly Generated Unique IDs
import ReactIcon from "../components/icons/ReactIcon";
import MySQL from "../components/icons/MySQL";
import NodeJS from "./../components/icons/NodeJS";
import Express from "./../components/icons/Express";
import Html from "./../components/icons/Html";
import Css from "./../components/icons/Css";
import JavaScript from "./../components/icons/JavaScript";
import Bootstrap from "./../components/icons/Bootstrap";
import JqueryIcon from "./../components/icons/JqueryIcon";
const projectData = [
  {
    id: "a0f58f34999fc19ff82d8b73",
    name: "Misssion Pahal",
    role: "Full Stack developer",
    description: [
      `Mission Pahal is a comprehensive web application tailored to support the Mission Pahal organization in its mission to drive social change and community development. This platform not only facilitates efficient events and projects management but also serves as a vital tool for engaging with supporters and donors. <br /> A standout feature of Mission Pahal is its integrated donation system, which utilizes Razorpay to provide a secure and seamless payment experience for users wishing to contribute to the organization's initiatives. This feature allows for quick donations, making it easier for supporters to contribute to causes they care about.`,
    ],
    technology: [<ReactIcon />, <Express />, <NodeJS />, <MySQL />],
    url: "https://www.missionpahal.org/",
    images: ["/mission_pahal_1.png", "/mission_pahal_2.jpg"],
  },
  {
    id: "a09cad2a609f600d299f94bb",
    name: "SHIVA ENVIRO LAB AND RESEARCH CENTRE",
    role: "Front-end developer",
    description:
      "The SHIVA ENVIRO LAB AND RESEARCH CENTRE is an innovative environmental research center dedicated to promoting sustainability and ecological awareness. This platform not only provides tools for monitoring fitness activities but also integrates features that encourage sustainable practices and eco-friendly habits.",
    technology: [
      <Html />,
      <Css />,
      <Bootstrap />,
      <JavaScript />,
      <JqueryIcon />,
    ],
    url: "https://shivaenvirolab.com/",
    images: ["/shivaenvirolab_1.png", "/shivaenvirolab_2.jpg"],
  },
  {
    id: "c0f5c1821e614532c0be3e5f",
    name: "CM SCHOOL OF EXELLENCE",
    role: "Front-end developer",
    description:
      "CM SCHOOL OF EXCELLENCE is the official website of a government school dedicated to providing quality education and fostering academic excellence. The platform serves as a comprehensive resource for students, parents, and educators, offering information about the school's programs, events, and achievements.",
    technology: [
      <Html />,
      <Css />,
      <Bootstrap />,
      <JavaScript />,
      <JqueryIcon />,
    ],
    url: "https://modelschoolkanke.com/",
    images: ["/modelschoolkanke_1.png", "/modelschoolkanke_2.jpg"],
  },
];

export default projectData;
