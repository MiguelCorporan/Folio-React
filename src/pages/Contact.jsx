import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import DarkMode from "../components/DarkMode";
import { BsWhatsapp, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { ThemeContext } from "../components/ThemeContex";

const btnanim1 = keyframes`
 0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
`;

const btnanim2 = keyframes`
      0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
`;
const btnanim3 = keyframes`
      0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
`;
const btnanim4 = keyframes`
      0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
`;

const ContactStyled = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  .arriba {
    width: 94%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }

  .center {
    display: flex;
    justify-content: center;
  }
  .login-box {
    position: relative;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 1rem;
    border-radius: 1rem;
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    box-shadow: ${({ theme: { textColor } }) => textColor} 0px 3px 8px;
  }

  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    caret-color: #338b9c;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #585757;
    outline: none;
    padding-left: 10px;
    background: transparent;
  }
  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }

  .login-box form .raya {
    position: relative;
    min-height: 100%;
    min-width: 100%;
    display: inline-block;
    padding: 10px 20px;
    color: #338b9c;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
    margin-left: auto;
    margin-right: auto;
  }

  .login-box .raya:hover {
    background: #338b9c;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #338b9c, 0 0 5px #338b9c, 0 0 5px #338b9c,
      0 0 20px #338b9c;
  }

  .login-box .raya span {
    position: absolute;
    display: block;
  }

  .login-box .raya span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #338b9c);
    animation: ${btnanim1} 1s linear infinite;
  }

  .login-box .raya span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #338b9c);
    animation: ${btnanim2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  .login-box .raya span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #338b9c);
    animation: ${btnanim3} 1s linear infinite;
    animation-delay: 0.5s;
  }
  .login-box .raya span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #338b9c);
    animation: ${btnanim4} 1s linear infinite;
    animation-delay: 0.75s;
  }

  h2 {
    text-align: center;
  }
  .area {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    caret-color: #338b9c;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #585757;
    outline: none;
    padding-left: 10px;
    background: transparent;
    resize: none;
  }
  .bt {
    width: 5rem;
    height: 2.5rem;
    position: relative;
  }
  .send {
    font-size: 1rem;
    position: absolute;
    top: 0.7rem;
    left: 0;
    right: 0;
    margin: auto;
  }

  .redes {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.3rem;
  }

  .re {
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    .arriba {
      width: 70%;
      margin-bottom: 2rem;
    }

    .login-box {
      width: 55%;
    }
  }

  @media screen and (min-width: 768px) {
    .arriba {
      width: 70%;
      margin-bottom: 2rem;
    }
    .login-box {
      width: 30rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .arriba {
      width: 50%;
      margin-bottom: 2rem;
    }
    .login-box {
      width: 24rem;
    }
  }

  @media screen and (min-width: 1600px) {
    .title {
      font-size: 2.5rem;
    }

    .login-box {
      position: relative;
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      padding: 3rem 1rem;
      border-radius: 1rem;
      /* display: flex;
    flex-direction: column;
    align-items: center; */

      box-shadow: ${({ theme: { textColor } }) => textColor} 0px 3px 8px;
    }
  }
`;

const Contact = () => {
  const [message, setmessage] = useState({});

  const {
    theme,
    theme: { Bcolor },
  } = useContext(ThemeContext);

  const Envio = (e) => {
    e.preventDefault();

    const email = "Mcorporan536@gmail.com";

    //const url = `https://formsubmit.co/ajax/${email}`;

    fetch(`https://formsubmit.co/ajax/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(() => e.target.reset());

    /* fetch(url, {
      method: "POST",
      headers: {
        
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(message),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject("hubo un error")))
      .then((result) => console.log(result))
      .catch((error) => console.log(error)); */

    /*  const send = () => {
      fetch("https://formsubmit.co/ajax/Mcorporan536@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: inputName.value,
          email: inputEmail.value,
          message: inputArea.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          inputName.classList.remove("success", "error");
          inputEmail.classList.remove("success", "error");
          inputArea.classList.remove("success", "error");
          form.reset();
        })
        .catch((error) => console.log(error));
    }; */
  };
  const handleChange = (e) =>
    setmessage({ ...message, [e.target.name]: e.target.value });

  return (
    <ContactStyled className="section" theme={theme}>
      <div className="arriba">
        <h2 className="title">Contact</h2>
        <DarkMode />
      </div>
      <div className="login-box">
        <form className="Elfor" onSubmit={Envio}>
          <h2>Contact me</h2>

          <div className="user-box">
            <input
              type="text"
              name="text"
              required=""
              placeholder="name"
              onChange={handleChange}
            />
          </div>
          <div className="user-box">
            <input
              type="email"
              name="email"
              required=""
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>

          <textarea
            className="area"
            name="message"
            cols="30"
            rows=""
            placeholder="type your message"
            onChange={handleChange}
          ></textarea>

          <div className="center">
            <button type="submit" className="bt">
              <span className="send">enviar</span>
              <div href="#" className="raya">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          <div className="redes">
            <a
              className="re"
              href="https://api.whatsapp.com/send?phone=+18299163746&text=Hola,%20Me%20gustaria%20contactar%20contigo!"
            >
              <BsWhatsapp size="1.4rem" color="#25D366" />
            </a>
            <a
              className="re"
              href="https://www.linkedin.com/in/miguel-corporan-perfilsocial/"
            >
              <BsLinkedin size="1.4rem" color="#0077b5" />
            </a>

            <a className="re" href="https://www.instagram.com/mcorporan55/">
              <BsInstagram size="1.4rem" color="#E1306C" />
            </a>

            <a className="re" href="https://github.com/MiguelCorporan">
              <BsGithub size="1.4rem" color={Bcolor} />
            </a>
          </div>
        </form>
      </div>
    </ContactStyled>
  );
};

export default Contact;
