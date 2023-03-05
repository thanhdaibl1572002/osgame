import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import ContactBG from '../assets/images/contact-background-2.png'

import TextBox from '../components/TextBox';
import TextArea from '../components/TextArea';

import { IoPersonCircleOutline, IoAtCircleOutline, IoHelpCircleOutline, IoArrowRedoOutline } from 'react-icons/io5';
import Button from '../components/Button';


const ContentContact = styled.div`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${ContactBG});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 50px 20px;
  @media (max-width: 1000px) {
    padding: 100px 20px 50px 20px;
  }
  @media (max-width: 500px) {
    padding: 70px 20px 50px 20px;
  }
`

const ContentContactTitle = styled.div`
  width: 100%;
  flex-direction: column;
  height: fit-content;
  margin-top: -25px;
  gap: 5px;
  h1 {
    width: 100%;
    font-size: 45px;
    font-weight: 900;
    font-family: 'Orbitron';
    -webkit-text-stroke: 2px rgba(0,164,255,1);
    color: black;
    letter-spacing: 5px;
    text-align: center;
  }
`

const ContentContactWrapper = styled.div`
  width: 800px;
  height: 100%;
  margin-top: 50px;
  border-radius: 10px;
  overflow: hidden;
  background: transparent;
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

const ContentContactForm = styled.div`
  flex-basis: 100%;
  padding: 50px;
  background: linear-gradient(325deg,rgb(0 114 215 / 26%) 20%,rgb(0 77 215 / 43%) 50%,rgb(0 0 0 / 38%) 50%,rgb(0 4 37 / 70%) 75%);
  flex-direction: column;
  row-gap: 30px;
  @media (max-width: 900px) {
    padding: 50px 20px;
  }
  @media (max-width: 500px) {
    padding: 40px 15px;
  }
`

const ContentContactButton = styled.div`
 align-self: flex-end;
 @media (max-width: 500px) {
  width: 100%;
  button {
    width: 100%;
  }
 }
`

const Contact = () => {
  return (
    <ContentContact>
      <Helmet>
        <title>OS Game - Liên Hệ</title>
      </Helmet>
      <ContentContactWrapper>
        <ContentContactForm>
          <ContentContactTitle>
            <h1>CONTACT</h1>
          </ContentContactTitle>
          <TextBox enable={true} readOnly={false} type="text" icon={<IoPersonCircleOutline />} placeholder="Nhập họ tên của bạn" />
          <TextBox enable={true} readOnly={false} type="text" icon={<IoAtCircleOutline />} placeholder="Nhập email của bạn" />
          <TextArea enable={true} readOnly={false} type="text" icon={<IoHelpCircleOutline />} resize="none" placeholder="Nhập thông tin cần được hỗ trợ..." />
          <ContentContactButton>
            <Button color="BLUE" icon={<IoArrowRedoOutline />} text="Gửi Thông Tin Liên Hệ" />
          </ContentContactButton>
        </ContentContactForm>
      </ContentContactWrapper>
    </ContentContact>
  )
}

export default Contact