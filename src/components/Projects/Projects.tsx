import { motion } from "framer-motion";
import styled from "styled-components";
import LCK from "../../images/LCK.png";
import LCK2 from "../../images/LCK2.png";
import IU from "../../images/IU.png";
import Weather from "../../images/weather.png";
import Weather2 from "../../images/weather2.png";
import nflix from "../../images/nflix.png";
import nflix2 from "../../images/nflix2.png";
import { useEffect, useRef, useState } from "react";

const Box = styled.div`
  align-self: center;
  height: 100vh;
  display: grid;
  grid-template-columns: 70vw 30vw;
  @media (max-width: 1200px) {
    grid-template-columns: 100vw;
    grid-template-rows: 80vw 20vw;
  }
`;

const Preview = styled.div<{ img: string }>`
  margin: 2.5vw;
  background: ${(props) => `url(${props.img})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.8s;
  animation: 0.8s opacity;
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const List = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0px;
  & h1 {
    font-size: 3.2em;
    font-weight: 600;
    margin-bottom: 50px;
    font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
  }
`;
const Project = styled(motion.div)`
  margin: 16px;
  font-size: 2em;
  font-weight: 500;
  transition: 0.9s;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  & h2:hover{
    color : ${props=>props.theme.orange};
    cursor: pointer;
  }
`;


const Image = styled(motion.img)`
  padding: 15px 5px;
  `;

const parent = {
  hidden: {  },
  visible: {
    transition: {
      delay: 1,
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.8,
    },
  },
};

const child = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const imgArr = [LCK, LCK2, IU, Weather, Weather2, nflix, nflix2];
const proArr = [
  "LCK E-sports",
  "IU Album Grid Design",
  "City's Weather Search",
  "Netflix Clone Coding",
];

function Projects() {
  const [count, setCount] = useState(0);
  const savedCallBack = useRef(setCount);
  const onMouseHover = (e: number) => {
    let i = 0;
    switch (e) {
      case 0:
        i = 0;
        break;
      case 1:
        i = 2;
        break;
      case 2:
        i = 3;
        break;
      case 3:
        i = 5;
        break;
    }
    setCount(i);
  };
  useEffect(() => {
    savedCallBack.current = setCount;
  }, [setCount]);

  useEffect(() => {
    const tic = () => {
      savedCallBack.current((pre) => (pre > 5 ? 0 : pre + 1));
    };
    const timer = setInterval(tic, 3000);
    return () => clearInterval(timer);
  }, [setCount]);

  return (
    <Box id="projects">
      <Preview key={count} img={imgArr[count]} />
      <List variants={parent} initial="hidden" animate="visible">
        <h1>My own Projects</h1>
        {proArr.map((a, i) => (
          <Project key={i} variants={child} onHoverStart={() => onMouseHover(i)}>
            <h2>{a}</h2>
          </Project>
        ))}
      </List>
    </Box>
  );
}

export default Projects;
