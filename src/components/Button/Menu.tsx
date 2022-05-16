import React, { useState } from "react"
import styled from "styled-components"

const Toggle = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
    &::before{
        content: '';
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: white;
        transition: .2s;
        transform: translateY(-10px);
        box-shadow: 0 10px 0 white;
    }
    &::after{
        content: '';
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: white;
        transition: .2s;
        transform: translateY(10px);
    }
    &.active{
        &::before{
        content: '';
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: white;
        transition: .2s;
        transform: rotateZ(45deg);
        box-shadow: 0 0px 0 white;
    }
    &::after{
        content: '';
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: white;
        transition: .2s;
        transform: rotateZ(-45deg);
    }
    }
`

function Menu() {
    const [isOpened, setIsOpened] = useState(false);
    const onClick = (event : React.MouseEvent<HTMLDivElement>) =>{
        const {currentTarget}=event
        setIsOpened(prev=>!prev);
        isOpened ? currentTarget.classList.add('active') : currentTarget.classList.remove('active');
    }
  return (
    <Toggle onClick={onClick}/>
  )
}

export default Menu