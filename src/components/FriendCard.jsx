import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import { toast } from 'react-toastify';

import { FaFacebook, FaGithub } from 'react-icons/fa'
import { IoArrowRedoOutline } from 'react-icons/io5'

import Button from './Button'

const FriendCardContainer = styled.div`
  flex-basis: 23%;
  height: 80%;
  background: linear-gradient(323deg,rgb(32 101 255 / 40%) 50%,rgb(0 0 0 / 40%) 50%);
  border-radius: 10px;
  border: 2px solid #009afb;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  @media (max-width: 1100px) {
    flex-basis: 48%;
  }
  @media (max-width: 600px) {
    flex-basis: 100%;
  }
`

const FriendCardSocialLinks = styled.div`
  width: 100%;
  justify-content: space-between;
  a {
    font-size: 25px;
    color: white;
    @media (max-width: 600px) {
      font-size: 35px;
    }
  }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}`

const FriendCardAvatarContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  padding: 3px;
  position: relative;
  box-shadow: 0 0 5px 0px #2196f3;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    object-fit: cover;
    z-index: 10;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 35px;
    width: 50%;
    height: 120%;
    background: rgb(255,205,0);
    background: linear-gradient(38deg, rgba(255,205,0,1) 23%, rgba(255,118,54,1) 54%, rgba(255,0,91,1) 83%);
    animation: ${rotate360} 2s linear infinite;
  }
`

const FriendCardInfoContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 5px;
  h1 {
    font-size: 22px;
    font-weight: 900;
    color: transparent;
    text-align: center;
    -webkit-text-stroke: 0.5px white;
    text-transform: capitalize;
  }
  h2 {
    color: white;
    font-size: 16px;
    text-transform: capitalize;
  }
`

const FriendCardButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const FriendCard = React.memo(({id, name, position, facebook, github, avatar}) => {

  const showDetails = () => {
    toast.warn('Thông tin của ' + name + ' đang được cập nhật, vui lòng thử lại sau!', {
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

  return (
    <FriendCardContainer>
      <FriendCardSocialLinks>
        <Link to={facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </Link>
        <Link to={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
      </FriendCardSocialLinks>
      <FriendCardAvatarContainer>
        <img src={avatar} alt="logo" />
      </FriendCardAvatarContainer>
      <FriendCardInfoContainer>
        <h1>{name}</h1>
        <h2>{position}</h2>
      </FriendCardInfoContainer>
      <FriendCardButtonContainer>
      <Button color="BLUE" icon={<IoArrowRedoOutline />} text="XEM CHI TIẾT" title="Nhấn vào để xem thêm thông tin" onClick={showDetails}/>
      </FriendCardButtonContainer>
    </FriendCardContainer>
  )
})

export default FriendCard 