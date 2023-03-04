import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const BUTTON_COLORS = {
  WHITE: { backgroundColor: '#FFFFFF', color: '#000000' },
  GREEN: { backgroundColor: '#2BC784', color: '#FFFFFF' },
  ORANGE: { backgroundColor: '#fb6340', color: '#FFFFFF' },
  BLUE: { backgroundColor: 'linear-gradient(159deg, rgba(34,97,195,1) 25%, rgba(0,164,255,1) 51%, rgba(0,207,255,1) 74%);', color: '#FFFFFF' },
  GRADIENT: { backgroundColor: 'linear-gradient(323deg, rgba(0,0,0,1) 25%, rgba(32,101,255,1) 100%);', color: "#FFFFFF" },

}

const Button = ({ color, icon, text, ...props }) => {
  const ButtonWrapper = styled.button`
    background: ${BUTTON_COLORS[color].backgroundColor};
    color: ${BUTTON_COLORS[color].color};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all .15s ease;
    padding: 10px 12px;
    border-radius: 5px;
    cursor: pointer;
    gap: 5px;
    &:hover { 
      transform: translateY(-2px); 
      box-shadow: 0px 2px 5px 0 #80808082;
    }
    .button-icon {
      font-size: 20px;
    }
    .button-text {
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
    }`

  return (
    <ButtonWrapper {...props}>
      {icon && <div className="button-icon">{icon}</div>}
      {text && <div className="button-text">{text}</div>}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(BUTTON_COLORS)).isRequired,
  icon: PropTypes.node,
  text: PropTypes.string,
  className: PropTypes.string,
}

export default Button;



