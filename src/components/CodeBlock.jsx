import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './Button';

import { IoCopyOutline } from 'react-icons/io5';

const CodeBlockContainer = styled.div`
  width: 100%;
  position: relative;
  pre {
    width: 100%;
    background-color: #0000008f !important;
    border-radius: 3px!important;
    border: 1px solid rgba(0,164,255,1) !important;
  }
`;

const CopyButtonContainer = styled.div`
    position: absolute;
    top: 11px;
    right: 3px;
    button {
        padding: 5px 6px;
    }
    span {
        position: absolute;
        right: 0;
        top: -35px;
        color: black;
        font-size: 14px;
        padding: 5px 8px;
        background-color: #32ff7e;
        border-radius: 5px;
    }
`

const CodeBlock = ({ code }) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
      if (isCopied) {
        const timer = setTimeout(() => {
          setIsCopied(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [isCopied]);
  return (
    <CodeBlockContainer>
      <SyntaxHighlighter language="bash" style={nightOwl}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code}>
        <CopyButtonContainer>
            <Button color="BLUE" icon={<IoCopyOutline />} title="Nhấn vào đây để copy code" onClick={() => setIsCopied(true)}/>
            {isCopied && <span> Copied </span>}
        </CopyButtonContainer>
      </CopyToClipboard>
    </CodeBlockContainer>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeBlock;