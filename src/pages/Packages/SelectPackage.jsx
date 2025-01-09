import React, { useState } from "react";
import Pak_back from "../../utility/packages/plate.png";
import Pak_back2 from "../../utility/packages/plate2.png";
import Pak_back3 from "../../utility/packages/plate3.png";
import Package from "../../utils/Package";

const SelectPackage = ({ isInView }) => {
  const [color, setColor] = useState("bg-gradient-to-b from-[#050505] via-[#050505] to-[#050505]");

  const handleClick = (col) => {
    setColor(col);
  };

  return (
    <main className="h-fit w-screen flex flex-col overflow-auto">
      <div className="flex justify-center items-center flex-1 mt-20 ">
        <h1
          className={`font-junge text-[35.67px] text-center gradient-text ${color}  transition-colors duration-75 ease-in-out 
          `}
        >
          Discover the exceptional features of our catering services for every
          OCCASION
        </h1>
      </div>

      <div className="md:flex md:flex-row md:justify-evenly flex-2 flex flex-col items-center justify-center">
        <div
          onMouseEnter={() =>
            handleClick(
              "bg-gradient-to-r from-[#B050BB] via-[#B852C4] to-[#502555]"
            )
          }
          onMouseLeave={()=>{
            setColor('bg-gradient-to-b from-[#050505] via-[#050505] to-[#050505]')
          }}
        >
          <Package
            name="Naivedyam"
            price="100-120"
            img={Pak_back}
            col="bg-gradient-to-b from-[#B050BB] via-[#B852C4] to-[#502555]"
          >
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              tempore.
            </h1>
          </Package>
        </div>
        <div
          onMouseEnter={() =>
            handleClick(
              "bg-gradient-to-b from-[#D8CB73] via-[#F2E699] to-[#726B3D]"
            )
          }
          onMouseLeave={()=>{
            setColor('bg-gradient-to-b from-[#050505] via-[#050505] to-[#050505]')
          }}
        >
          <Package
            name="Bhojyam"
            price="100-120"
            img={Pak_back2}
            col="bg-gradient-to-b from-[#D8CB73] via-[#F2E699] to-[#726B3D]"
          >
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              tempore.
            </h1>
          </Package>
        </div>
        <div
          onMouseEnter={() =>
            handleClick(
              "bg-gradient-to-b from-[#FF10F3] via-[#F194EC] to-[#990992]"
            )
          }
          onMouseLeave={()=>{
            setColor('bg-gradient-to-b from-[#050505] via-[#050505] to-[#050505]')
          }}
        >
          <Package
            name="Panchabaksham"
            price="100-120"
            img={Pak_back3}
            col="bg-gradient-to-b from-[#FF10F3] via-[#F194EC] to-[#990992]"
          >
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              tempore.
            </h1>
          </Package>
        </div>
      </div>
    </main>
  );
};

export default SelectPackage;
