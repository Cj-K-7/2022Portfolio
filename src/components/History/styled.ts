import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 30vw 70vw;
  @media (max-width : 1200px) {
    display :flex;
    flex-direction: column;
  }
`;

export const Title = styled(motion.div)`
  align-self: center;
  text-align: end;
  font-size: 40px;
  font-weight: 600;
  font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
`;
export const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: end;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: ${(props) => props.theme.blue};
    transform: translateX(3px);
    transform-origin: top left;
    animation: 1.6s draw 2s linear;
    animation-fill-mode: forwards;
    @keyframes draw {
      0% {
        height: 0px;
      }
      100% {
        height: 400px;
      }
    }
  }
`;
export const Li = styled(motion.div)``;
export const Right = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Pr = styled.div`
  font-size: 1.8em;
  margin: 0px 20px;
  margin-top: 30px;
  margin-bottom: 16px;
  font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
  font-weight: 500;
`;
export const Sb = styled.pre`
  font-size: 0.9em;
  margin: 0px 20px;
  line-height: 1.2em;
`;
