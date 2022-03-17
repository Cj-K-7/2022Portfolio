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
  grid-template-columns: 65vw 35vw;
  grid-template-rows: 30vh 50vh 20vh;
  transition: 0.96s ease-in-out;
  & div:first-child {
    grid-column: 1;
    grid-row: 1 / 3;
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
      </GridBox>
      <GridBox>
      <History />
      </GridBox>
      <GridBox></GridBox>
      <GridBox>
        <Stacks />
      </GridBox>
      <GridBox>
      <Contacts />
      </GridBox>
    </Box>
  );
}

export default GridTemplate;
