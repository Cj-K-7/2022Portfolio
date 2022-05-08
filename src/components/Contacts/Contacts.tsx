import { motion } from "framer-motion";
import { type } from "os";
import styled from "styled-components";
import { theme } from "../../style/them";
import { Github, Mail } from "../SVGs/Icons";

const Div = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  & a {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 10px 30px;
  }
  & a:hover {
    color: ${(props) => props.theme.sky};
    path {
      fill: ${(props) => props.theme.blue};
    }
  }
  & svg {
    margin: 0px 20px;
  }
  @media (max-width : 1200px) {
    flex-direction: column;
    justify-content: center;
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
  const svgSize = 60;

  const download = () =>{
    const download_anchor = document.createElement('a');
    const download_object = new Blob(['this is target'], {type : 'text/plain'})
    download_anchor.href = URL.createObjectURL(download_object);
    download_anchor.download = 'filename.txt';
    download_anchor.click();
  }

  return (
    <Div variants={parent} initial="hidden" animate="visible">
      <motion.a
        variants={child}
        href="https://github.com/Cj-K-7"
        target="_blank"
      >
        <Github width={svgSize} height={svgSize} fill={theme.white} />
        github.com/Cj-K-7
      </motion.a>
      <motion.a
        variants={child}
        onClick={() => {
          navigator.clipboard.writeText("kllt7059@gmail.com");
          alert("E-mail address copied!");
        }}
      >
        <Mail width={svgSize} height={svgSize} fill={theme.white} />
        kllt7059@gmail.com
      </motion.a>
    </Div>
  );
}

export default Contacts;
