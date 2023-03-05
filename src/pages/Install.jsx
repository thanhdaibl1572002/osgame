import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import InstallBG from '../assets/images/install-background.png'

import InstallItem from '../components/InstallItem';

const ContentInstall = styled.div`
  width: 100%;
  height: fit-content;
  padding: 100px 50px 50px 50px;
  flex-direction: column;
  align-items: center;
  background-image: url(${InstallBG});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
    padding: 150px 30px 50px 30px;
  }
  @media (max-width: 500px) {
    padding: 120px 20px 50px 20px;
  }
`

const ContentInstallItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  border-radius: 10px;
  justify-content: center;
  background: linear-gradient(225deg,rgb(5 0 215 / 34%) 20%,rgb(0 77 215 / 60%) 50%,rgb(0 0 0) 50%,rgb(0 4 37 / 70%) 75%);
  @media (max-width: 500px) {
    background: linear-gradient(140deg,rgb(5 0 215 / 34%) 20%,rgb(0 77 215 / 60%) 50%,rgb(0 0 0) 50%,rgb(0 4 37 / 70%) 75%);
  }
`
const ContentInstallItem = styled.div`
  width: 800px;
  align-items: baseline;
  flex-direction: column;
  row-gap: 50px;
`

const installData = [
  {
    title: "GETTING STARTED",
    subtitle: `OS Game là một trò chơi được viết bằng ngôn ngữ lập trình Python dành cho hệ điều hành Linux (Ubuntu).
    Trước khi cài đặt game, hãy tiến hành cài đặt môi trường và các phần phụ thuộc của game.`,
    subitems: [
      {
        h3: "1. Cài đặt môi trường Python",
        p: "Mở command line và chạy dòng lệnh này để cài đặt Python:",
        code: "sudo apt-get install python3",
      },
      {
        h3: "2. Cài đặt thư viện Pygame",
        p: "Mở command line và chạy dòng lệnh này để cài đặt Pygame:",
        code: "sudo apt-get install python3-pygame",
      }
    ]
  },
  {
    title: "INSTALLATION",
    subtitle: `Đang cập nhật.`,
  },
  {
    title: "RUNNING GAME",
    subtitle: `Đang cập nhật.`,
  },
  {
    title: "GAMEPLAY GUIDE",
    subtitle: `Đang cập nhật.`,
  },
]

const Install = () => {
  return (
    <ContentInstall>
      <Helmet>
        <title>OS Game - Cài Đặt</title>
      </Helmet>
      <ContentInstallItemWrapper>
        <ContentInstallItem>
          {installData.map((item, index) => (
            <InstallItem key={index} title={item.title} subtitle={item.subtitle} subitems={item.subitems} />
        ))}
        </ContentInstallItem>
      </ContentInstallItemWrapper>
    </ContentInstall>
  )
}

export default Install