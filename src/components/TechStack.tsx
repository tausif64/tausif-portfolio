
const TechStack = () => {
    return (
        <div className="mx-auto max-w-[1100px] mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Frontend Technologies */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Frontend</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>React</li>
                    </ul>
                </div>

                {/* Backend Technologies */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Backend</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PHP</li>
                    </ul>
                </div>

                {/* Databases */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">Databases</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TechStack;