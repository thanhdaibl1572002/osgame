import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import FriendCard from '../components/FriendCard'

import TeamBG from '../assets/images/team-background.png'

import Avatar from '../assets/images/avatar-default.png'

const ContentTeam = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${TeamBG});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    height: max-content;
    padding: 80px 0;
  }
`

const ContentTeamTitle = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: -25px;
  h1 {
    font-size: 50px;
    font-weight: 900;
    font-family: 'Orbitron';
    color: #FFFFFF;
    text-align: center;
    -webkit-text-stroke: 1px white;
    color: black;
    letter-spacing: 5px;
    span:nth-child(1) {
      -webkit-text-stroke: 2px #ff007f;
      font-family: 'Orbitron';
    }
    span:nth-child(2) {
      -webkit-text-stroke: 1px #ffc600;
      font-family: 'Orbitron';
    }
  }
  @media (max-width: 1100px) {
    margin-top: 20px;
    margin-bottom: 35px;
  }
`

const ContentTeamItemsWrapper = styled.div`
  width: 90%;
  height: 70%;
  background: transparent;
  align-items: center;
  gap: calc(8% / 3);
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 20px;
  }
  @media (max-width: 1100px) {
    width: 80%;
    padding: 0;
    flex-wrap: wrap;
    gap: 4%;
    row-gap: 35px;
    height: fix-content;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
    row-gap: 25px;
  }
  @media (max-width: 600px) {
    width: 70%;
    padding: 0;
    flex-wrap: wrap;
    gap: 0;
    row-gap: 35px;
    height: fix-content;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 20px;
    row-gap: 25px;
  }
`

const teamInfomaton = [
  {
    id: 1,
    name: 'Trương Thành Đại',
    position: 'Web Developer',
    facebook: '',
    github: '',
    avatar: Avatar,
  },
  {
    id: 2,
    name: 'Đỗ Hoàng Quân',
    position: 'Game Developer',
    facebook: '',
    github: '',
    avatar: Avatar,
  },
  {
    id: 3,
    name: 'Dương Quý Quốc',
    position: 'Game Developer',
    facebook: '',
    github: '',
    avatar: Avatar,
  },
  {
    id: 5,
    name: 'Trần Thiện Phúc',
    position: 'UX/UI Designer',
    facebook: '',
    github: '',
    avatar: Avatar,
  },
]

const Team = () => {
  return (
    <ContentTeam>
      <Helmet>
        <title>OS Game - Nhóm</title>
      </Helmet>
      <ContentTeamTitle>
        <h1><span>O</span><span>S</span> TEAM</h1>
      </ContentTeamTitle>
      <ContentTeamItemsWrapper>
        {teamInfomaton.map(item => (
          <FriendCard 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            position={item.position} 
            facebook={item.facebook} 
            github={item.github} 
            avatar={item.avatar} 
          />
        ))}
      </ContentTeamItemsWrapper>

    </ContentTeam>
  )
}

export default Team