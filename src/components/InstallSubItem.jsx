import React from 'react'
import styled from 'styled-components'
import CodeBlock from './CodeBlock'
import { Link } from 'react-router-dom'

const InstallSubItemContainer = styled.div`
  width: 100%;
  flex-direction: column;
  row-gap: 10px;
  h3 {
    font-size: 16px;
    color: rgb(0 50 255);
    font-weight: 500;
    -webkit-text-stroke: 0.3px white;
  }
  p {
    font-size: 15px;
    color: white;
  }
  a {
    font-size: 16px;
    color: rgba(0,164,255,1);
    text-decoration: underline;
  }
}`

const InstallSubItem = ({ h3, p, code, link }) => {
  return (
    <InstallSubItemContainer>
        {h3 && (<h3>{h3}</h3>)}
        {p && (<p>{p}</p>)}
        {link && (<Link to={link} target='_blank'>{link}</Link>)}
        {code && (<CodeBlock code={code} />)}
    </InstallSubItemContainer>
  )
}

export default InstallSubItem