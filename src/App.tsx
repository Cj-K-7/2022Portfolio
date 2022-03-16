import "./style/Global.tsx";
import styled from "styled-components";
import Clock from "./components/Clock/Clock";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function App() {

  return (
    <Container>
      <Clock/>

    </Container>
  );
}

export default App;
