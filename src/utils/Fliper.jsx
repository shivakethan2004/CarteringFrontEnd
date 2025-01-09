import React, { useState } from 'react';
import review from '../utility/review.png';
import { motion } from 'framer-motion';

const Flipper = ({ name, text, img}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-64 h-80" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100, // Springiness
          damping: 20,    // Control bounce
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onMouseMove={()=>setIsFlipped(true)}
        onMouseOut={() => setIsFlipped(false)}
        onClick={()=>setIsFlipped(!isFlipped)}
      
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full border-2 border-black rounded-3xl shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-4">
            <h3 className="text-xl font-bold mb-2 font-junge ">{name}</h3>
            <img className = 'h-[80%] object-cover w-[80%] rounded-full' src={img} alt="" />
            <img src={review} alt="review" />
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full border-2 border-black bg-white rounded-3xl shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-4">
            <p className="text-black font-junge text-2xl text-center">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flipper;
