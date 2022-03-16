import { motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/them";

const Position = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  & div {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 100%;
  }
`;

const LayerPart = styled(motion.div)<{
  skew: number;
  color: string;
  x: number;
}>`
  box-shadow: -10px 0px 10px rgba(30, 30, 30, 0.5);
  transition: 0.6s;
  ${(props) =>
    `background-color: ${props.color};
   transform: skewX(${props.skew}deg) translateX(${props.x}px);
`}
  &:hover {
    box-shadow: -5px 0px 10px rgba(30, 30, 30, 0.5),
      -20px 0px 10px ${(props) => props.color};
  }
`;

const array = [
    theme.red,
    theme.sky,
    theme.white,
    theme.red,
    theme.sky,
    theme.white,
    theme.black,
    theme.black,
  ];

const degree = 45;

function Layer() {
    const onClick = (event:React.MouseEvent<HTMLDivElement>)=>{
        event.preventDefault();
        const {currentTarget}=event;
        console.log(currentTarget);
        currentTarget.style.transform = 'translateX(1000px)'
    }
  return (
    <Position>
      <Section>
        {array.map((color, index) => (
          <LayerPart
            onClick={onClick}
            key={index}
            skew={(index + 1) % 2 === 1 ? degree : -degree}
            color={color}
            x={
              (index + 1) % 2 === 1
                ? (index + 1) * 50 + 300
                : (index + 1) * 50 + 500
            }
          />
        ))}
      </Section>
    </Position>
  );
}

export default Layer;
