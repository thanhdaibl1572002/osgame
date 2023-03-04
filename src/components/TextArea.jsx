import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 300px;
  flex-direction: column;
  gap: 10px;
`;

const TextAreaInput = styled.textarea`
  padding: 15px 15px 15px 60px;
  font-size: 16px;
  width: 100%;
  min-height: 150px;
  background-color: transparent;
  border: 2px solid rgba(0,164,255,1);
  transition: all 0.2s ease-in-out;
  color: white;
  border-radius: 5px;
  resize: ${(props) => props.resize};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &::placeholder {
    font-size: 15px;
    color: #ffffff8a;
    font-weight: 300;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 2.5px;
  top: 2.5px;
  z-index: 10;
  border-radius: 3px;
  border-right: 1px solid rgba(0,164,255,1);
  border-bottom: 1px solid rgba(0,164,255,1);
  background: linear-gradient(135deg,rgba(0,171,215,1) 20%,rgba(0,77,215,1) 50%,rgba(0,0,0,1) 50%,rgba(0,4,37,1) 75%);
  svg {
    font-size: 28px;
    color: white;
  }
`;

const TextArea = ({ enable, readOnly, rows, cols, resize, icon, placeholder, ...props }) => {
  return (
    <TextAreaWrapper>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <TextAreaInput
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        disabled={!enable}
        readOnly={readOnly}
        resize={resize}
        icon={icon}
        {...props}
      />
    </TextAreaWrapper>
  );
};

TextArea.propTypes = {
  enable: PropTypes.bool,
  readOnly: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  resize: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
};

export default TextArea;