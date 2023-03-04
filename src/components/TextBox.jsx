import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  min-width: 300px;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 15px 15px 15px 60px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 2px solid rgba(0,164,255,1);
  transition: all 0.2s ease-in-out;
  color: white;
  border-radius: 5px;
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
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  border-radius: 3px;
  border-right: 1px solid rgba(0,164,255,1);
  background: linear-gradient(135deg,rgba(0,171,215,1) 20%,rgba(0,77,215,1) 50%,rgba(0,0,0,1) 50%,rgba(0,4,37,1) 75%);
  svg {
    font-size: 28px;
    color: white;
  }
`;

const TextBox = ({ enable, readOnly, type, icon, placeholder, ...props }) => {
  return (
    <TextBoxWrapper>
      {icon && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        disabled={!enable}
        readOnly={readOnly}
        icon={icon}
        {...props}
      />
    </TextBoxWrapper>
  );
};

TextBox.propTypes = {
  enable: PropTypes.bool,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
};

export default TextBox;