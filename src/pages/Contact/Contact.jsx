import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import contactImg from "../../utility/contact1.png";
import Moveavableicon from "../../utils/moveavableicon";
import cheficon from "../../utility/cheficon.png";
import ContactSmall from "./ContactSmall";

const Contact = ({ isInView }) => {
  const [clicked, setClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [clickMe, setClickMe] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 740) {
        setIsSmallScreen(true); // Small screen (sm)
      } else {
        setIsSmallScreen(false); // Larger screens (md and up)
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {!isSmallScreen ? (
        <motion.div
          className="h-screen w-screen flex items-center justify-center "
          initial={{
            opacity: 0,
            y: "100%",
          }}
          animate={{
            y: isInView ? 0 : "10%", // Only animate when in view
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <div
            className="md:w-[80%] md:h-[50%] rounded-full border-4 border-black relative flex items-center   "
            style={{ boxShadow: "inset 5px 0px 5px 9px rgba(0, 0, 0, 0.1)" }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: "100%",
              }}
              animate={{
                y: isInView ? 0 : "5%",
                opacity: isInView ? 1 : 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.5,
              }}
              className={`flex flex-col justify-center md:${
                clicked ? "items-start pl-[50%]" : "items-end pr-[50%]"
              } ml-10 md:gap-4 items-center`}
            >
              {!clicked ? (
                <>
                  <h1 className="font-junge md:text-5xl text-sm">
                    Let's Plan Your Perfect Event
                  </h1>
                  <p>
                    Contact us today to create a customized catering experience
                    that exceeds your expectations.
                  </p>

                  <button className="bg-black text-white rounded-full md:w-[20%] md:h-auto md:text-2xl  transition-transform duration-300 hover:scale-110 w-fit h-auto p-2 ">
                    Inquire
                  </button>
                </>
              ) : (
                <>
                  <h1 className="font-junge md:text-5xl text-sm">
                    Want to CheckOut the Packages ?
                  </h1>
                  <p className="pl-3">
                    There are Many Packages , and customizbl
                  </p>

                  <button className="bg-black text-white rounded-full w-[fit] h-auto md:text-2xl p-2 transition-transform duration-300 hover:scale-110 text-sm">
                    CheckPackage
                  </button>
                </>
              )}
            </motion.div>
            <motion.div
              onClick={() => setClicked(!clicked)}
              // onMouseEnter={ }
              animate={{
                x: isSmallScreen ? 0 : clicked ? 0 : "100%",
                // y: isSmallScreen && !clicked ? 0 : '-100%',
              }}
              transition={{
                duration: 0.6,
                type: "spring", // Type of transition (spring)
                stiffness: 100, // Controls the "springiness"
                damping: 16,
              }}
              className={`md:border-[10px] md:border-white md:[box-shadow:4px_4px_15px_rgba(0,0,0,0.8)] absolute bg-gray-900 rounded-full flex md:flex-col justify-center items-center md:h-[135%] md:w-[51.8%] md:${
                clicked ? "right-0" : "right-[500px]"
              } lg:${clicked ? "top-[34.8%]" : "bottom-0"}`}
              // src={contactImg}
              // alt="Contact" // Add alt tag for better accessibility
            >
              <div>
                {clicked ? (
                  <h1 className="text-white font-jetBrains text-4xl">
                    Contact Us
                  </h1>
                ) : (
                  <h1 className="text-white font-jetBrains text-4xl">
                    Learn More
                  </h1>
                )}
              </div>

              <motion.div
                className="h-[20%] bg-slate-400 w-[20%] rounded-full flex items-center justify-center bg-opacity-20 relative"
                initial={{
                  width: "30%",
                  height: "30%",
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  width: ["30%", "20%", "30%"],
                  height: ["30%", "20%", "30%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <motion.div className="h-[80%] bg-slate-200 w-[80%] rounded-full flex justify-center items-center bg-opacity-50">
                  <motion.div
                    className="absolute h-20 bg-white w-20 rounded-full flex justify-center items-center bg-opacity-100"
                    animate={false}
                  >
                    <img
                      className="h-[90%] w-[90%]"
                      src={cheficon}
                      alt="Chef Icon"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : (
       <ContactSmall/>
      )}
    </div>
  );
};

export default Contact;
