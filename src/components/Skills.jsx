
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./skills.css";
import { Pagination, Navigation } from "swiper";
import HTML from '../assets/html.png.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascrip.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import express from "../assets/Expressjs.png"
import PHP from "../assets/PHP.png"
import redux from "../assets/Redux.png"
import postgresql from "../assets/postgresql.jpg"
import git from "../assets/git-3.png"
import vercel from "../assets/vercel.png"
import heroku from"../assets/Heroku.png"
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#FFFFFF] text-black'>
    
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>Tecnologias con las que he trabajado</p>
          </div>

    
      <Swiper
        slidesPerView={3}
      
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={HTML} alt="html" className="fondo"/></SwiperSlide>
        <SwiperSlide><img src={CSS} alt="CSS"/></SwiperSlide>
        <SwiperSlide><img src={JavaScript} alt="JS"/></SwiperSlide>
        <SwiperSlide><img src={ReactImg} alt="REACT"/></SwiperSlide>
        <SwiperSlide><img src={Node} alt="NODE"/></SwiperSlide>
        <SwiperSlide><img src={redux} alt="REDUX"/></SwiperSlide>
        <SwiperSlide><img src={PHP} alt="PHP"/></SwiperSlide>
        <SwiperSlide><img src={express} alt="express"/></SwiperSlide>
        <SwiperSlide><img src={postgresql} alt="postgresql" className="fondo"/></SwiperSlide>
        <SwiperSlide><img src={GitHub} alt="github"/></SwiperSlide>
        <SwiperSlide><img src={git} alt="git" className="fondo"/></SwiperSlide>
        <SwiperSlide><img src={vercel} alt="vercel"/></SwiperSlide>
        <SwiperSlide><img src={heroku} alt="heroku"/></SwiperSlide>
        <SwiperSlide><img src={Tailwind} alt="tailwind"/></SwiperSlide>


      </Swiper>
    
      </div>
    </div>
  );
};

export default Skills;
