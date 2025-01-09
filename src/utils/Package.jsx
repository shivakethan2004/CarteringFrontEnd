import React, { useState } from "react";
import { delay, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const Package = ({ children, name, price, img, col }) => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const handleOnClick = () => {
   
      setExpand((prev) => {
        return !prev;
      });
    
   
  };
  const handleClick = (event) => {
    const packageName = event.target.innerText;
    console.log(packageName);
    navigate(`/package/${packageName}`);
  };
  return (
    <main className="flex flex-col justify-end h-fit w-fit overflow-hidden scrollbar-hide rounded-b-2xl shadow-[rgba(0,0,0,0.1)]" 
   
    >
      <div className="flex relative">
        <motion.div
         onMouseEnter={handleOnClick}
         onMouseLeave={handleOnClick} 
          className={`md:flex md:h-[400px] md:w-[250px] ${col} rounded-t-full h-[200px] w-[125px]  `}

          initial={{ y:'100%',opacity:0 }} // Start off-screen to the left
          whileInView={{
            opacity:1,
            y: expand ? 0 : "100px"
          }}
          // animate={{ y: expand ? 0 : "100px" }} // Animate in and outs
          transition={{ duration: 0.6 }}
        >
          <div
            className={`flex flex-col items-center justify-center space-y-2 md:mt-[250px] mt-[150px] text-red-50 transition-opacity duration-600 ${
              expand ? "opacity-100" : "opacity-0"
            } `}
          >
            <button className='hover:bg-transparent hover:scale-110 transform transition-transform duration-300 "' onClick={handleClick}>{name}</button>
            <span className="text-center  ">{children}</span>
            <h3 className="">{price}</h3>
          </div>
        </motion.div>
        <motion.img
          onClick={handleClick}
          onMouseEnter={handleOnClick}
          onMouseLeave={handleOnClick}
          initial={{ y:  "80%" }}
          animate={{
            rotate: expand ? 90 : 0,
            y: expand ? 0 : "40%",
          }}
          transition={{ duration: 0.6 }}
          src={img}
          alt="Example"
          className="md:h-[255px] md:w -[auto] absolute h-[127px]"
        />
      </div>
    </main>
  );
};

export default Package;
