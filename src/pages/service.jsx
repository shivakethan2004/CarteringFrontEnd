import React from 'react';
import styled from 'styled-components';
import image from '../utility/Border.png';

export default function Service() {
    return (
        <ServiceContainer>
            <h1>SERVICES</h1>
            <ServiceContent>
                <p>From weddings and corporate events to private parties, our team delivers delicious food and impeccable service to make your event unforgettable. We handle everything, so you can enjoy every moment.</p>
            </ServiceContent>
        </ServiceContainer>
    );
}

const ServiceContainer = styled.div`
    background-color: #f98866;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px; 
    
`;

const ServiceContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-image: url(${image});
    background-size: contain;
    background-repeat: no-repeat;
    height: 500px;
    width: 303px;
    clip-path: inset(3% 7% 7% 7%);
    

    p{
      margin-left: 30px;
      margin-right: 30px;
    }
    

`;
