import React from 'react';
import MLTImage from '../img/MLT.png';
import NSBEImage from '../img/National_Society_of_Black_Engineers_logo.svg.png';
import SASEImage from '../img/1631367175815.jpeg';

const Leadership = () => {
  return (
    <div className='bg-black text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Leadership and Professional Development
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Management Leadership for Tomorrow */}
          <div className='bg-gray-900 rounded-lg overflow-hidden group relative h-96'>
            <img
              src={MLTImage}
              alt='Management Leadership for Tomorrow'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-6 flex flex-col justify-center'>
              <h3 className='text-xl font-semibold mb-2'>
                Management Leadership for Tomorrow
              </h3>
              <h4 className='text-lg  mb-1'>
                Career Preparation Fellow
              </h4>
              <p className='text-sm'>
                Selected for an 18-month professional development program focused on enhancing leadership and technical skills.
              </p>
            </div>
          </div>

          {/* National Society of Black Engineers */}
          <div className='bg-gray-900 rounded-lg overflow-hidden group relative h-96'>
            <img
              src={NSBEImage}
              alt='National Society of Black Engineers'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-6 flex flex-col justify-center'>
              <h3 className='text-xl font-semibold mb-2'>
                National Society of Black Engineers
              </h3>
              <h4 className='text-lg  mb-1'>
                Shadowing Initiative Program
              </h4>
              <p className='text-sm'>
                Developing strategic leadership, communication, and event planning skills.
              </p>
            </div>
          </div>

          {/* Society of Asian Scientist and Engineers */}
          <div className='bg-gray-900 rounded-lg overflow-hidden group relative h-96'>
            <img
              src={SASEImage}
              alt='Society of Asian Scientist and Engineers'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-6 flex flex-col justify-center'>
              <h3 className='text-xl font-semibold mb-2'>
                Society of Asian Scientist and Engineers
              </h3>
              <h4 className='text-lg  mb-1'>
                Intern
              </h4>
              <p className='text-sm'>
                Designed and facilitated STEM skills and software tool workshops for college students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
