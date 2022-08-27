import React from "react";
import styled, { keyframes } from "styled-components";

const btn11 = keyframes`
  0% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    80% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }
    81% {
      -webkit-transform: scale(4) rotate(45deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(50) rotate(45deg);
      opacity: 0;
    }
`;

const SBStyled = styled.button`
  .custom-btn {
    width: 4.5rem;
    height: 40px;
    color: #fff;
    /* padding: 10px 25px; */
    font-family: "Lato", sans-serif;
    font-weight: 500;
    background: transparent;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
  }

  .btn-11 {
    border: none;
    background-color: #338b9c;
    background: linear-gradient(0deg, #338b9c 0%, #338b9c 100%);
    color: #fff;
    overflow: hidden;
  }
  .btn-11:hover {
    text-decoration: none;
    color: #fff;
  }
  .btn-11:before {
    position: absolute;
    content: "";
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: 3s ${btn11} ease-in-out infinite;
  }
  .btn-11:hover {
    opacity: 0.7;
  }
  .btn-11:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;

const SuperButton = ({ children }) => {
  return (
    <SBStyled>
      <button className="custom-btn btn-11">
        {children}
        <div className="dot"></div>
      </button>
    </SBStyled>
  );
};

export default SuperButton;
