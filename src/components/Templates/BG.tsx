import anime from "animejs";
import { useEffect } from "react";
import styled from "styled-components";

const Position = styled.div`
    position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${props=>props.theme.black};
  z-index: -1;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
  transform-style: preserve-3d;
  & .block {
    position: relative;
    width: 5vw;
    height: 10vh;
    box-sizing: border-box;
    background-color: ${props=>props.theme.white};
    transform-style: preserve-3d;
  }
`;

function BG() {
    useEffect(()=>{

        const container = document.getElementById("container");
        for (let i = 0; i <= 200; i++) {
      let block = document.createElement("div");
      block.classList.add('block');
      container?.appendChild(block);}
  let block = document.getElementsByClassName('block');
  const animation = anime.timeline({
      targets: block,
      easing: "easeInOutExpo",
      delay: anime.stagger(10, { start: 50 }),
    });
    
    animation
    .add({
        scale: 0,
        translateX: () => anime.random(400, 2000),
        translateY: () => anime.random(500, 2000),
        rotate: () => anime.random(-360, 360),
        duration: () => anime.random(500, 2000),
    })
},[])
    
  return (
    <Position>
      <Container id="container"></Container>
    </Position>
  );
}

export default BG;
