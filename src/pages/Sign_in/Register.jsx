import React from "react";
import styled from "styled-components";
import Background from "../../utility/Register/background.png";
import Logo from "../../utility/Register/logo.png";
export default function Register() {
  return (
    <Register_MainContainer>
      <div className=" Register-heading">
        <img className="backgroundImg" src={Background} alt="" />
        <div className="Register-body">
          <div className="logo">
            <img className="Logo" src={Logo} alt="" />
          </div>

          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone no"/>

          <div className="buttons">
    <button className="signup">signup</button>
    <h1>OR</h1>
    <button className="signup">Login</button>
          </div>
        </div>
      </div>
    </Register_MainContainer>
  );
}

const Register_MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .Register-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .backgroundImg {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(3px);
  }
  .Register-body {
    .logo {
      width: 250px;
      height: 250px;
      background-color: #0f0f0f;
      border-radius: 50%;
    }
    display: flex;
    z-index: 1;
gap: 2rem;
    flex-direction: column;

    input {
      padding: 1rem;
      border-radius: 3rem;
      border: none;
      outline: none;
      font-size: larger;
    }
    .buttons{
      display: flex;
      justify-content: space-evenly;
      .signup{
        padding: 1rem;
        border-radius: 3rem;
        border: none;
        outline: none;
        font-size: large;
      
      }
      .signup:hover{
        background-color: green;
      }
    }
  }
`;
