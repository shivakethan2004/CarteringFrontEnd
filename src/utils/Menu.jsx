import React from 'react'
import { useEffect , useState} from 'react';
import { delay, easeInOut, easeOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const Menu = ({handleMenu, menu, menuClicked}) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
     const navigate = useNavigate();
     useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 640) {
          setIsSmallDevice(true); // Set to true for small screen sizes
        } else {
          setIsSmallDevice(false); // Set to false for larger screens
        }
      };
  
      handleResize(); // Check on initial render
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.5,
              type: "spring", // Type of transition (spring)
              stiffness: 100, // Controls the "springiness"
              damping: 10,
            }}
            className="fixed right-5 top-10 md:h-20 md:w-20 z-10 h-11 w-11"
            onClick={handleMenu}
          >
            <img
              className="h-fit w-fit z-0 bg-gray-400 bg-opacity-10 rounded-md backdrop-blur-md"
              src={menu}
            />

            <motion.div
              initial={{
                // opacity: 0,
                borderTopLeftRadius: "100%",
                borderButtomLeftRadius: "100%",
                borderTopRightRadius: "50%",
                width: 0,
                height: 0,
                // x : '200%',
                // y : '-200%'
              }}
              animate={{
                // opacity: menuClicked ? 1 : 0,
                borderTopLeftRadius: menuClicked ? "40%" : "100%",
                borderBottomLeftRadius: menuClicked ? "40%" : "100%",
                borderBottomRightRadius: menuClicked ? "40%" : "100%",
                borderTopRightRadius: menuClicked ? "2%" : "5%",

                // x:  menuClicked ? 0 : '200%',
                // y:  menuClicked ? 0 : '-200%',
                width: menuClicked
          ? isSmallDevice
            ? '250px' // Smaller size for small devices
            : '400px' // Default size for larger devices
          : 0,
        height: menuClicked
          ? isSmallDevice
            ? '250px' // Smaller height for small devices
            : '400px' // Default height for larger devices
          : 0,
              }}
              transition={{
                duration: 1,
                transition: easeInOut,
                type: "spring", // Type of transition (spring)
                stiffness: 100, // Controls the "springiness"
                damping: 13,
              }}
              className="h-[400px] w-[300px] bg-gray-400 bg-opacity-50 backdrop-blur-md absolute top-0 z-[-1] right-0 flex justify-center items-center text-white "
            >
              {menuClicked && (
                <ul className="flex flex-col gap-9 uppercase font-jetBrains list-disc text-xl">
                  <li
                    className="transition-transform duration-500 hover:scale-[1.2]"
                    onClick={() => {
                      navigate("/Events");
                    }}
                  >
                    services
                  </li>
                  <li className="transition-transform duration-500 hover:scale-[1.2]">
                    Packages
                  </li>
                  <li className="transition-transform duration-500 hover:scale-[1.2]">
                    About
                  </li>
                  <li className="transition-transform duration-500 hover:scale-[1.2]">
                    Contact
                  </li>
                </ul>
              )}
            </motion.div>
          </motion.div>
  )
}

export default Menu