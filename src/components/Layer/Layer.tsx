import styled from "styled-components";
import { theme } from "../../style/them";

const Position = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
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

const LayerPart = styled.div<{
  skew: number;
  color: string;
  x: number;
}>`
  box-shadow: -10px 0px 10px rgba(30, 30, 30, 0.5);
  ${(props) =>
    `background-color: ${props.color};
   transform: skewX(${props.skew}deg) translateX(${props.x}px);
`}
`;

function Layer() {
  const degree = 45;
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
  return (
    <Position>
      <Section>
        {array.map((color, index) =>
          <LayerPart
            skew={(index+1) % 2 === 1 ? degree : -degree}
            color={color}
            x={(index+1) % 2 === 1 ? (index+1) * 50+300 : (index+1) * 50+500}
          />
        )}
      </Section>
    </Position>
  );
}

export default Layer;
