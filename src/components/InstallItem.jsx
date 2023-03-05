import React from 'react'
import styled from 'styled-components'
import InstallSubItem from './InstallSubItem'

const InstallItemWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  row-gap: 20px;
`

const InstallTitle = styled.div`
  width: 100%;
  align-items: center;
  h1 {
    font-size: 30px;
    font-weight: 900;
    font-family: 'Orbitron';
    color: #FFFFFF;
    text-align: center;
    -webkit-text-stroke: 1px rgba(0,164,255,1);
    color: black;
    letter-spacing: 5px;
    @media (max-width: 600px) {
      font-size: 25px;
    }
    @media (max-width: 500px) {
      letter-spacing: 1px;
    }
`

const InstallSubTitle = styled.div`
  width: 100%;
  h2 {
    font-size: 17px;
    font-weight: 300;
    color: white;
    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`

const InstallItem = ({ title, subtitle, subitems }) => {
  return (
    <InstallItemWrapper>
      <InstallTitle>
        <h1>{title}</h1>
      </InstallTitle>
      {subtitle && (
        <InstallSubTitle>
        <h2>{subtitle}</h2>
        </InstallSubTitle>
      )}
      {subitems && subitems.map((item, index) => (
        <InstallSubItem key={index} h3={item.h3} p={item.p} code={item.code} />
      ))}
    </InstallItemWrapper>
  )
}

export default InstallItem