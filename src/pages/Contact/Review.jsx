import React from 'react'
import review from '../../utility/review.png'
import shivaimg from '../../utility/reviews/image-shiva.jpg'
import sourabhimg from '../../utility/reviews/sourabh.png'
import shashankimg from '../../utility/reviews/shashank.png'


import { motion } from 'framer-motion';
import Flipper from '../../utils/Fliper';
const Review = () => {
  return (
    <div className='h-fit w-screen flex justify-center gap-20 flex-col space-y-20'>
      <motion.div 
      initial={{
        opacity:0,
        y:'100%'
      }
      }
      whileInView={{
        opacity :1
      }}
    
      transition={{
        duration:'0.6',
        delay:'0.5'
      }}
      className='md:flex-2 md:ml-20 md:items-start flex flex-col justify-center items-center' >
        <div className='flex justify-center flex-col'>
        <h1 className='font-junge text-5xl'>Client Feedback</h1>
        <p>Their services made our events truly unforgettable!</p>
        </div>
        
      </motion.div>
      <motion.div 
      initial= {{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
       animate={{
        
      }}
      transition={{
        delay:'0.6',
        duration:'1'
      }}
      className=' flex-1 flex md:flex-row justify-center items-center w-screen md:gap-[5%] space-y-2 flex-col '>
       
        <Flipper  name='Shiva' text= '"The food was exquisite and the staff exceptional"' img = {shivaimg}></Flipper>
        <Flipper  name='Shashank' text= '"The food was exquisite and the staff exceptional"' img = {shashankimg}></Flipper>
        <Flipper  name='Sourabh' text= '"Mazza aagaya FOOD !!"' img = {sourabhimg}></Flipper>
       
      </motion.div>
     
    </div>
  )
}

export default Review