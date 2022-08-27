import React, { useContext } from "react";
import styled from "styled-components";
import { BsFillMoonFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import DarkMode from "../components/DarkMode";
import { ThemeContext } from "../components/ThemeContex";
import logo from "../assets/logo.webp";

const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme: { main } }) => main};
  img {
    border-radius: 50%;
    width: 100px;
  }
  .arriba {
    width: 94%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    width: 70%;
    text-align: center;
  }
  .circles {
    display: flex;
  }
  .circle {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 3rem;
    height: 3rem;
    background-color: aqua;
    border-radius: 50%;
  }

  @media screen and (min-width: 600px) {
    .arriba {
      width: 70%;
    }

    p {
      width: 40%;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    .arriba {
      width: 70%;
    }

    p {
      width: 40%;
      text-align: center;
    }
  }

  @media screen and (min-width: 1024px) {
    .arriba {
      width: 50%;
      margin-bottom: 2rem;
    }

    p {
      width: 20%;
      text-align: center;
    }
  }
`;

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AboutStyled className="section" theme={theme}>
      <div className="arriba">
        <h2 className="title">About</h2>
        <DarkMode />
      </div>
      <img src={logo} alt="perfil" />
      <h1>Miguel Corporan</h1>
      <p>
        Soy un desarrollador web enfocado en el área del fronend, con
        experiencia en maquetación y diseño de interfaces web graficas
        adaptables a diferentes tipos de dispositivos brindando así la mejor
        experiencia de usuario posible.
      </p>
      <div className="circles">
        <AiFillHtml5 size="2.5rem" color="#E44D26" />
        <DiCss3 size="2.5rem" color="#264de4" />
        <TbBrandJavascript size="2.5rem" color="#f0db4f" />
        <DiReact size="2.5rem" color="#61DBFB" />
      </div>
    </AboutStyled>
  );
};

export default About;
