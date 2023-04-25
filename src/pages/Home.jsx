import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import { toast } from 'react-toastify';

import Button from '../components/Button'

import { HiOutlineDownload } from 'react-icons/hi'

import HomeBG from '../assets/images/home-background.png'

const ContentHome = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${HomeBG});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
    `
const ContentHomeText = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 150px;
        font-weight: 900;
        font-family: 'Orbitron';
        color: #FFFFFF;
        text-align: center;
        -webkit-text-stroke: 1px white;
        color: black;
        letter-spacing: 5px;
        span:nth-child(1) {
          color: #ff007f;
          font-family: 'Orbitron';
        }
        span:nth-child(2) {
          color: #ffc600;
          font-family: 'Orbitron';
        }
        @media (max-width: 900px) {
            font-size: 120px;
        }
        @media (max-width: 700px) {
            font-size: 90px;
        }
        @media (max-width: 500px) {
            flex-wrap: wrap;
            div {
                flex-basis: 100%;
                justify-content: center;
                align-items: center;
                font-size: 150px;
            }
            margin-top: -50px;
        }
    }
    h2 {
        -webkit-text-stroke: 1px white;
        color: rgba(32,101,255,1);
        font-weight: 900;
        font-size: 50px;
    }
    h3 {
        font-size: 20px;
        font-weight: 300;
        color: white;
        @media (max-width: 400px) {
            font-size: 15px;
        }
    }
    `
const ContentHomeButton = styled.div`
    margin-top: 20px;
    z-index: 2;
    `

// const Notify = () => {
//     toast.warn('Game đang trong quá trình phát triển, vui lòng thử lại sau!', {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//     });
// }

const Home = () => {
    return (
        <ContentHome>
            <Helmet>
                <title>OS Game - Trang Chủ</title>
            </Helmet>
            <ContentHomeText>
                <h1><div><span>O</span><span>S</span></div>GAME</h1>
                <h3>Game Bắn Súng Dành Cho Nền Tảng</h3>
                <h2>LINUX</h2>
            </ContentHomeText>
            <ContentHomeButton>
                <a href="/downloads/osgame-python.tar.gz" download>
                    <Button color="GRADIENT" icon={<HiOutlineDownload />} text="TẢI XUỐNG" title="Nhấn vào để tải game" />
                </a>
            </ContentHomeButton>
        </ContentHome>
    )
}

export default Home