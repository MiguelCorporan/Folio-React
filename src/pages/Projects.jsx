import React, { useContext } from "react";
import styled from "styled-components";
import DarkMode from "../components/DarkMode";
import { useState } from "react";
import { AiFillPlusCircle, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiMongodb } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { BsEyeFill } from "react-icons/bs";
import { FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import pokapp from "../assets/pokapp.webp";
import por1 from "../assets/por1.webp";
import por2 from "../assets/por2.webp";
import por4 from "../assets/por4.webp";
import por5 from "../assets/por5.webp";
import por7 from "../assets/por7.webp";
import por8 from "../assets/por8.webp";
import TiendajsN from "../assets/TiendajsN.webp";

import { ThemeContext } from "../components/ThemeContex";

const ProjectStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .arriba {
    width: 94%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .proCont {
    max-width: 90%;
    min-height: 18rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 10rem 10rem;
    grid-gap: 0.5rem;
  }

  .cuadros {
    width: 10rem;
    height: 10rem;
    border-radius: 20px;
    background-color: #ffffff;
    transition: transform 0.3s;
    /* outline: 1px solid #000; */
  }

  .none {
    transform: scale(0);
    position: absolute;
  }

  .fot {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .Cimg {
    width: 100%;
    height: 80%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .Ico {
    width: 90%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  .IcoD1 {
    width: 80%;
  }

  @media screen and (min-width: 600px) {
    .arriba {
      width: 70%;
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .arriba {
      width: 70%;
      margin-bottom: 2rem;
    }

    /* .proCont {
      max-width: 90%;
      grid-template-columns: 8rem 8rem;
      background-color: aquamarine;
    } */
  }

  @media screen and (min-width: 1024px) {
    .arriba {
      width: 50%;
      margin-bottom: 2rem;
    }
  }
`;

const Projects = () => {
  const [show, setShow] = useState(false);
  const {
    theme: { Bcolor },
  } = useContext(ThemeContext);
  console.log(Bcolor);
  return (
    <ProjectStyled className="section">
      <div className="arriba">
        <h2 className="title">Projects</h2>
        <DarkMode />
      </div>

      <div className="proCont">
        <div className={`cuadros ${show && "none"}`}>
          <div className="Cimg">
            <img className="fot" src={pokapp} alt="PokeApi" />
          </div>
          <div className="Ico">
            <div className="IcoD1">
              <DiReact size="1.3rem" color="#61DBFB" />
            </div>
            <div className="IcoD2">
              <a href="https://proyecto-pokeapp.netlify.app/" target="_blank">
                <BsEyeFill size="1rem" color="#000" />
              </a>
            </div>
          </div>
        </div>
        <div className={`cuadros ${show && "none"}`}>
          <div className="Cimg">
            <img className="fot" src={por2} alt="TiendaBoostrap" />
          </div>
          <div className="Ico">
            <div className="IcoD1">
              <AiFillHtml5 size="1.3rem" color="#E44D26" />
              <TbBrandJavascript size="1.3rem" color="#f0db4f" />
              <FaBootstrap size="1.3rem" color="#563d7c" />
            </div>
            <div className="IcoD2">
              <a
                href="https://nimble-meerkat-0b48de.netlify.app/"
                target="_blank"
              >
                <BsEyeFill size="1rem" color="#000" />
              </a>
            </div>
          </div>
        </div>
        <div className={`cuadros ${show && "none"}`}>
          <div className="Cimg">
            <img className="fot" src={TiendajsN} alt="TiendaJs" />
          </div>
          <div className="Ico">
            <div className="IcoD1">
              <AiFillHtml5 size="1.3rem" color="#E44D26" />
              <DiCss3 size="1.3rem" color="#264de4" />
              <TbBrandJavascript size="1.3rem" color="#f0db4f" />
            </div>
            <div className="IcoD2">
              <a href="https://tienda-js-mc.netlify.app/" target="_blank">
                <BsEyeFill size="1rem" color="#000" />
              </a>
            </div>
          </div>
        </div>
        <div className={`cuadros ${show && "none"}`}>
          <div className="Cimg">
            <img className="fot" src={por8} alt="Confesiones" />
          </div>
          <div className="Ico">
            <div className="IcoD1">
              <FaNodeJs size="1.2rem" color=" #3C873A" />
              <SiExpress size="1.3rem" color=" #68A063" />
              <DiMongodb size="1.3rem" color="#4DB33D" />
            </div>
            <div className="IcoD2">
              <a href="https://testdisponible.herokuapp.com/" target="_blank">
                <BsEyeFill size="1rem" color="#000" />
              </a>
            </div>
          </div>
        </div>

        <div className={`cuadros ${!show && "none"}`}>
          <div className="Cimg">
            <img
              className="fot"
              src={por4}
              alt="PaginaAnimeJs"
              target="_blank"
            />
          </div>
          <div className="Ico">
            <div className="IcoD1">
              <AiFillHtml5 size="1.3rem" color="#E44D26" />
              <DiCss3 size="1.3rem" color="#264de4" />
              <TbBrandJavascript size="1.3rem" color="#f0db4f" />
            </div>
            <div className="IcoD2">
              <a
                href="https://sparkly-twilight-6ee2b9.netlify.app/"
                target="_blank"
              >
                <BsEyeFill size="1rem" color="#000" />
              </a>
            </div>
          </div>
        </div>
        <div className={`cuadros ${!show && "none"}`}>
          <div className="Cimg">
            <img className="fot" src={por1} alt="TiendaBoostrap" />
          </div>
          <div className="Ico">
            <div className="IcoD1">
              <AiFillHtml5 size="1.3rem" color="#E44D26" />
              <FaBootstrap size="1.3rem" color="#563d7c" />
            </div>
            <div className="IcoD2">
              <a
                href="https://gleeful-quokka-354396.netlify.app/"
                target="_blank"
              >
                <BsEyeFill size="1rem" color="#000" />
              </a>
            </div>
          </div>
        </div>
        <div className={`cuadros ${!show && "none"}`}>
          <div className="Cimg">
            <img className="fot" src={por5} alt="TiendaPc" />
          </div>
          <div className="Ico">
            <div className="IcoD1">
              <AiFillHtml5 size="1.3rem" color="#E44D26" />
              <DiCss3 size="1.3rem" color="#264de4" />
              <TbBrandJavascript size="1.3rem" color="#f0db4f" />
            </div>
            <div className="IcoD2">
              <a
                href="https://shoping-computers.netlify.app/#view1"
                target="_blank"
              >
                <BsEyeFill size="1rem" color="#000" />
              </a>
            </div>
          </div>
        </div>
        <div className={`cuadros ${!show && "none"}`}>
          <div className="Cimg">
            <img className="fot" src={por7} alt="Tienda" />
          </div>
          <div className="Ico">
            <div className="IcoD1">
              <AiFillHtml5 size="1.3rem" color="#E44D26" />
              <DiCss3 size="1.3rem" color="#264de4" />
            </div>
            <div className="IcoD2">
              <a
                href="https://shoping-computers.netlify.app/#view1"
                target="_blank"
              >
                <BsEyeFill size="1rem" color="#000" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => setShow((S) => !S)}>
          <AiFillPlusCircle size="2.5rem" color={Bcolor} />
        </button>
      </div>
    </ProjectStyled>
  );
};

export default Projects;
