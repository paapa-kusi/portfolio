import React from 'react';

const AboutMe = () => {
  return (
    <div
      className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto bg-cover bg-center relative h-60 md:h-70 lg:h-96 overflow-clip"
      style={{ backgroundImage: `url()`, backgroundPosition: 'left 40% top 30%', height: '50vh' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center z-20">
            <div
                className="text-white text-base sm:text-xl md:text-lg lg:text-xl w-full max-w-2xl p-4 bg-opacity-75 bg-black border-2 sm:border-4 border-[#0021A5] rounded-lg"
            >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                    Hey there! I'm Paapa Kusi, a student with a passion for tech and a strong curiosity for
                    problem-solving. As a Computer Science and Economics major at the University of Florida, I'm
                    constantly exploring innovative ideas at the intersection of technology and analytical thinking.
                    Whether it’s building apps, diving into machine learning, or experimenting with web development, I’m
                    driven by a desire to create tools that make life a little easier (and more fun) for everyone.
                    <br /> <br />Beyond academics, I enjoy collaborating with peers through organizations like the National Society of Black Engineers and the Society of Asian Scientists and Engineers, where I’ve honed my skills in leadership, teamwork, and community-building. I'm also an advocate for bridging education with technology, as reflected in my minor in Educational Technology.
                    <br /> <br />At my core, I'm someone who thrives on learning, sharing, and growing – always with a focus on making a meaningful impact.
                </p>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;
