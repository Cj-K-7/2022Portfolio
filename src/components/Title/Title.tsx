import React from "react";
import styled from "styled-components";

const TitleBox = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 6em;
  font-weight: 600;
  letter-spacing: 8px;
  color: ${(props) => props.theme.white};
  transition: 0.8s;
  span{
    transition: 0.5s;
  }
  &:hover{
    span:first-child{
        margin-right: 28px;
    }
    span:first-child:after{
        position: absolute;
        content: "'";
    }
    span:nth-child(3){
        margin-left: 56px;
        color : white;
        text-shadow: 0 0 4px #fff,
        0 0 12px #fff,
        0 0 32px #fff,
        0 0 64px #fff,
        0 0 128px #fff;
    }
  }
`;

interface ITitleProps {
    onClick : (event: React.MouseEvent<HTMLDivElement>)=>void;
}

function Title({onClick}:ITitleProps) {
  return (
    <TitleBox onClick={onClick}>
      <span>I</span><span>M</span><span>POSSIBLE</span>
    </TitleBox>
  );
}

export default Title;
