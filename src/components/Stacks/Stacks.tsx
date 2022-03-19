import { motion } from "framer-motion";
import styled from "styled-components";
import reactIcon from "../../images/react.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import js from "../../images/js.png";
import ts from "../../images/ts.png";
import styledpng from "../../images/styled.png";
import motionpng from "../../images/motion.png";

const images = [html, css, js, ts, reactIcon, styledpng, motionpng];
const Div = styled(motion.div)`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 120px));
  align-items: center;
  & h1 {
    width: 50px;
    margin: 0px 5px;
    text-align: center;
  }
`;

const Image = styled(motion.img)`
  padding: 15px 5px;
`;

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.8,
    },
  },
};

const child = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function Stacks() {
  const size = 50;
  return (
    <Div variants={parent} initial="hidden" animate="visible">
      <h1> made by using </h1>
      {images.map((image) => (
        <Image variants={child} width={size} src={image} />
      ))}
    </Div>
  );
}

export default Stacks;
