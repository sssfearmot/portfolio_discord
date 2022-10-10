import React from 'react'
import './style.css';
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";

import Logo from "../../assets/discord_new.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import IconYouTube from "../../assets/icon-youtube.svg";
import IconLaptop from "../../assets/icon-laptop.svg";

export default function Header() {
  const [user] = useAuthState(auth);
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then(() => history.push("/channels"))
      .catch((error) => alert(error.message));
  };

  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/43-WkSF8IvPOhyjA/scene.splinecode"
      />
      <Social>
        <div />
        <IconTwitter />
        <IconYouTube />
      </Social>
      <Content>
        <Menu>
          <li>
            <Logo />
          </li>
          <li>
            <a href="#">다운로드</a>
          </li>
          <li>
            <a href="#">Nitro</a>
          </li>
          <li>
            <a href="#">찾기</a>
          </li>
          <li>
            <a href="#">보안</a>
          </li>
          <li>
            <a href="#">지원</a>
          </li>
          <li>
            <a href="#">블로그</a>
          </li>
          <li>
            <a href="#">채용</a>
          </li>
          <li>
            <button
              onClick={!user ? signIn : () => history.push("/channels")}>
              {!user ? "Login" : "Open Discord"}
            </button>
          </li>
        </Menu>
        <h1>이런 공간이 있다면 어떨까요...</h1>
        <p>
          ...학교 동아리, 게임 그룹, 세계 예술 감상 커뮤니티에 소속되어 유대감을 느낄 수 있는 공간. 소중한 단짝 친구들과 어울릴 수 있는 우리만의 공간. 더 쉽게, 매일 어울리고 이야기할 수 있는 그런 공간 말이에요.
        </p>

        <div className='flex'>
          <button className='bg-white text-black'>
            <img src={IconLaptop} alt="" /> Download for Mac
          </button>
          <button className='ml-0 bg-da'>
            <img src={IconLaptop} alt="" /> 웹브라우저에서 Discord 열기
          </button>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 1000px;
  background : #404eed;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: 1200px;
    height: 1000px;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 700px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      // max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 16px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 300px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;
  pointer-events: auto;

  li:nth-child(1) {
    width: 130px;
  }

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  button {
    margin: 0;
    width: auto;
    background: rgba(31, 66, 250, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5),
    li:nth-child(6),
    li:nth-child(7), 
    li:nth-child(8) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`;
