import React from 'react'
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
  return (
    <div className='bg-black min-h-screen mt-32'>
      <div className='w-full text-3xl sm:text-4xl md:text-4xl font-bold text-white text-center flex flex-col md:flex-row justify-center my-8'>
        <h1>Projects</h1>
      </div>
        <div className='w-full flex flex-col items-center md:flex-row md:items-start mx-auto p-4 md:p-6 lg:p-8'>
            <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/4 p-2'>
                <div className='relative w-full rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
                     style={{
                         backgroundImage: `url(${portfolio})`,
                         backgroundSize: 'contain',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         height: '300px'
                     }}
                >
                    <a href='https://github.com/paapa-kusi/portfolio' target='_blank' rel='noopener noreferrer'>
                        <DiIcons.DiGithub
                            className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-50'
                            style={{top: '95%', left: '85%', transform: 'translate(-40%, -40%)'}}
                        />
                    </a>
                </div>
                <div className='text-center mt-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-white'>Personal Website</h2>
                    <h4 className='text-md sm-text-lg text-slate-400 mt-2'>Tech Stack:</h4>
                    <div className='flex justify-center mt-2'>
                <span className='inline-block text-neutral-50 mr-2'>
                  <DiIcons.DiReact size={50}/>
                </span>
                        <span className='inline-block text-neutral-50 mr-2'>
                  <SiIcons.SiCss3 size={50}/>
                </span>
                        <span className='inline-block text-neutral-50'>
                  <SiIcons.SiNodedotjs size={50}/>
                </span>
                        <span className='inline-block text-neutral-50'>
                    <SiIcons.SiHtml5 size={50}/>
                </span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/4 p-2'>
                <div className='relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
                     style={{
                         backgroundImage: `url(${catImage})`,
                         backgroundSize: 'contain',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         height: '300px'
                     }}
                >
                    <a href='https://github.com/paapa-kusi/CatvsDogApp' target='_blank' rel='noopener noreferrer'>
                        <DiIcons.DiGithub
                            className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-50'
                            style={{top: '95%', left: '85%', transform: 'translate(-40%, -40%)'}}
                        />
                    </a>
                </div>
                <div className='text-center mt-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-white'>Cat Vs. Dog Detection</h2>
                    <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
                <span className='inline-block text-neutral-50 mr-2'>
                    <DiIcons.DiSwift size={50}/>
                </span>
                </div>
            </div>

            <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-2'>
                <div className='relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
                     style={{
                         backgroundImage: `url(${rps})`,
                         backgroundSize: 'contain',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         width: '300px',
                         height: '300px'
                     }}
                >
                    <a href="https://github.com/paapa-kusi/RPS" target="_blank" rel="noopener noreferrer">
                        <DiIcons.DiGithub
                            className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-50'
                            style={{top: '95%', left: '85%', transform: 'translate(-40%, -40%)'}}
                        />
                    </a>
                </div>
                <div className='text-center mt-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-white'>Rock, Paper, Scissors</h2>
                    <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
                    <span className='inline-block text-neutral-50'>
              <DiIcons.DiSwift size={50}/>
            </span>
                </div>
            </div>

            <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/5 p-2'>
                <div className='relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
                     style={{
                         backgroundImage: `url(${mnist})`,
                         backgroundSize: 'contain',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         height: '300px'
                     }}
                >
                    <a href="https://github.com/paapa-kusi/digit-classifier" target="_blank" rel="noopener noreferrer">
                        <DiIcons.DiGithub
                            className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-50'
                            style={{top: '95%', left: '85%', transform: 'translate(-40%, -40%)'}}
                        />
                    </a>
                </div>
                <div className='text-center mt-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-white'>Digit Classifier</h2>
                    <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
                    <span className='inline-block text-neutral-50'>
              <DiIcons.DiPython size={50}/>
            </span>
                    <span className='inline-block text-neutral-50'>
                <SiIcons.SiTensorflow size={50}/>
            </span>
                    <span className='inline-block text-neutral-50'>
                <SiIcons.SiNumpy size={50}/>
            </span>
                </div>
            </div>

            <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/5 p-2'>
                <div className='relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
                     style={{
                         backgroundImage: `url(${game})`,
                         backgroundSize: 'contain',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         height: '300px'
                     }}
                >
                    <a href="https://github.com/mfahd308/P3-template" target="_blank" rel="noopener noreferrer">
                        <DiIcons.DiGithub
                            className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-50'
                            style={{top: '95%', left: '85%', transform: 'translate(-40%, -40%)'}}
                        />
                    </a>
                </div>
                <div className='text-center mt-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-white'>Game Search Engine</h2>
                    <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
                    <span className='inline-block text-neutral-50'>
                    <DiIcons.DiPython size={50}/>
                </span>
                </div>
            </div>

            <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/5 p-2'>
                <div className='relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
                     style={{
                         backgroundImage: `url(${chat})`,
                         backgroundSize: 'contain',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         height: '300px'
                     }}
                >

                </div>
                <div className='text-center mt-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-white'>Basic Chat App</h2>
                    <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
                    <span className='inline-block text-neutral-50'>
                    <SiIcons.SiNodedotjs size={50}/>
                </span>
                    <span className='inline-block text-neutral-50'>
                    <SiIcons.SiSocketdotio size={50}/>
                </span>
                    <span className='inline-block text-neutral-50'>
                    <SiIcons.SiExpress size={50}/>
                </span>
                    <span className='inline-block text-neutral-50'>
                    <SiIcons.SiMongodb size={50}/>
                </span>
                    <span className='inline-block text-neutral-50'>
                    <SiIcons.SiHtml5 size={50}/>
                </span>
                </div>
            </div>

            <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/5 p-2'>
                <div className='relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
                     style={{
                         backgroundImage: `url(${objecttfjs})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         height: '300px'
                     }}
                >
                    <a href="https://github.com/paapa-kusi/object-detection-tfjs" target="_blank" rel="noopener noreferrer">
                        <DiIcons.DiGithub
                            className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-50'
                            style={{top: '95%', left: '85%', transform: 'translate(-40%, -40%)'}}
                        />
                    </a>
                </div>
                <div className='text-center mt-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-white'>Object Detection w/ JS</h2>
                    <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
                <span className='inline-block text-neutral-50'>
                    <SiIcons.SiJavascript size={50}/>
                </span>
                <span className='inline-block text-neutral-50'>
                    <SiIcons.SiTensorflow size={50}/>
                </span>
                <span className='inline-block text-neutral-50'>
                    <SiIcons.SiHtml5 size={50}/>
                </span>
                <span className='inline-block text-neutral-50'>
                    <SiIcons.SiCss3 size={50}/>
                </span>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Projects
