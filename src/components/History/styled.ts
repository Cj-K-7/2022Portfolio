import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled(motion.div)`
  position: absolute;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  padding-top: 30px;
  font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
`;
export const Div = styled(motion.div)`
  margin-top: 130px;
  width: 100%;
  display: flex;
`;
export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: ${(props) => props.theme.blue};
    transform: translateX(3px);
    transform-origin: top;
    animation: 2.6s draw 7s linear;
    animation-fill-mode: forwards;
    @keyframes draw {
      0% {
        height: 0px;
      }
      100% {
        height: 100%;
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
  align-items: flex-start;
`;

export const Pr = styled.div`
  font-size: 1.3em;
  margin: 20px 20px 10px 20px;
  font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
  font-weight: 500;
`;
export const Sb = styled.span`
  font-size: 0.9em;
  margin: 0px 20px;
`;
