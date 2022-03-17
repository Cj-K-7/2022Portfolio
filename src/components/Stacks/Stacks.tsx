import { motion } from "framer-motion";
import styled from "styled-components";
import reactIcon from "../../images/react.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import js from "../../images/js.png";
import ts from "../../images/ts.png";
import styledpng from "../../images/styled.png";
import motionpng from "../../images/motion.png";

const images = [css, html, js, ts, reactIcon, styledpng, motionpng];
const Div = styled(motion.div)`
  width: 90%;
`;
const Image = styled(motion.img)`
  padding: 15px 20px;
`;

const parent = {
  hidden: { opacity : 0 },
  visible: {
    opacity:1,
    transition: {
      delay : 2,
      delayChildren: 2.5,
      staggerChildren: 0.5,
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
  const size = 80;
  return (
    <Div variants={parent} initial="hidden" animate="visible">
      <h1>This Page made by using </h1>
      {images.map((image) => (
        <Image variants={child} width={size} src={image} />
      ))}
    </Div>
  );
}

export default Stacks;
