import { useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Box, Div, Left, Li, Pr, Right, Sb, Title } from "./styled";

const history = [
  "삼성전자 : LED 사업부",
  "KT CS 강원랜드 사업부",
  "(주)olulo KICKGOING",
  "(주)나인투원 elecle",
  "",
  "",
  "프론트엔드 프로그래머를 향해",
];

const ocupy = [
  `반도체 설비 엔지니어
  신규 설비 설치 담당`,
  `하이원 리조트 CS 상담
영어권 고객 안내`,
  `전동킥보드 메카닉
    서비스 운영 매니저
   메카닉 매니저`,
  "운영 매니저",
  "",
  "",
];

const list = history.map((a, i) => {
  return { company: a, ocupy: ocupy[i] };
});

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      delayChildren: 1,
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

function History() {
  const { scrollY } = useViewportScroll();
  useEffect(()=>{},[])
  return (
    <Box>
        <>
          <Title variants={parent} initial={{opacity: 0}} animate="visible">
            지나온 경력 <br />
            CAREER
          </Title>
          <Div variants={parent} initial="hidden" animate="visible">
            <Left>
              {list
                .filter((a, i) => i % 2 === 0)
                .map((a, i) => (
                  <Li key={i} variants={child}>
                    <Pr>{a.company}</Pr>
                    <Sb>{a.ocupy}</Sb>
                    <Pr />
                  </Li>
                ))}
            </Left>
            <Right>
              {list
                .filter((a, i) => i % 2 === 1)
                .map((a, i) => (
                  <Li key={i} variants={child}>
                    <Pr>{a.company}</Pr>
                    <Sb>{a.ocupy}</Sb>
                    <Pr />
                  </Li>
                ))}
            </Right>
          </Div>
        </>
    </Box>
  );
}

export default History;
