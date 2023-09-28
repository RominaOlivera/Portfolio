import React from 'react'
import "./contact.css"

import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";




const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2dwwj5x",
        "template_eap3cud",
        formRef.current,
        "V7-V3C50BKhPhP2TC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      )
  
  };

  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>

          <form className='flex flex-col max-w-[600px] w-full' ref={formRef} onSubmit={handleSubmit}>
          <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contacto</p>
                <p className='py-4 text-xl'>
Complete el formulario a continuación o vía correo electrónico: Oliveraromina27@gmail.com</p>
            </div>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nombre" required name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Asunto" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" required name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensaje" required name="message" />
            <button>Enviar</button>
            {done && "Su mensaje ha sido enviado. Muchas gracias!"}
          </form>
    </div>
  )
}

export default Contact;