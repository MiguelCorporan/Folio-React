import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SuperButton from "./SuperButton";
import { IoMdContact } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { AiFillFolder } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const NavigationStyled = styled.nav`
  width: 80%;
  padding: 0.5rem 1rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;

const Navigation = () => {
  return (
    <NavigationStyled>
      <Link to="/">
        <SuperButton>
          <IoMdContact size="1.5rem" />
        </SuperButton>
      </Link>
      <Link to="/skills">
        <SuperButton>
          <FaTools size="1.2rem" />
        </SuperButton>
      </Link>
      <Link to="/projects">
        <SuperButton>
          <AiFillFolder size="1.3rem" />
        </SuperButton>
      </Link>
      <Link to="/contact">
        <SuperButton>
          <MdEmail size="1.3rem" />
        </SuperButton>
      </Link>
    </NavigationStyled>
  );
};

export default Navigation;
