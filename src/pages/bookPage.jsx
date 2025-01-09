import React from "react";
import styled from "styled-components";
import "./bookPage.css";
import backgroud from "../utility/bookpage/backgroud.png";
import recomend from "../utility/bookpage/recomend.png";
import customize from "../utility/bookpage/customize.png";
import { useNavigate } from "react-router-dom";
export default function BookPage() {
  const Navigate = useNavigate(); 
  const handleClick = (path) =>{

Navigate(path)
  }
  return (
    <MainContainer>
      
      <div className="main">
        <div className="text">
            <h1 className="heading">Choose your package</h1>
        </div>
        <div className="containerone">
<h1  onClick={() =>handleClick('/SelectPackage')}  name = 'Recommend'>RECOMMEND</h1>
        </div>
        <div className="containertwo">
<h1 onClick={() => handleClick('/Register')} name = 'customise'>
    CUSTOMIZE
</h1>
        </div>
      </div>
      <img className="background" src={backgroud} alt="Image" />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
.main {
    padding-top:5%;
    width: 60%;
    height: 100%;
    background-color: white;
    position: absolute;

    display: flex;
    flex-direction: column;
   gap: 3rem;
    align-items: center;
    font-family: "Lobster Two", sans-serif;
  font-weight: 400; 
  @media (max-width: 700px){
    width: 80%;
    height: 80%;
    border-radius: 2rem;
    justify-content: space-evenly;
  }
  }
  @media (max-width: 700px){
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;
