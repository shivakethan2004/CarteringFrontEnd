import React from 'react';
import styled from 'styled-components';
import image from '../utility/side_pics.png';
import { css } from 'styled-components';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom'

export default function Packages({isVisible}) {
  const [visiblity, setVisibility] = useState(false);
  const[Package, setPackage] = useState('');
  const navigate = useNavigate();
  const handleClick = (event) =>{
    const packageName = event.currentTarget.getAttribute("name"); 
  console.log(packageName); 
  navigate(`/package/${packageName}`);  
  } 
  return (
    <PackageContainer>
      <h1>SELECT YOUR PACKAGE TO YOUR FITTING</h1>
      <ContentContainer>
        <PackageList >
          <PakageCon className={isVisible ?  'visible' : ''} onClick={(event) =>handleClick(event)} name = 'Naivedyam'
          >
            <h3>NAIVEDYAM</h3>
            <a>This package offers a balanced selection of classic Indian flavors with a mix of sweets, snacks, curries, and traditional staples. It’s a simpler, yet satisfying spread that includes essentials like dal, sambar, rice, and curd, complemented by sweet treats, pickles, papad, and fresh salads. A wholesome choice for those seeking a familiar, comfort-food experience.</a>
          </PakageCon>
          <PakageCon className={isVisible ?  'visible' : ''} onClick={(event) =>handleClick(event)} name = 'Bhojyam'>
            <h3>BHOJYAM</h3>
            <a>An expanded offering with a welcoming touch, including a welcome drink, snack, and sweet to start the experience. With additional options in sweets, sprouts, and chaat, this package provides variety while preserving the flavors of traditional Indian dishes. Ideal for gatherings where variety and hospitality are a priority.</a>
          </PakageCon>
          <PakageCon className={isVisible ?  'visible' : ''} onClick={(event) =>handleClick(event)} name = 'Panchabaksham'>
            <h3>PANCHABAKSHAM</h3>
            <a>This package delivers a rich and diverse experience with enhanced options across snacks, sweets, curries, and salads. It features specialty items like Chinese dishes and a variety of chaat, making it perfect for guests who enjoy a wider range of cuisines and flavors. The addition of a fruit stall and sweet paan offers a unique and refreshing conclusion to the meal.</a>
          </PakageCon>
          <PakageCon className={isVisible ?  'visible' : ''} onClick={(event) =>handleClick(event)} name = 'Annapoorna'>
            <h3>ANNAPOORNA</h3>
            <a>A comprehensive selection designed for those seeking a lavish dining experience. This package includes a wide variety of sweets, snacks, and curries, with multiple options in rice and chaat to please every palate. Special inclusions like Dahi Kadi, Mukhwaas, and unique counters for Russian salad and ice cream make this a luxurious choice for larger celebrations.</a>
          </PakageCon>
          <PakageCon className={isVisible ?  'visible' : ''} onClick={(event) =>handleClick(event)} name = 'Akshaya'>
            <h3>AKSHAYA</h3>
            <a>This premium package provides an extensive assortment of dishes, with generous options for sweets, snacks, and Chinese cuisine. It features a full range of traditional curries, special salads, and chaat counters, as well as imported fruits and assorted ice creams. The Akshaya package is an indulgent choice, perfect for those looking to offer their guests a complete, varied, and unforgettable dining experience.</a>
          </PakageCon>
        </PackageList>
        <ImageContainer>
          <img src={image} alt="Catering Packages" />
        </ImageContainer>
      </ContentContainer>
    </PackageContainer>
  );
}
const transitionEffectContent = css`
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.8s ease-out, transform 1s ease-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;
const PackageContainer = styled.div`
  margin-top: 3px;
  background-color: #fcdba0;
  padding: 20px; /* Added padding for better spacing */

  h1 {
    padding: 10px;
    border-radius: 20px;
    border-bottom: black solid;
    margin-bottom: 20px; /* Increased margin for more space */
    text-align: center; /* Center align the heading */
  }
`;

const ContentContainer = styled.div`
  display: flex; /* Enable flexbox */
  align-items: flex-start; /* Align items at the start of the flex container */
`;

const PackageList = styled.div`
  display: flex;
  flex-direction: column; /* Stack packages vertically */
  flex: 1; /* Allow this div to grow */
  margin-right: 20px; /* Space between package list and image
   */
  
`;

const ImageContainer = styled.div`
  flex: 1; /* Allow image container to grow */
  display: flex; /* Enable flexbox */
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
`;

const PakageCon = styled.div`
  padding: 10px;
  border-radius: 3px;
  margin: 5px;
  background-color: #f96639;
  transition: transform 0.3s ease-in-out, opacity 0.8s ease-out;
  transform: scale(0.98);
  ${transitionEffectContent}

  h3 {
    color: white;
    border-bottom: 1px solid black;
    margin-bottom: 3px;
  }
  
  a {
    color: black;
  }
  
  &:hover {
    transform: scale(1);
  }
  
  
  &:nth-of-type(1) {
    transition-delay: 0.1s;
  }
  &:nth-of-type(2) {
    transition-delay: 0.5s;
  }
  &:nth-of-type(3) {
    transition-delay: 0.9s;
  }
  &:nth-of-type(4) {
    transition-delay: 1.4s;
  }
  &:nth-of-type(5) {
    transition-delay: 1.9s;
  }
`;
