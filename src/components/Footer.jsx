import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { AiFillFacebook, AiFillGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { RxDot } from 'react-icons/rx'
import { BiLocationPlus } from 'react-icons/bi'

import logo from '../assets/images/logo.png'

const footerIcons = [
  { icon: <AiFillFacebook />, link: 'https://www.facebook.com/' },
  { icon: <AiFillGithub />, link: 'github.com' },
]

const menuItems = [
  { name: 'Trang chủ giới thiệu', path: '/home', icon: <RxDot /> },
  { name: 'Hướng dẫn cài đặt', path: '/install', icon: <RxDot /> },
  { name: 'Thông tin nhóm phát triển', path: '/team', icon: <RxDot /> },
  { name: 'Nhận thông tin hỗ trợ', path: '/contact', icon: <RxDot /> }
]

const infoItems = [
  { content: '+84 373874418', icon: <AiOutlinePhone /> },
  { content: 'thanhdaibl1572002@gmail.com', icon: <AiOutlineMail /> },
  { content: '273 An Dương Vương, Phường 3, Quận 5, TPHCM', icon: <BiLocationPlus /> },
]

const FooterWrapper = styled.div`
  width: 100%;
  height: max-content;
  flex-direction: column;
  padding: 50px;
  background: rgb(0,171,215);
  background: linear-gradient(323deg, rgba(0,171,215,1) 20%, rgba(0,77,215,1) 50%, rgba(0,0,0,1) 50%, rgba(0,4,37,1) 75%);
  row-gap: 50px;
  @media (max-width: 1000px) {
    padding: 50px 30px; 
  }
  @media (max-width: 500px) {
    padding: 50px 20px; 
  }
`

const FooterTop = styled.div`
  width: 100%;
  padding-bottom: 50px;
  border-bottom: 0.5px solid #ffffff5e;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    row-gap: 50px;
  }
`

const FooterTopLeft = styled.div`
  flex-direction: column;
  row-gap: 25px;
  flex-basis: calc(100% / 3);
  @media (max-width: 1000px) {
    flex-basis: 50%;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`

const FooterTopLeftLogo = styled.div`
  align-items: center;
  gap: 5px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  img {
    width: 40px;
    height: 40px;
  }
  span:nth-child(1) {
    color: #ff007f;
    font-family: 'Orbitron';
  }
  span:nth-child(2) {
    color: #ffc600;
    font-family: 'Orbitron';
  }
  div {
    color: black;
    font-family: 'Orbitron';
    -webkit-text-stroke: 0.5px white;
  }
`

const FooterTopLeftText = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: white;
  max-width: 300px;
  @media (max-width: 700px) {
    max-width: 100%;
  }
`

const FooterTopLeftIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  a {
    display: flex;
    font-size: 22px;
    color: #FFFFFF;      
    transition: all.15s ease;
    &:hover {
      color: #ffffffbd;
    }
  }
`

const FooterTopCenter = styled.div`
  flex-direction: column;
  row-gap: 25px;
  flex-basis: calc(100% / 3);
  h2 {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
  }
  a {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 400;
    color: #ffffffbd;      
    transition: all.15s ease;
    &:hover {
      color: white;
    }
  }
  svg {
    font-size: 20px;
    color: white;
  }
  @media (max-width: 1000px) {
    flex-basis: 50%;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`

const FooterTopRight = styled.div`
  flex-direction: column;
  row-gap: 25px;
  flex-basis: calc(100% / 3);
  h2 {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
  }
  div {
    width: 100%;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 400;
    color: #ffffffbd;      
    transition: all.15s ease;
    &:hover {
      color: white;
    }
  }
  svg {
    font-size: 20px;
    color: white;
  }
  @media (max-width: 1000px) {
    flex-basis: 100%;
  }
`

const FooterBottom = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  color: white;
  gap: 5px;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterTopLeft>
          <FooterTopLeftLogo>
            <img src={logo} alt="logo" />
            <div><span>O</span><span>S</span></div>
          </FooterTopLeftLogo>
          <FooterTopLeftText>
            OS GAME, tựa game bắn máy bay không gian được lập trình bằng ngôn ngữ Python dành cho nền tảng Linux,
            là một dự án nhỏ được thực hiện để tìm hiểu về quy trình phát triển phẩn mềm mã nguồn mở.
          </FooterTopLeftText>
          <FooterTopLeftIcons>
            {footerIcons.map((item, index) => (
                <Link to={item.link} key={index} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </Link>
            ))}
          </FooterTopLeftIcons>
        </FooterTopLeft>
        <FooterTopCenter>
          <h2>Nội dung website</h2>
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index} rel="noopener noreferrer">
              {item.icon}{item.name}
            </Link>
          ))}
        </FooterTopCenter>
        <FooterTopRight>
          <h2>Thông tin liên hệ</h2>
          {infoItems.map((item, index) => (
            <div key={index}>
              {item.icon}{item.content}
            </div>
          ))}
        </FooterTopRight>
      </FooterTop>
      <FooterBottom>
        Website được đăng ký bản quyền bởi © OS Team 2023
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer