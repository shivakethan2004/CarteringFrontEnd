import React, { useEffect, useState } from "react";
import backgroudImg from "../../utility/catringimage2.png";
import icon from "../../utility/logo2.png";
import menu from "../../utility/menu.png";
import { delay, easeInOut, easeOut, motion } from "motion/react";
import SelectPackage from "../Packages/SelectPackage";
import Contact from "../Contact/Contact";
import { InView } from "react-intersection-observer";
import WithIntersectionObserver from "../../utils/withIntersectionObserver";
import Review from "../Contact/Review";
import Moveavableicon from "../../utils/moveavableicon";
import { useNavigate } from "react-router-dom";
import About from "../about/About";
import Menu from "../../utils/Menu";
const HomePage = () => {
  const [appear, setAppear] = useState(false);
  const navigate = useNavigate();
  const [isInView, setIsInView] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 1000);
  }, []);
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
  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add empty dependency array
  const handleMenu = () => {
    setMenuClicked(!menuClicked);
  };
  const handleScroll = () => {
    // Trigger the callback when scrolled more than 100px
    if (window.scrollY > 100) {
      setMenuVisible(true);
      setMenuClicked(false);
    } else {
      setMenuVisible(false);
    }
  };
  return (
    <>
      <main
        className="h-screen w-screen relative overflow-auto scrollbar-hide bg-transparent 
      "
      >
        {menuVisible && (
          <Menu handleMenu={handleMenu} menu={menu} menuClicked={menuClicked} ></Menu>
        )}

        <img
          className={`h-screen w-screen object-cover absolute z-[-1] 
                     transition duration-700 
                    ${appear ? "brightness-[50%]" : "brightness-[100%]"}`}
          src={backgroudImg}
          alt="Background"
        />

        {!isSmallScreen &&<nav>
          <ul
            className={`flex text-white items-center justify-center font-jetBrains transition-opacity duration-600 gap-10 ${
              appear ? "opacity-100" : "opacity-0"
            }`}
          >
            <Moveavableicon>
              <motion.li
                // Start off-screen to the left
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: appear ? 0 : 100,
                }}
                // animate={{ x: appear ? 0 : 100 }} // Animate in and outs
                transition={{ duration: 0.6 }}
                onClick={() => {
                  navigate("/Events");
                }}
              >
                Services
              </motion.li>
            </Moveavableicon>
            <Moveavableicon>
              <motion.li
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: appear ? 0 : 100,
                }}
                // animate={{ x: appear ? 0 : 100 }} // Animate in and outs
                transition={{ duration: 0.6 }}
              >
                Packages
              </motion.li>
            </Moveavableicon>

            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: appear ? 0 : -100,
              }}
              // animate={{ y: appear ? 0 : -100 }} // Animate in and outs
              transition={{ duration: 0.6 }}
              src={icon}
              alt="logo"
            />
            <Moveavableicon>
              <motion.li
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: appear ? 0 : -100,
                }}
                // animate={{ x: appear ? 0 : -100 }} // Animate in and outs
                transition={{ duration: 0.6 }}
              >
                About
              </motion.li>
            </Moveavableicon>
            <Moveavableicon>
              <motion.li
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: appear ? 0 : -100,
                }}
                // animate={{ x: appear ? 0 : -100 }} // Animate in and outs
                transition={{ duration: 0.6 }}
              >
                Contact
              </motion.li>
            </Moveavableicon>
          </ul>
        </nav>}
        <div className="flex ">
          <div className=" w-[50%] flex flex-col gap-5 pl-[4%] mt-8 ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{
                x: appear ? 0 : -100,
                opacity: appear ? 1 : 0,
              }}
              // animate={{ x: appear ? 0 : -100, opacity: appear ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white md:text-[40px] text-2xl font-jetBrains"
            >
              {" "}
              Experience Culinary Excellence with{" "}
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                x: appear ? 0 : -100,
                opacity: appear ? 1 : 0,
              }}
              // animate={{ x: appear ? 0 : -100, opacity: appear ? 1 : 0 }}
              transition={{ duration: 0.9, delay: 1.5 }}
              className=" md:text-[66px] bg-gradient-to-r from-[#9E800A] via-[#EDBD04] to-[#9E800A] text-transparent bg-clip-text font-junge"
            >
              VEERABHADRA CATERING{" "}
            </motion.p>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{ x: appear ? 0 : -100, opacity: appear ? 1 : 0 }}
              transition={{ duration: 0.9, delay: 1.5 }}
              className="text-white text-[26px] uppercase font-jetBrains"
            >
              at veerabhadra catering, we craft unforgettable dining experiences
              tailored to your unique events{" "}
            </motion.span>
          </div>
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: appear ? 0 : "100%",
            }}
            transition={{
              duration: 0.9,
            }}
            className="w-[50%] flex justify-center items-center"
          >
            <button className="p-10 text-2xl text-white backdrop-blur-sm hover:bg-gradient-to-r from-[#9E800A] via-[#EDBD04] to-[#9E800A] hover:text-transparent hover:bg-clip-text">
              BOOK NOW
            </button>
          </motion.div>
        </div>
      </main>
      <WithIntersectionObserver>
        <SelectPackage></SelectPackage>
      </WithIntersectionObserver>

      <WithIntersectionObserver>
        <Contact></Contact>
      </WithIntersectionObserver>

      <Review />
      <About></About>
    </>
  );
};

export default HomePage;
