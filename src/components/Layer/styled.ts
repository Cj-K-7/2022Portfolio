import styled from "styled-components";

export const Position = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: 1.6s;
  z-index: 10;
`;

export const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const LayerPart = styled.div<{
  index: number;
  skew: number;
  color: string;
  x: number;
}>`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  display: flex;
  bottom: 0;
  left: 50%;
  width: 200vw;
  height: 100%;
  box-shadow: -10px 0px 10px rgba(30, 30, 30, 0.5);
  transition: 1s;
  ${(props) =>
    `background-color: ${props.color};
   transform: skewX(${props.skew}deg) translateX(${props.x}px);
`}
  &:hover {
    box-shadow: -8px 0px 10px rgba(50, 50, 50, 0.3),
      -20px 0px 15px ${(props) => props.color};
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0px;
      background-color: white;
      animation: 0.33s bling 0.8s linear;
      z-index: 1;
      @keyframes bling {
        0% {
          height: 1px;
          transform: translateY(0);
          box-shadow: 0px 0px 10px 5px white;
        }
        50% {
          height: 20px;
          transform: translateY(-50vh);
          box-shadow: 0px 0px 60px 20px white;
        }
        100% {
          height: 50px;
          transform: translateY(-100vh);
          box-shadow: 0px 0px 10px 5px white;
        }
      }
    }
  }
  * {
    position: absolute;
    left: 450px;
    ${(props) =>
      `bottom: ${props.index%2 === 1 ? 360 : 140}px;
      color: ${props.color === props.theme.white ? props.theme.black : props.theme.white};
      transform: skewX(${-props.skew}deg);`}
  }
  img {
    height: 300px;
  }
  h1 {
    font-size: 5em;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(30, 30, 30, 0.3);
  }
`;
