import React from 'react';
import "./about.css";


const About = () => {
  return (
    <div className="a w-full h-screen todo" name='about'>

      <div className="a-left">

      </div>

      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre mi
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>¡Hola!</p>
          </div>
          <div>
            <p className='text-xl'>Mi nombre es Romina Olivera soy desarrolladora web full stack tengo conocimientos en JavaScript, React, Node, Next js, SQL y TypeScript entre otras.</p>
              
              <p  className='text-xl'>Soy una apasionada por la programación,
              tengo aptitud para trabajar en equipo, crear nuevas ideas en colaboración, aprender nuevas tecnologías y estar constantemente actualizada de las mismas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
