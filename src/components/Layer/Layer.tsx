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
    height: 100vh;
  }
`;

const LayerPart = styled.div<{
  skeW: number;
  color: string;
  z: number;
  x: number;
}>`
  box-shadow: -10px 0px 10px rgba(30,30,30,0.5);
  ${(props) =>
    `background-color: ${props.color};
   transform: skewX(${props.skeW}deg) translateX(${props.x}px);
    z-index: ${props.z};`}
`;

function Layer() {
  const degree = 45;
  return (
    <Position>
      <Section>
        <LayerPart skeW={degree} color={theme.black} z={-10} x={700} />
        <LayerPart skeW={-degree} color={theme.white} z={-11} x={400} />
        <LayerPart skeW={-degree} color={theme.blue} z={-13} x={300} />
        <LayerPart skeW={-degree} color={theme.sky} z={-15} x={200} />
        <LayerPart skeW={degree} color={theme.sky} z={-12} x={600} />
        <LayerPart skeW={degree} color={theme.white} z={-14} x={500} />
        <LayerPart skeW={degree} color={theme.blue} z={-16} x={400} />
      </Section>
    </Position>
  );
}

export default Layer;
