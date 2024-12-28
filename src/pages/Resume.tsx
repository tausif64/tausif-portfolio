

function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Tausif Ansari.pdf';
        link.download = 'Tausif Ansari.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container w-[595px] h-full mx-auto px-4 py-10 relative">
            <button type="button" className="absolute right-0 rounded text-white px-4 py-1 hover:bg-gray-100 bg-white" onClick={handleDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" id="Download--Streamline-Rounded-Material-Symbols" height={24} width={24} ><desc>{"Download Streamline Icon: https://streamlinehq.com"}</desc><path fill="#000000" d="M11.496885416666668 15.213541666666668c-0.09377291666666668 0 -0.18055000000000002 -0.01595625 -0.2604270833333333 -0.04791666666666667 -0.07987708333333333 -0.031960416666666665 -0.15970625 -0.08783125 -0.23958333333333334 -0.16770833333333332l-3.6177083333333333 -3.6177083333333333c-0.14375 -0.1480625 -0.21164791666666666 -0.32089791666666667 -0.20364583333333333 -0.5184583333333334 0.008002083333333333 -0.19741666666666666 0.08073958333333334 -0.36800000000000005 0.21826041666666668 -0.51175 0.14997916666666666 -0.14375 0.3247791666666667 -0.215625 0.5244479166666667 -0.215625 0.19966875 0 0.3713541666666667 0.071875 0.5151041666666667 0.215625l2.347916666666667 2.371875V4.552083333333334c0 -0.20364583333333333 0.06933541666666666 -0.3743872916666667 0.20795833333333333 -0.5122291666666666 0.13847916666666665 -0.13767895833333332 0.31016458333333335 -0.20652083333333335 0.5151041666666667 -0.20652083333333335 0.20474791666666667 0 0.37504375 0.068841875 0.5107916666666668 0.20652083333333335 0.13574791666666666 0.137841875 0.20364583333333333 0.3085833333333334 0.20364583333333333 0.5122291666666666v8.169791666666667l2.371875 -2.371875c0.14053958333333333 -0.14375 0.30748125000000004 -0.21164791666666666 0.5007291666666667 -0.20364583333333333 0.19324791666666666 0.008002083333333333 0.3648854166666667 0.08385416666666666 0.5148645833333334 0.22760416666666666 0.13752083333333331 0.14375 0.20628125 0.3154354166666667 0.20628125 0.5151041666666667 0 0.19966875 -0.071875 0.3713541666666667 -0.215625 0.5151041666666667l-3.59375 3.59375c-0.07987708333333333 0.07987708333333333 -0.16076041666666668 0.13574791666666666 -0.24269791666666665 0.16770833333333332 -0.08208125000000001 0.031960416666666665 -0.16996041666666667 0.04791666666666667 -0.2635416666666667 0.04791666666666667ZM5.270833333333334 19.166666666666668c-0.38333333333333336 0 -0.71875 -0.14375 -1.00625 -0.43125 -0.2875 -0.2875 -0.43125 -0.6229166666666667 -0.43125 -1.00625v-2.707291666666667c0 -0.20364583333333333 0.06932104166666667 -0.37437291666666667 0.20795833333333333 -0.5122291666666666 0.13847916666666665 -0.13766458333333334 0.3101789583333333 -0.20652083333333335 0.5151041666666667 -0.20652083333333335 0.20476229166666668 0 0.37504375 0.06885625 0.5107916666666668 0.20652083333333335 0.13574791666666666 0.13785625 0.20364583333333333 0.3085833333333334 0.20364583333333333 0.5122291666666666V17.729166666666668h12.458333333333334v-2.707291666666667c0 -0.20364583333333333 0.06933541666666666 -0.37437291666666667 0.20795833333333333 -0.5122291666666666 0.13847916666666665 -0.13766458333333334 0.31016458333333335 -0.20652083333333335 0.5151041666666667 -0.20652083333333335 0.20474791666666667 0 0.37504375 0.06885625 0.5107916666666668 0.20652083333333335 0.13574791666666666 0.13785625 0.20364583333333333 0.3085833333333334 0.20364583333333333 0.5122291666666666V17.729166666666668c0 0.38333333333333336 -0.14375 0.71875 -0.43125 1.00625 -0.2875 0.2875 -0.6229166666666667 0.43125 -1.00625 0.43125H5.270833333333334Z" strokeWidth={1} /></svg>
            </button>
            <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold mb-4">Tausif Ansari</h1>
                <div className="mb-4">
                    <p>Email: developer.642003@gmail.com</p>
                    <p>Mobile: (+91) 9076642874</p>
                    <a href="#" className="underline text-blue-500">
                        LinkedIn
                    </a>{' '}
                    |{' '}
                    <a href="#" className="underline text-blue-500">
                        GitHub
                    </a>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">
                    Professional Overview
                </h2>
                <ul className="list-disc pl-6 ">
                    <li>Passionate Full Stack web developer.</li>
                    <li>
                        Worked on HTML5, CSS3, Bootstrap5, JavaScript, React JS and Node JS.
                    </li>
                    <li>
                        Programming knowledge in C++, JavaScript and php.
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">
                    Educational Qualifications
                </h2>
                <ul className="list-disc pl-6">
                    <li>
                        Marwari College, Ranchi (Ranchi University) Ranchi
                        <br />
                        Pursuing Bachelor's of Science in Information Technology
                        (BSC.IT) 2021-24. CGPA: 7.8
                    </li>
                    <li>
                        Passed out 12th from JAC Board in 2021
                        <br />
                        Marks 60.80%
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">
                    Skills
                </h2>
                <ul className="list-disc pl-6">
                    <li>HTML5, CSS3, JavaScript, React JS, Node JS</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control with Git</li>
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">
                    Projects
                </h2>
                <ul className="list-disc pl-6">
                    <li>
                        <strong>Portfolio Website:</strong> A personal portfolio to showcase my work.
                    </li>
                    <li>
                        <strong>Task Manager App:</strong> A full-stack application to manage tasks.
                    </li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-lg font-bold mb-2">
                    Hobbies
                </h2>
                <ul className="list-disc pl-6">
                    <li>Coding</li>
                    <li>Reading Tech Blogs</li>
                    <li>Playing Video Games</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;