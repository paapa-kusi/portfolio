import * as FaIcons from 'react-icons/fa';


const Bar = () => {

    return (
        <div className='flex flex-col md:flex-row justify-between items-center h-auto md:h-24 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 text-white'>
            <h1 className='text-2xl sm:text-3xl font-bold text-neutral-50 mb-4 md:mb-0'>
                Paapa Kusi Portfolio
            </h1>
            <ul className='flex flex-col md:flex-row items-center md:ml-auto space-y-4 md:space-y-0 md:space-x-5'>
                <a
                    href="#projects"
                    className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    Projects <FaIcons.FaCode className="ml-2"/>
                </a>
                <a
                    href="#coursework"
                    className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    Coursework <FaIcons.FaPen className="ml-2"/>
                </a>
                <a
                    href="https://drive.google.com/file/d/1Jnq8oPXem-5KIYzY16gdR8yzQpR-LgWX/view?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    Resume <FaIcons.FaGoogleDrive className="ml-2"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/paapa-k-kusi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    <FaIcons.FaLinkedin size={24} className="mr-2"/> LinkedIn
                </a>
                <a
                    href="https://github.com/paapa-kusi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    <FaIcons.FaGithub size={24} className="mr-2"/> GitHub
                </a>
            </ul>
        </div>
    );
};

export default Bar;
