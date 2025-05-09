import React, { useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';

const Bar = () => {
  const [isMinibarVisible, setIsMinibarVisible] = useState(false);
  const mainBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsMinibarVisible(true);
      } else {
        setIsMinibarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Top Bar */}
      <div
        ref={mainBarRef}
        className='flex flex-col md:flex-row justify-between items-center h-auto md:h-24 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 text-white bg-black z-50'
      >
        <h1 className='text-2xl sm:text-3xl font-bold text-neutral-50 mb-4 md:mb-0'>
          Paapa Kusi Portfolio
        </h1>
        <ul className='flex flex-col md:flex-row items-center md:ml-auto space-y-4 md:space-y-0 md:space-x-5'>
          <a
            href="#projects"
            className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
          >
            Projects <FaIcons.FaCode className="ml-2" />
          </a>
          <a
            href="#leadership"
            className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
          >
            Leadership <FaIcons.FaUsers className="ml-2" />
          </a>
          <a
            href="#coursework"
            className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
          >
            Coursework <FaIcons.FaPen className="ml-2" />
          </a>
          <a
            href="https://drive.google.com/file/d/1iqZmAK4dLEnuEPuGdNaXsW5iHQps7K8m/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
          >
            Resume <FaIcons.FaGoogleDrive className="ml-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/paapa-k-kusi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
          >
            <FaIcons.FaLinkedin size={24} className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://github.com/paapa-kusi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0021A5] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
          >
            <FaIcons.FaGithub size={24} className="mr-2" /> GitHub
          </a>
        </ul>
      </div>

      {/* Minibar (Conditional Rendering) */}
      {isMinibarVisible && (
        <div
          className='fixed top-1/2 transform -translate-y-1/2 left-4 flex flex-col bg-gray-900 rounded-md shadow-lg z-50'
          style={{ // Added inline styles for better control
            width: 'auto',
            padding: '0.5rem',
          }}
        >
          <a
            href="#projects"
            className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md"
          >
            <FaIcons.FaCode size={24} />
          </a>
          <a
            href="#leadership"
            className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md"
          >
            <FaIcons.FaUsers size={24} />
          </a>
          <a
            href="#coursework"
            className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md"
          >
            <FaIcons.FaPen size={24} />
          </a>
          {/* ... other links (icons only) */}
          <a
            href="https://drive.google.com/file/d/1MKiAQU5pnUHu-kk76lmaGkJlURK7WFgG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md"
          >
            <FaIcons.FaGoogleDrive size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/paapa-k-kusi"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md"
          >
            <FaIcons.FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/paapa-kusi"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md"
          >
            <FaIcons.FaGithub size={24} />
          </a>
        </div>
      )}
    </>
  );
};

export default Bar;
