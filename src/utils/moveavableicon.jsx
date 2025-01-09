import React, { useRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";


const Moveavableicon = ({ children, className = "" }) => {
  const componentRef = useRef(null);
  const [compPosition, setCompPosition] = useState({ x: 0, y: 0, h: 0, w: 0 });

  const handleMouseMove = (event) => {
    if (componentRef.current) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      if (
        mouseX < compPosition.x ||
        mouseX > compPosition.x + compPosition.w ||
        mouseY < compPosition.y ||
        mouseY > compPosition.y + compPosition.h
      ) {
        return;
      }

      componentRef.current.style.transform = `translate(${
        mouseX - compPosition.x - compPosition.w / 2
      }px, ${mouseY - compPosition.y - compPosition.h / 2}px)`;
    }
  };

  const getComponentPosition = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      setCompPosition({
        x: rect.x,
        y: rect.y,
        h: rect.height,
        w: rect.width,
      });
    }
  };

  const handleMouseLeave = () => {
    if (componentRef.current) {
      componentRef.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <div
      className={`  cursor-pointer w-fit h-fit ${className} flex justify-center items-center`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={getComponentPosition}
    >
      <div
        ref={componentRef}
        className="p-5"
        style={{
          transition: "transform 0.5s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Moveavableicon;
