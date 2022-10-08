import React, { useContext } from "react";
import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiMongodb } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs, FaGitSquare, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiFirebase } from "react-icons/si";
import DarkMode from "../components/DarkMode";
import { ThemeContext } from "../components/ThemeContex";

const SkillStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .AllSkill {
    width: 66%;
    padding: 3%;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    margin-top: 2rem;
    background-color: ${({ theme: { Ccolor } }) => Ccolor};
  }

  .arriba {
    width: 94%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .los1 {
    display: flex;
    justify-content: space-between;
  }

  .los2 {
    display: flex;
    align-items: center;
  }

  .medio {
    margin-left: auto;
    margin-right: auto;
  }

  .Ps {
    text-align: center;
    font-size: 0.6rem;
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

  .fire {
    font-size: 2.5rem;
  }

  .boo {
    font-size: 2.5rem;
  }

  .nod {
    font-size: 2.5rem;
  }

  .exp {
    font-size: 2.5rem;
  }

  .mon {
    font-size: 2.5rem;
  }

  .gi {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 600px) {
    .arriba {
      width: 70%;
    }
    .AllSkill {
      width: 45%;
    }
  }

  @media screen and (min-width: 768px) {
    .arriba {
      width: 70%;
      margin-bottom: 2rem;
    }

    .AllSkill {
      width: 40%;
    }
  }

  @media screen and (min-width: 1024px) {
    .arriba {
      width: 50%;
      margin-bottom: 2rem;
    }

    .AllSkill {
      width: 25%;
    }
  }

  @media screen and (min-width: 1600px) {
    .title {
      font-size: 2.5rem;
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

    .fire {
      font-size: 4rem;
    }

    .boo {
      font-size: 4rem;
    }

    .nod {
      font-size: 4rem;
    }

    .exp {
      font-size: 4rem;
    }

    .mon {
      font-size: 4rem;
    }

    .gi {
      font-size: 4rem;
    }
  }
`;
const Skills = () => {
  const { theme } = useContext(ThemeContext);
  //console.log(theme);

  return (
    <SkillStyled className="section" theme={theme}>
      <div className="arriba">
        <h2 className="title">Skills</h2>
        <DarkMode />
      </div>

      <div className="AllSkill">
        <div className="los1">
          <div>
            <AiFillHtml5 className="htm" color="#E44D26" />
            <p className="Ps">Html</p>
          </div>
          <div>
            <DiCss3 className="css" color="#264de4" />
            <p className="Ps">Css</p>
          </div>
          <div>
            <TbBrandJavascript className="js" color="#f0db4f" />
            <p className="Ps">Java Script</p>
          </div>
        </div>

        <div className="los1">
          <div>
            <FaBootstrap className="boo" color="#563d7c" />
            <p className="Ps">Bootstrap</p>
          </div>
          <div>
            <DiReact className="rea" color="#61DBFB" />
            <p className="Ps">React</p>
          </div>
          <div>
            <SiFirebase className="fire" color="#FFA000" />
            <p className="Ps">Fire base</p>
          </div>
        </div>

        <div className="los1">
          <div>
            <FaNodeJs className="nod" color=" #3C873A" />
            <p className="Ps">Node Js</p>
          </div>
          <div>
            <SiExpress className="exp" color=" #68A063" />
            <p className="Ps">Express</p>
          </div>
          <div>
            <DiMongodb className="mon" color="#4DB33D" />
            <p className="Ps">MongoDB</p>
          </div>
        </div>
        <div className="los2">
          <div className="medio">
            <FaGitSquare className="gi" color="#F1502F" />
            <p className="Ps G">Git</p>
          </div>
        </div>
      </div>
    </SkillStyled>
  );
};

export default Skills;
