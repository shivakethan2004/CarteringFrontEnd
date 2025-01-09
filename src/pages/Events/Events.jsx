import React, { useState } from "react";
import Eventsutils from "../../utils/Eventsutils";
import right from '../../utility/right-arrow.png';
import left from '../../utility/left-arrow.png';
import CE_bg from '../../utility/events/coperateEvents/middle.png';
import CE_1 from '../../utility/events/coperateEvents/1.png';
import CE_2 from '../../utility/events/coperateEvents/2.png';
import CE_3 from '../../utility/events/coperateEvents/3.png';
import CE_4 from '../../utility/events/coperateEvents/4.png';
import M_bg from '../../utility/events/marraige/middle.png';
import M_1 from '../../utility/events/marraige/1.png';
import M_2 from '../../utility/events/marraige/2.png';
import M_3 from '../../utility/events/marraige/3.png';
import M_4 from '../../utility/events/marraige/4.png'
import P_bg from '../../utility/events/privateParties/middle.png';
import P_1 from '../../utility/events/privateParties/1.png';
import P_2 from '../../utility/events/privateParties/2.png';
import P_3 from '../../utility/events/privateParties/3.png';
import P_4 from '../../utility/events/privateParties/4.png'
import Menu from "../../utils/Menu";


const Events = () => {
  const[clickedRight, setClickedRight] = useState(false)
  const[clickedLeft, setClickedleft] = useState(false)
  const [visible, setVisible] = useState({
    one: true,
    two: false,
    three: false,
  });
  
  const handleRight = () => {
    
    setClickedRight(true)
    setTimeout(() => {
      setVisible((prev) => {
        if (prev.one) return { one: false, two: true, three: false };
        if (prev.two) return { one: false, two: false, three: true };
        if (prev.three) return { one: true, two: false, three: false };
        return prev;
      });
      setClickedRight(false)
    }, 500);
    
  };

  const handleLeft = () => {
    setClickedleft(true)
    setTimeout(() => {
    setVisible((prev) => {
      if (prev.one) return { one: false, two: false, three: true };
      if (prev.two) return { one: true, two: false, three: false };
      if (prev.three) return { one: false, two: true, three: false };
      return prev;
    });
    setClickedleft(false)
  }, 500)
  };

  // Define image objects directly without unnecessary curly braces
  const ImageObject = {
    bg: CE_bg,
    img1: CE_1,
    img2: CE_2,
    img3: CE_3,
    img4: CE_4,
  };

  const ImageObject2 = {
    
    bg: M_bg,
    img1: M_1,
    img2: M_2,
    img3: M_3,
    img4: M_4,
  };

  const ImageObject3 = {
    bg: P_bg,
    img1: P_1,
    img2: P_2,
    img3: P_3,
    img4: P_4,
  };
const clicked = {
  right: clickedRight,
  left: clickedLeft
}
  return (
    <div> 
      {/* Right Button */}
     
      <button 
        onClick={handleRight} 
        className="h-20 w-20 absolute right-5 top-[50%]  bg-white rounded-full "
      >
        <img className="absolute w-10 h-10 top-[25%] left-[30%]" src={right} alt="Right Arrow" />
      </button>

    
    
      <div>
        {visible.one && <Eventsutils col="ADCEDA" name="Corporate Events" img={ImageObject} clicked={clicked} />}
      </div>
      
      <div>
        {visible.two && <Eventsutils col="D6B8A2" name="Marriages" img={ImageObject2} clicked={clicked}/>}
      </div>

      <div>
        {visible.three && <Eventsutils col="B6D674" name="Private Parties" img={ImageObject3} clicked={clicked}/>}
      </div>

      {/* Left Button */}
      {/* <button 
        onClick={handleLeft} 
        className="h-10 w-10 absolute left-5 top-[50%]"
      >
        <img className="absolute w-fit h-fit" src={left} alt="Left Arrow" />
      </button> */}
    </div>
  );
};

export default Events;
