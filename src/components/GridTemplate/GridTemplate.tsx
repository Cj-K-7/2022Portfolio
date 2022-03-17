import styled from "styled-components";
import Contacts from "../Contacts/Contacts";
import History from "../History/History";
import Stacks from "../Stacks/Stacks";

const Box = styled.div`
  z-index: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 75vw 25vw;
  grid-template-rows: 30vh 50vh 20vh;
  transition: 0.96s ease-in-out;
  & div:first-child {
    grid-column: 1;
    grid-row: 1 / 3;
  }
  & div:nth-child(3) {
    grid-row: 2 / 4;
  }
  & h1 {
    font-size: 1.1em;
    font-weight: 600;
    margin: 6px;
  }
`;

const GridBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

interface IGridProps {
  refer: React.RefObject<HTMLDivElement>;
}

function GridTemplate({ refer }: IGridProps) {
  return (
    <Box ref={refer}>
      <GridBox>
        <History />
      </GridBox>
      <GridBox>
        <Contacts />
      </GridBox>
      <GridBox>about me</GridBox>
      <GridBox>
        <Stacks />
      </GridBox>
    </Box>
  );
}

export default GridTemplate;
