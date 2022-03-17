import styled from 'styled-components'

const SVG = styled.svg`
 & circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 8;
  stroke: ${props=> props.theme.black};
  opacity: 0.3;
 }
 & circle:nth-child(2){
   opacity: 1;
  stroke-dasharray: 377;
  transform: rotateZ(-90deg);
  animation: loading 4.5s;
  @keyframes loading {
    0%{
      stroke-dashoffset : 377;
    }
    100%{
      stroke-dashoffset: 0;
      display: none;
    }
  }
 }
`

function Circle() {
  return (
    <SVG>
    <circle cx={70} cy={70} r={60}></circle>
    <circle cx={-70} cy={70} r={60}></circle>
  </SVG>
  )
}

export default Circle