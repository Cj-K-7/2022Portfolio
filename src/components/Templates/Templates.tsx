import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import About from "../About/About";
import Clock from "../Clock/Clock";
import Contacts from "../Contacts/Contacts";
import History from "../History/History";
import Projects from "../Projects/Projects";
import BG from "./BG";

const Box = styled.div`
  z-index: 0;
  flex: flex;
  flex-direction: column;
  transition: 0.96s ease-in-out;
  color: ${(props) => props.theme.white};
`;

const SideBar = styled(motion.div)`
  position: fixed;
  right: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-left: 5px solid ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black};
  &::before {
    font-weight: 500;
    position: absolute;
    border: 5px solid ${(props) => props.theme.white};
    border-right: 8px solid ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.black};
    border-radius: 20px 0px 0px 20px;
    padding: 10px 15px;
    top: 60px;
    left: -58px;
    writing-mode: vertical-lr;
    text-orientation: upright;
    content: "NAVIGATION";
  }
`;

const Menu = styled.a`
  color: inherit;
  font-size: 30px;
  cursor: pointer;
`;

const footVar = {
  init: {
    x: 300,
  },
  hover: {
    x: 0,
  },
};

interface IGridProps {
  refer: React.RefObject<HTMLDivElement>;
}

function Templates({ refer }: IGridProps) {
  const [render, setRender] = useState<JSX.Element>(About);
  return (
    <Box ref={refer}>
      <SideBar
        variants={footVar}
        initial="init"
        whileHover="hover"
        transition={{ duration: 0.73 }}
      >
        <Clock />
        <Menu href="#About" onClick={() => setRender(About)}>
          ABOUT ME
        </Menu>
        <Menu href="#Career" onClick={() => setRender(History)}>
          CAREER
        </Menu>
        <Menu href="#projects">MY PROJECTS</Menu>
        <Contacts />
      </SideBar>
      <BG />
      {render}
      <Projects />
    </Box>
  );
}

export default Templates;
