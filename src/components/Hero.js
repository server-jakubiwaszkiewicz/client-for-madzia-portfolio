import React from 'react';
import BackgroundCircles from './BackgroundCircles';
import { useRef } from 'react';

function Hero({ photo, name }) {

    const windowWidth = useRef(window.innerWidth);
    return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
          <img
          src={photo}
          className='relative rounded-lg h-40 w-40 mx-auto object-cover'
          alt=''
          />
        <div className='z-20'>
        <h2 className='
            text-4xl
            font-light
            pb-10
          '>
            {name}
          </h2>
          {windowWidth.current > 768 ? <h2 className=' text-sm uppercase pb-2 tracking-[15px]'>Architect | Make-up Artist | Designer</h2> : <h2 className=' text-sm uppercase pb-2 tracking-[15px]'>Architect<br/>Make-up Artist<br/>Designer</h2> }
          <div className='pt-5'>
            <a href="#about">
              <button className='heroButton'>About</button>
            </a>
            <a href="#experience">
              <button className='heroButton'>Experience</button>
            </a>
            <a href="#projects">
              <button className='heroButton'>Projects</button>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Hero;