
import About from './../components/About';
import Hero from './../components/Hero';
import Project from './Project';
const Home = () => {
    return (
        <div className="mx-auto max-w-[1200px] grid grid-cols-12 relative">
            <div className='gradient-circle '></div>
            <Hero />
            <div className="min-w-[280px] col-span-12 lg:col-span-7 px-5 py-3 border-0 border-s  border-white h-screen overflow-y-scroll no-scrollbar">
                <About />
                <Project />
            </div>
        </div>
    )
}

export default Home
