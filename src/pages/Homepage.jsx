import React, { useState, useEffect , useRef} from "react"; // Include useEffect
import styled , {css}from "styled-components";
import image1 from "../utility/image.png";
import homeIcon from "../utility/home.png";
import contactIcon from "../utility/contact.png";
import packageIcon from "../utility/package.png";
import aboutIcon from "../utility/about.png";
import menuIcon from "../utility/menu.png";
import menuClose from "../utility/menuclose.png";
import marraige_out from "../utility/marriage_out.png";
import marraige_in from "../utility/marriage_in.png";
import corporate_out from "../utility/coperate_out.png"
import corporate_in from "../utility/coperate_in.png"
import private_out from "../utility/private_out.png"
import private_in from "../utility/private_in.png"
import { useNavigate } from "react-router-dom";

import './Home.css'



export default function Homepage() {
  const Navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700); 
  const [ visibility, setVisibility] = useState({
    image : false, 
  
  })
  const refs = {
    imageRef: useRef(),
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
  };
  useEffect(() =>{
    const observer = new IntersectionObserver(
      (entries) =>{
        entries.forEach((entry) =>{
          const targetName = entry.target.dataset.name;
          const isVisible = entry.isIntersecting;
          setVisibility((prev) =>({
            ...prev,
            [targetName]:{
              isVisible
            }
          }))
        })
      }, {threshold:0.1}
    );
    Object.values(refs).forEach(ref =>{
      if(ref.current) observer.observe(ref.current)
    });
  return () => observer.disconnect
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const handleClick= () =>{
    Navigate('/bookNow')
  }
  return (
    <Main_Container>
      <Header>
        {!isMobile && <h1>VEERABHADRA CATERING</h1>}{" "}
        <IconContainer>
          <img src={image1} alt="Icon 1" />
        </IconContainer>
        {isMobile && <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img
                src={menuIcon}
                alt="open"
                className={isMenuOpen === false ? 'visible' : 'hidden'}
              />
              <img
                src={menuClose}
                alt="close"
                className={isMenuOpen === true ? 'visible' : 'hidden'}
              />
        </MenuButton>}
        {isMobile &&<Menu isOpen={isMenuOpen}>
        
          <span>Login</span>
          <span>Home</span>
          <span>About</span>
          <span>Package</span>
          <span>Contact</span>
          
        </Menu>}
        <nav className="middle">
          <ul>
            <li>
              <img src={homeIcon} alt="" />
            </li>
            <li>
              <img src={aboutIcon} alt="" />
            </li>
            <li>
              <img src={packageIcon} alt="" />
            </li>
            <li>
              <img src={contactIcon} alt="" />
            </li>
          </ul>
        </nav>
      </Header>
      <div className="backgroundimg">
      <button onClick={handleClick}> BOOK NOW</button>
      </div>
      <h1 className="Home-heading">Spice up your occasion</h1>

      <ContentPage>
  
      <div data-name="image" ref={refs.imageRef} className={visibility.image.isVisible ? 'visible' : ''}>
    <img className="out" src={marraige_out} alt="" />
    <img className="in" src={marraige_in} alt="" />
    <h1> Marriages</h1>
  </div>
  <div data-name="image" ref={refs.imageRef} className={visibility.image.isVisible ? 'visible' : ''}>
    <img className="out" src={corporate_out} alt="" />
    <img className="in" src={corporate_in} />
    <h1> Corporate Events</h1>
  </div>
  <div data-name="image" ref={refs.imageRef} className={visibility.image.isVisible ? 'visible' : ''}>
    <img className="out" src={private_out} alt="" />
    <img className="in" src={private_in} />
    <h1> Private parties</h1>
  </div>
      </ContentPage>

<HomeAboutPage>
  
</HomeAboutPage>
    </Main_Container>
  );
}

const Main_Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: white;
  

  h1 {
    margin-left: 0.86px;
    margin-top: 17.24px;
    align-items: center;
    padding: 39px;
    display: flex;
    font-family: Jacques Francois;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    font-size: 29.3px;
    width: 374.02px;
    height: 92.21px;
    box-sizing: border-box;
  }

  nav ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin-left: 225px;
    margin-right: 34.11px;

    img {
      margin-top: 33.61px;
      margin-left: 30.16px;
      width: 45.68px;
      height: 43.95px;
    
    }
  }
  @media (max-width: 700px) {
    .middle {
      display: none;
    }
    display: flex;

  justify-content: flex-end;
    gap: 28%; 
  }
`;

const IconContainer = styled.div`
  position: relative;
  width: 128.41px;
  height: 125.82px;
  margin-left: 181.85px;
  
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    @media (max-width: 700px) {
      width: 149px;
      height: 146px;
    }
  }
  @media (max-width: 700px) {
    margin-left: 0;
   
  }
`;

const Menu = styled.nav`
margin-top: 100px;
display: flex; 
flex-direction: column;
position: absolute;
align-items: center;
right: 10px;
background-color: white;
border-radius: 5px;
opacity: ${(props) => (props.isOpen ? 1 : 0)}; 
transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)')}; 
transition: opacity 0.3s ease, transform 0.3s ease; 

span {
  border-radius: 1rem;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #d6d3d3; // Changes background on hover
  }
}

@media (max-width: 700px) {
  width: 30%;
  height: 100%; 
}
`;


const MenuButton = styled.div`

 img {
  position: fixed;
  width: 68px;
  height: 62px;
    margin-top: 31px;
    margin-right:20px; 
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; 
      
  }
  .hidden {
    position: relative;
    opacity: 0; 
    transform: scale(0.8); 
  }

  .visible {
    position: absolute;
    opacity: 1;
    transform: scale(1); 
  }

 
  @media (max-width: 700px) {
    display: flex;
  } 
`;
const transitionEffect = css`
  opacity: 1;
  transform: translateX(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ContentPage = styled.div`
width: auto;
height: 335px;
display: flex;
flex-direction: row;
justify-content: space-evenly;

.out{
  position: absolute;
  border-radius: 50%;
  width: 270px;
  height: 252px;
}
.in{
  position: relative;
  width: 188px;
  height: 198px;
  left: 0%;
  top : 30px
}
@media (max-width: 700px) {

    flex-direction: column;
    align-items: center;
    height: 1000px;
   
  } 
  div{
    ${transitionEffect}
  display: flex; 
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  font-family: jacques Francois;
  @media (max-width: 700px) {

flex-direction: column;
align-items: center;
height: 1000px;

} 
  }
`

const HomeAboutPage = styled.div`
  
`