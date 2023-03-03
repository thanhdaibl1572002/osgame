import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { HiOutlineHome, HiOutlineCode, HiOutlineUserGroup, HiOutlineClipboardCheck, HiOutlineViewGrid } from 'react-icons/hi'

import Button from './Button';

const menuItems = [
  { name: 'Trang Chủ', path: '/home', icon: <HiOutlineHome /> },
  { name: 'Cài Đặt', path: '/install', icon: <HiOutlineViewGrid /> },
  { name: 'Nhóm', path: '/team', icon: <HiOutlineUserGroup /> },
  { name: 'Liên Hệ', path: '/contact', icon: <HiOutlineClipboardCheck /> }
]
const menuIcons = [
  { icon: <AiFillFacebook />, link: 'https://www.facebook.com/' },
  { icon: <AiFillGithub />, link: 'https://github.com/thanhdaibl1572002/' },
]

const HeaderWrapper = styled.div`
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: all .15s ease;
    width: 100%;
    padding: 20px 100px;
    @media (max-width: 1200px) {
      padding: 20px 30px;
    }
    @media (max-width: 1000px) {
      align-items: flex-start;
    }
    @media (max-width: 500px) {
      padding: 20px;
      align-items: center;
    }
    &.active {
      background: linear-gradient(323deg,rgba(0,0,0,1) 50%,rgba(0,4,37,1) 75%)
    }
    `
const HeaderLogo = styled.div`
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
    @media (max-width: 400px) {
      font-size: 25px;
      svg {
        font-size: 25px;
      }
    }
    `
const HeaderMenuAndIcons = styled.div`
    align-items: center;
    justify-content: center;
    gap: 250px;
    @media (max-width: 1200px) {
      gap: 50px;
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      row-gap: 20px;
      margin-top: 10px;
    }
    @media (max-width: 800px) {
      display: none;
    }
    `
const HeaderMenuAndIconsResponsive = styled.div`
    position: absolute;
    top: 80px;
    left: 30px;
    right: 30px;
    width: calc(100% - 60px);
    height: 250px;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    display: none;
    transition: all.1s ease;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.9) translateY(-5px);
    transform-origin: top right;
    @media (max-width: 800px) {
      display: flex;
    }
    @media (max-width: 500px) {
      left: 20px;
      right: 20px;
      width: calc(100% - 40px);
    }
    &.active {
      opacity: 1;
      visibility: visible;
      transform: scale(1) translateY(0);

    }
    `
const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    a {
      font-size: 17px;
      color: #ffffff;      
      letter-spacing: 0.5px;
      transition: all.15s ease;
      &:hover {
        color: #ffffffbd;
      }
    }
    @media (max-width: 800px) {
      flex-direction: column;
      row-gap: 20px;
      width: 100%;
      align-items: flex-start;
      padding: 0 20px;
      a { 
        display: flex;
        align-items: center;
        gap: 15px;
        color: #212529;
        font-size: 17px;
        font-weight: 500;
        &:hover {
          color: #212529;
        }
        svg {
          font-size: 22px;
        }
      }
    }
    `
const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    a {
      display: flex;
      font-size: 25px;
      color: #FFFFFF;      
      transition: all.15s ease;
      &:hover {
        color: #ffffffbd;
      }
    }
    @media (max-width: 800px) {
      a { 
        color: #212529;
        font-size: 30px;
        &:hover {
          color: #212529;
        }
      }
    }
    `
const HeaderButtons = styled.div`
    gap: 15px;
    button:nth-child(2) {
      display: none;
    }
    @media (max-width: 800px) {
      button:nth-child(2) {
        display: flex;
      }
    }
    @media (max-width: 500px) {
      gap: 10px;
    }
    `
const ToastContainerWrapper = styled.div`
  position: fixed;
`

const Notify = () => {
  toast.warn('Game đang trong quá trình phát triển, vui lòng thử lại sau!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

const Header = ({ ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <HeaderWrapper {...props} className={isScrolled ? "active" : ""}>
      <Link to="/home">
        <HeaderLogo>
          <img src={logo} alt="logo" />
          <div><span>O</span><span>S</span></div>
        </HeaderLogo>
      </Link>
        <HeaderMenuAndIcons>
          <HeaderMenu>
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index} rel="noopener noreferrer">
                  {item.name}
                </Link>
              ))}
          </HeaderMenu>
          <HeaderIcons>
              {menuIcons.map((item, index) => (
                <Link to={item.link} key={index} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </Link>
              ))}
          </HeaderIcons>
        </HeaderMenuAndIcons>
        <HeaderMenuAndIconsResponsive className={isMenuOpen && "active"} ref={menuRef}>
          <HeaderMenu>
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index} rel="noopener noreferrer">
                  {item.icon} {item.name}
                </Link>
              ))}
          </HeaderMenu>
          <HeaderIcons>
              {menuIcons.map((item, index) => (
                <Link to={item.link} key={index} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </Link>
              ))}
          </HeaderIcons>
        </HeaderMenuAndIconsResponsive>
        <HeaderButtons>
        <Button color="BLUE" icon={<HiOutlineCode />} text="SOURCE CODE" title="Nhấn vào đây để tải source code" onClick={Notify}/>
        <Button color="BLUE" icon={<RiBarChartHorizontalLine />} onClick={() => setIsMenuOpen(!isMenuOpen)}/> 
      </HeaderButtons>
      <ToastContainerWrapper>
        <ToastContainer/>
      </ToastContainerWrapper>
    </HeaderWrapper>
  )
}

export default Header