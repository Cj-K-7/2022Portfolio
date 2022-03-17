import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../style/them";
import { Github, Mail } from "../SVGs/Icons";

const Div = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  & a {
    font-size: 1.3em;
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 20px 30px;
  }
  & a:hover {
    color: ${(props) => props.theme.red};
    path {
      fill: ${(props) => props.theme.red};
    }
  }
  & svg {
    margin: 0px 20px;
  }
`;

const parent = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
        delay : .5,
      delayChildren: 0.9,
      staggerChildren: 0.5,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Contacts() {
  const svgSize = 75;
  return (
    <Div variants={parent} initial="hidden" animate="visible">
      <motion.a
        variants={child}
        href="https://github.com/Cj-K-7"
        target="_blank"
      >
        <Github width={svgSize} height={svgSize} fill={theme.black} />
        github.com/Cj-K-7
      </motion.a>
      <motion.a
        variants={child}
        onClick={() => {
          navigator.clipboard.writeText("kllt7059@gmail.com");
          alert("E-mail address copied!");
        }}
      >
        <Mail width={svgSize} height={svgSize} fill={theme.black} />
        kllt7059@gmail.com
      </motion.a>
    </Div>
  );
}

export default Contacts;
