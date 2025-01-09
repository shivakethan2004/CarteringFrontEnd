import React, { useState } from "react";
import { motion } from "framer-motion";
import cheficon from "../../utility/cheficon.png";
const ContactSmall = () => {
  const [clicked, setclicked] = useState(false);
  return (
    <div className="w-screen h-fit mt-10">
      <div className="flex items-center justify-center ">
        <motion.div className="w-[40%] h-[400px] border-[3px] border-black rounded-full relative flex flex-row ">
          <motion.div
            initial={{
              y: "100%",
              height: "50%",
              scale: 1,
            }}
            animate={{
              y: clicked ? 0 : "100%",

              //   height: clicked ? ["50%", "20%", "50%"] : ["49%", "20%", "50%"],
            }}
            transition={{
              duration: 1,
            }}
            className={`w-full border-[4px] border-white h-[50%] rounded-full bg-gray-950 absolute flex flex-col items-center justify-center gap-4`}
            onClick={() => setclicked(!clicked)}
          >
            <div>
              {clicked ? (
                <h1 className="text-white font-jetBrains text-lg">
                  Contact Us
                </h1>
              ) : (
                <h1 className="text-white font-jetBrains text-lg">
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
              <motion.div className="h-[60%] bg-slate-200 w-[60%] rounded-full flex justify-center items-center bg-opacity-50">
                <motion.div
                  className="absolute h-20 bg-white w-20 rounded-full flex justify-center items-center bg-opacity-100"
                  animate={false}
                >
                  <img
                    className="h-[30%] w-[30%]"
                    src={cheficon}
                    alt="Chef Icon"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {clicked ? (
            <motion.div
              className="flex flex-col absolute  bottom-[40%] left-[10%] w-[80%] items-center   "
              initial={{
                y: 0,
              }}
              animate={{
                y: "100%",
                opacity: clicked ? [1, 0, 0, 1] : null,
              }}
              transition={{
                duration: 1,
              }}
            >
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="font-junge text-sm">
                  Let's Plan Your Perfect Event
                </h1>
                <button className="bg-black text-white rounded-full transition-transform duration-300 hover:scale-110 w-full h-auto p-2 ">
                  Inquire
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col absolute top-10 left-[10%] w-[80%] items-center "
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
                opacity: [0, 0, 0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="font-junge  text-sm ">
                  Want to CheckOut the Packages ?
                </h1>

                <button className="bg-black text-white rounded-full w-full transition-transform duration-300 h-auto hover:scale-110 text-sm p-4 ">
                  CheckPackage
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSmall;
