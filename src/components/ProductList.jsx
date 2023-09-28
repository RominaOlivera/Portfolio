import "./productList.css";
import React from 'react';
import HTML from '../assets/html.png.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascrip.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import express from "../assets/Expressjs.png"
import reactNative from "../assets/reactNative.png"
import redux from "../assets/Redux.png"
import postgresql from "../assets/postgresql.jpg"
import git from "../assets/git-3.png"
import vercel from "../assets/vercel.png"
import heroku from"../assets/Heroku.png"
import GitHub from '../assets/github.png';
import Tailwind from "../assets/tailwind.png"
import Illu from "../assets/Illustrator.png"
import Photo from "../assets/photo.png"
import My from "../assets/MySQL.svg.png"


const ProductList = () => {
  return (
    <div name='skills' className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4 text-xl'>Tecnologias con las que he trabajado</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                  <img className='w-20  mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                  <img className='w-40 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={postgresql} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={express} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                  <img className='w-20 mx-auto' src={reactNative} alt="HTML icon" />
                  <p className='my-4'></p>
              </div> <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                  <img className='w-20 mx-auto' src={git} alt="HTML icon" />
                  <p className='my-4'></p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                  <img className='w-40 mx-auto' src={vercel} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={heroku} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />

                  <p className='my-4'></p>
              </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Illu} alt="HTML icon" />
                  <p className='my-4'></p>
              </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Photo} alt="HTML icon" />
                  <p className='my-4'></p>
              </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={My} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default ProductList;