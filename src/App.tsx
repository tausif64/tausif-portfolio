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
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
