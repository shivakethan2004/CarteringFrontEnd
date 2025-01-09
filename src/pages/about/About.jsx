import React from 'react'
import { motion } from 'framer-motion';
const About = () => {
  return (
    <motion.div 
    
    className='w-screen h-fit bg-orange-900 flex flex-col justify-center items-center font-jetBrains text-black mt-10 bg-opacity-50 backdrop-blur-md'>About
    <h1 className='font-bold text-3xl font-jetBrains'>Location: HYDERABAD , TELANGANA, INDIA</h1>
    <h4>Contact: 999-888-666</h4>
    <span>Email : shivakethan2004@gmail.com</span>

    </motion.div>
  )
}

export default About