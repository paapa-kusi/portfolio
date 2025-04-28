import React from 'react';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import catImage from '../img/cat.PNG';
import chat from '../img/chat.png';
import mnist from '../img/mnist.png';
import rps from '../img/rps.PNG';
import game from '../img/game.png';
import objecttfjs from '../img/objecttfjs.png';
import portfolio from '../img/portfolio.png';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Website',
      image: portfolio,
      github: 'https://github.com/paapa-kusi/portfolio',
      tech: [
        { id: 1, icon: <DiIcons.DiReact size={40} /> },
        { id: 2, icon: <SiIcons.SiCss3 size={40} /> },
        { id: 3, icon: <SiIcons.SiNodedotjs size={40} /> },
        { id: 4, icon: <SiIcons.SiHtml5 size={40} /> },
      ],
    },
    {
      title: 'Cat Vs. Dog Detection',
      image: catImage,
      github: 'https://github.com/paapa-kusi/CatvsDogApp',
      tech: [{ id: 5, icon: <DiIcons.DiSwift size={40} /> }],
    },
    {
      title: 'Rock, Paper, Scissors',
      image: rps,
      github: 'https://github.com/paapa-kusi/RPS',
      tech: [{ id: 6, icon: <DiIcons.DiSwift size={40} /> }],
      imagePosition: 'top 10%',
    },
    {
      title: 'Digit Classifier',
      image: mnist,
      github: 'https://github.com/paapa-kusi/digit-classifier',
      tech: [
        { id: 7, icon: <DiIcons.DiPython size={40} /> },
        { id: 8, icon: <SiIcons.SiTensorflow size={40} /> },
        { id: 9, icon: <SiIcons.SiNumpy size={40} /> },
      ],
    },
    {
      title: 'Game Search Engine',
      image: game,
      github: 'https://github.com/mfahd308/P3-template',
      tech: [{ id: 10, icon: <DiIcons.DiPython size={40} /> }],
    },
    {
      title: 'Basic Chat App',
      image: chat,
      github: '',
      tech: [
        { id: 11, icon: <SiIcons.SiNodedotjs size={40} /> },
        { id: 12, icon: <SiIcons.SiSocketdotio size={40} /> },
        { id: 13, icon: <SiIcons.SiExpress size={40} /> },
        { id: 14, icon: <SiIcons.SiMongodb size={40} /> },
        { id: 15, icon: <SiIcons.SiHtml5 size={40} /> },
      ],
    },
    {
      title: 'Object Detection w/ JS',
      image: objecttfjs,
      github: 'https://github.com/paapa-kusi/object-detection-tfjs',
      tech: [
        { id: 16, icon: <SiIcons.SiJavascript size={40} /> },
        { id: 17, icon: <SiIcons.SiTensorflow size={40} /> },
        { id: 18, icon: <SiIcons.SiHtml5 size={40} /> },
        { id: 19, icon: <SiIcons.SiCss3 size={40} /> },
      ],
    },
  ];

  return (
    <div className='bg-black text-white py-12'>
      <div className='w-full text-3xl sm:text-4xl md:text-4xl font-bold text-center flex flex-col md:flex-row justify-center my-8'>
        <h1>Projects</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='relative rounded-2xl overflow-hidden bg-black group transition-transform duration-300 hover:scale-105'
          >
            <div
              className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40'
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundPosition: project.imagePosition || 'center',
              }}
            />
            <div className='absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity duration-300'></div>
            <div className='relative p-6 text-white z-10'>
              <h2 className='text-xl sm:text-2xl font-bold text-shadow'>{project.title}</h2>
              <h4 className='text-md sm:text-lg text-slate-400 mt-2 text-shadow'>Tech Stack:</h4>
              <div className='flex flex-wrap justify-center mt-2'>
                {project.tech.map((item) => (
                  <span key={item.id} className='inline-block text-neutral-50 mr-2 mb-2 text-shadow'>
                    {item.icon}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                >
                  <DiIcons.DiGithub className='w-8 h-8 text-white hover:text-gray-300' />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
