import "./style/Global.tsx";
import styled from "styled-components";
import Layer from "./components/Layer/Layer";
import Clock from "./components/Clock/Clock";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


function App() {
  return (
    <Container>
      <Layer/>
      <Clock/>
    </Container>
  );
}

export default App;
