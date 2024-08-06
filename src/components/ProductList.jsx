import "./productList.css";
import React from 'react';
import HTML from '../assets/html.png.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascrip.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import express from "../assets/Expressjs.png"
import reactNative from "../assets/reactNative.png"
import postgresql from "../assets/postgresql.jpg"
import git from "../assets/git-3.png"
import vercel from "../assets/vercel.png"
import heroku from "../assets/Heroku.png"
import GitHub from '../assets/github.png';
import Tailwind from "../assets/tailwind.png"
import Illu from "../assets/Illustrator.png"
import Photo from "../assets/photo.png"
import My from "../assets/MySQL.svg.png"
import Ts from "../assets/Typescript.svg.png"
import Vtex from "../assets/VTEX.png"
import Next from "../assets/nextjs.png"
import Sass from "../assets/sass.png"


const ProductList = () => {
    return (
        <div name='skills' className='w-full h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4 text-xl'>Tecnologias con las que he trabajado</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={HTML} alt="HTML icon" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={CSS} alt="CSS" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={JavaScript} alt="JS" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-40' src={ReactImg} alt="React" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20' src={Ts} alt="Ts" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20' src={Vtex} alt="Vtex" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20' src={GitHub} alt="Github" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20' src={Next} alt="Next" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20' src={Node} alt="Node" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20' src={postgresql} alt="PostgreSQL" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-40' src={express} alt="Express" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={reactNative} alt="React Native" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={git} alt="Git" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-40' src={vercel} alt="Vercel" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-40' src={heroku} alt="Heroku" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={Tailwind} alt="Tailwind" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={Sass} alt="Sass" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={Illu} alt="Illu" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={Photo} alt="Photoshop" />
                        <p className='my-4'></p>
                    </div>
                    <div className='flex items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20'>
                        <img className='w-20' src={My} alt="My" />
                        <p className='my-4'></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;