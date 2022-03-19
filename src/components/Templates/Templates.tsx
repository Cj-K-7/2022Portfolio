import styled from "styled-components";
import Contacts from "../Contacts/Contacts";
import History from "../History/History";
import Projects from "../Projects/Projects";
import Stacks from "../Stacks/Stacks";

const Box = styled.div`
  z-index: 0;
  flex: flex;
  flex-direction: column;
  transition: 0.96s ease-in-out;
`;

const Footer = styled.div`
  position: fixed;
  background-color: ${props=> props.theme.white};
  left:0;
  bottom : 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  @media (max-width : 1200px) {
    position: static;
    flex-direction: column;
    align-items: center;
  }
`

interface IGridProps {
  refer: React.RefObject<HTMLDivElement>;
}

function Templates({ refer }: IGridProps) {
  return (
    <Box ref={refer}>
      <Projects/>
      <History />
      <Footer>
        <Stacks />
        <Contacts />
      </Footer>
    </Box>
  );
}

export default Templates;
