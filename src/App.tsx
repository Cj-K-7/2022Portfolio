import styled from "styled-components";
import Layer from "./components/Layer/Layer";
import Title from "./components/Title/Title";
import GridTemplate from "./components/GridTemplate/GridTemplate";
import { useRef, useState } from "react";
import { theme } from "./style/them";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.black};
  transition: 0.8s;
`;

function App() {
  const [isTitleClicked, setClicked] = useState(false)
  const container = useRef<HTMLDivElement>(null);
  const history = useRef<HTMLDivElement>(null);
  const FadeAndLightUp = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    if (container.current)
      container.current.style.backgroundColor = `${theme.white}`;
    currentTarget.style.transform = "scale(4)";
    currentTarget.style.opacity = "0";
    setTimeout(() => {
      currentTarget.style.display = "none";
    }, 800);
    setClicked(true);
    // setTimeout(() => {
    //   if (history.current) history.current.style.zIndex = `0`;
    // }, 1200);
  };
  return (
    <Container ref={container}>
      {isTitleClicked? <GridTemplate refer={history} /> : null}
      <Title onClick={FadeAndLightUp} />
      {/* <Layer /> */}
    </Container>
  );
}

export default App;
