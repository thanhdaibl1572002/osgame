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
    padding: 30px 15px;
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
        p: "Mở Terminal (Ctrl + Alt + T) và chạy dòng lệnh này để cài đặt Python:",
        code: "sudo apt-get install python3",
      },
      {
        h3: "2. Cài đặt Pip",
        p: "Mở Terminal và chạy dòng lệnh này để cài đặt Pip:",
        code: "sudo apt-get install python3-pip",
      },
      {
        h3: "3. Cài đặt thư viện Pygame",
        p: "Mở Terminal và chạy dòng lệnh này để cài đặt Pygame:",
        code: "pip install pygame",
      },
      {
        h3: "4. Cài đặt thư viện gif_pygame",
        p: "Mở Terminal và chạy dòng lệnh này để cài đặt gif_pygame:",
        code: "pip install gif_pygame",
      }
    ]
  },
  {
    title: "INSTALLATION",
    subtitle: `Sau khi hoàn thành cài đặt môi trường Python và các thư viện Pygame, gif_pygame. Bạn cần tải game từ trang chủ của OS Game`,
    subitems: [
      {
        h3: "1. Truy cập vào trang chủ OS Game",
        p: "Truy cập liên kết: ",
        link: "https://thanhdaibl1572002.github.io/osgame/",
      },
      {
        h3: "2. Tiến hành tải xuống game:",
        p: "Nhấn vào nút \"TẢI XUỐNG\" để tải game.",
      },
      {
        h3: "3. Di chuyển đến thư mục Downloads",
        p: "Mở Terminal và chạy dòng lệnh này để di chuyển đến thư mục Downloads:",
        code: "cd Downloads",
      },
      {
        h3: "4. Tại thư mục Downloads, giải nén tệp vừa tải xuống (osgame-python.tar.gz)",
        p: "Chạy dòng lệnh này để giải nén tệp vừa tải xuống:",
        code: "tar -xzf osgame-python.tar.gz",
      },
      {
        h3: "5. Tại thư mục Downloads, chuyển hướng đến thư mục osgame-python",
        p: "Chạy dòng lệnh này để chuyển hướng đến thư mục osgame-python:",
        code: "cd osgame-python",
      }
    ]
  },
  {
    title: "RUNNING GAME",
    subitems: [
      {
        h3: "1. Sau khi chuyển hướng đến thư mục osgame-python, tiến hành khởi chạy game",
        p: "Chạy dòng lệnh này để khởi chạy game:",
        code: "python3 main.py",
      },
      {
        h3: "2. Sau khi màn hình game xuất hiện, chọn vào nút \"PLAY\" để chơi game.",
      },
    ]
  },
  {
    title: "GAMEPLAY GUIDE",
    subtitle: `Khi bắt đầu chơi, người chơi sẽ điều khiển một tàu vũ trụ và di chuyển trên màn hình để tránh các đối 
    thủ và tấn công chúng bằng cách bắn đạn. Người chơi có thể tiêu diệt các đối thủ để giành điểm số và tiếp tục chơi. 
    Tuy nhiên, nếu tàu vũ trụ bị va chạm đạn của đối thủ, người chơi sẽ mất một lượng máu và game kết thúc khi mất hết số máu. 
    Người chơi có thể sử dụng các phím điều khiển để di chuyển và bắn đạn.`,
    subitems: [
      {
        p: "- Di chuyển lên: phím mũi tên lên (TOP).",
      },
      {
        p: "- Di chuyển xuống: phím mũi tên xuống (BOTTOM).",
      },
      {
        p: "- Di chuyển sang trái: phím mũi tên trái hoặc (LEFT).",
      },
      {
        p: "- Di chuyển sang phải: phím mũi tên phải hoặc (RIGHT).",
      },
      {
        p: "- Bắn đạn: Tự động.",
      },
    ]
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