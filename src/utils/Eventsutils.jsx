import React from "react";
import { delay, motion,  AnimatePresence  } from "framer-motion";

const Eventsutils = ({ col, name, img , clicked}) => {
  // Reusable animation configuration
  const animationConfig = {
    initial: { y: "-250%" , }, // Initial state (off-screen)
    animate: { y:(clicked.right || clicked.left) ? "-250%" : 0 }, // Final state (on-screen)
    transition: {
      delay:(clicked.right || clicked.left) ? 0 : 0.2,
      duration: 0.2, // Duration of the animation
      type: "spring", // Type of transition (spring)
      stiffness: 100, // Controls the "springiness"
      damping: 10, // Controls the bounciness
    },
  };
  return (
    <AnimatePresence>
       <motion.div
      className="h-screen w-screen"
      style={{ backgroundColor: `#${col}` }}
      initial={{
        x :  '1%'
        // clicked.left ? '-100%':'-100%'
      }}
      animate={{
        x :  0
      }}
    
      transition={{
        duration:0.5,
        // delay:1,
        // Duration of the animation
      type: "spring", // Type of transition (spring)
      stiffness: 150, // Controls the "springiness"
      damping: 20,
      }}
    >
      <div className="h-full w-[100vw] flex justify-center items-center flex-col overflow-hidden">
        <motion.img
          {...animationConfig}
          className="absolute top-0 left-0 "
          src={img.img1}
          alt=""
        />
        <motion.img
          {...animationConfig}
          className="absolute top-0 right-0 "
          src={img.img3}
          alt=""
        />
        <motion.img
          {...animationConfig}
          className="absolute bottom-0 left-0"
          src={img.img2}
          alt=""
        />
        <motion.img
          {...animationConfig}
          className="absolute bottom-0 right-0 "
          src={img.img4}
          alt=""
        />

        <motion.img
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: "0.5",
            type: "spring", // Type of transition
            stiffness: 100, // Controls the "springiness"
            damping: 10,
          }}
          src={img.bg}
          className="absolute w-[35%] h-[40%] top-[35%] "
          alt=" "
        />
        <h1 className="font-librebodoni text-[66px] font-semibold">
          Occasions
        </h1>
        <h1 className="font-Koulen uppercase text-center text-white text-[1700%] leading-none absoulte">
          {name}
        </h1>
      </div>
    </motion.div>
    </AnimatePresence>
   
  );
};

export default Eventsutils;
