import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import { BsGithub } from 'react-icons/bs';
import{CgWebsite } from "react-icons/cg"
import poke from "../assets/Poke.jpg"
import clinicaAnimalia from "../assets/clinicaAnimalia.jpeg"
import DemoClinica from "../assets/clinicaAnimalia.mp4"
import DemoFree from "../assets/freeStyle - .mp4"
import DemoPoke from"../assets/poke-app.mp4"
import FreeStyle from "../assets/freestyle.jpeg"
import grafo from "../assets/visualizadordegrafo.jpeg"

import "./productList.css";


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full proyect'>
        <div className='pb-8 p'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Mis proyectos
          </p>
          <p className='py-6 text-xl'>Proyectos realizados</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          {/* <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Poke App
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>  */}
          <div
            style={{ backgroundImage: `url(${poke})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Poke app
              </span>
              <div className='pt-8 text-center'>
                <a href={DemoPoke}   target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                   Demo
                  </button>
                 
                </a>
                <a href="https://github.com/RominaOlivera/PI-POKE.git"  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
              
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FreeStyle})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Free Style E-commerce
              </span>
              <div className='pt-8 text-center'>
                <a href={DemoFree}  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/RominaOlivera/front-free-style'  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${clinicaAnimalia})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Clinica Animalia
              </span>
              <div className='pt-8 text-center'>
                <a href={DemoClinica} target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/RominaOlivera/appVeterinaria/tree/master'  target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${grafo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects  */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Visualizador de grafo
              </span>
              <div className='pt-8 text-center'>
                <a href='https://visualizadordegrafo.vercel.app' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/RominaOlivera/visualizador-recorrido-grafo' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           {/* <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            Hover Effects
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>  */}
        </div>
      </div>
    </div>
  );
};

export default Work;
