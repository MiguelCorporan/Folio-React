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
    /* letter-spacing: 4px;
    word-spacing: 10px;
    line-height: 20px; */
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

  .htm {
    font-size: 2.5rem;
  }

  .css {
    font-size: 2.5rem;
  }

  .js {
    font-size: 2.5rem;
  }

  .rea {
    font-size: 2.5rem;
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

  @media screen and (min-width: 1600px) {
    .title {
      font-size: 2.5rem;
    }

    img {
      width: 150px;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.3rem;
    }

    .htm {
      font-size: 4rem;
    }

    .css {
      font-size: 4rem;
    }

    .js {
      font-size: 4rem;
    }

    .rea {
      font-size: 4rem;
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
        <AiFillHtml5 className="htm" color="#E44D26" />
        <DiCss3 className="css" color="#264de4" />
        <TbBrandJavascript className="js" color="#f0db4f" />
        <DiReact className="rea" color="#61DBFB" />
      </div>
    </AboutStyled>
  );
};

export default About;
