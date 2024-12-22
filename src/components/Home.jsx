import React from 'react';
import {ReactTyped} from 'react-typed';

const Home = () => {
  return (
    <div className='text-white'>
      <div className='flex flex-col justify-center items-center h-96 mx-auto text-center px-4 sm:px-6 md:px-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
          Paapa Kusi is a
        </h1>
        <ReactTyped
          className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#FA4616] pl-0 sm:pl-2 md:pl-3'
          strings={['Software Developer', 'Student', 'Learner', 'Problem Solver', 'Team Player', 'ML Enthusiast', 'Web Developer', 'Tech Advocate', 'Creative Thinker', 'CS Enthusiast']}
          typeSpeed={120}
          backSpeed={120}
          smartBackspace={true}
          shuffle={true}
          loop
        />
      </div>
    </div>
  );
};

export default Home;
