import { motion } from "framer-motion";
import styled from "styled-components";
import me from "../../images/me.jpg";

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const IMG = styled(motion.div)<{ img: string }>`
  width: 400px;
  height: 400px;
  background-position: -150px -160px;
  background-image: url(${(props) => props.img});
  border-radius: 200px;
`;
const Description = styled(motion.div)`
    margin-left: 80px;
    font-size: 20px;
  & h1 {
    font-size: 28px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;
const Props = styled.ol`
  & li {
    padding: 10px;
  }
`;
const Lang = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & li {
    padding: 10px;
    &::before{
        content: "⭐ ";
    }
  }
`;

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.3,
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

function About() {
  return (
    <Container variants={parent} initial='hidden' animate="visible" id="About">
      <IMG variants={child} img={me} />
      <Description variants={child} >
          <h1>김창주</h1><span>created at 1991</span>
        <h1>저는 이런 사람입니다.</h1>
        <Props>
          <li>생각을 구체화하고, 형태를 갖추는 것을 좋아합니다.</li>
          <li>어려운 과제를 이뤘을 때 성취감을 얻습니다.</li>
          <li>
            모르는 것에 거부감을 느끼기보다, 어떤 것인지 찾아보는 성격입니다.
          </li>
        </Props>
        <h1>공부 중인 언어.</h1>
        <Lang>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>REACT.js</li>
          <li>NEXT.js</li>
        </Lang>
      </Description>
    </Container>
  );
}

export default About;
