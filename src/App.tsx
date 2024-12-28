import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from "./pages/ProjectDetails";
import CustomCursor from "./components/CustomCursor";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
 
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/tausif-portfolio/" element={<Home />} />
        <Route path="/tausif-portfolio/resume" element={<Resume />} />
        <Route path="/tausif-portfolio/contact" element={<Contact />} />
        <Route path="/tausif-portfolio/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
