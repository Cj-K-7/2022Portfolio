import { Div, Left, Li, Pr, Right, Sb, Title } from "./styled";

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
  "반도체 설비 엔지니어",
  "하이원 리조트 CS 상담 / 영어권 고객 안내",
  "서비스 운영 관리 / 메카닉 매니저",
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
      delay: 6,
      delayChildren: 6,
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
  return (
    <>
      <Title variants={parent} initial="hidden" animate="visible">
        지나온 경력
      </Title>
      <Div variants={parent} initial="hidden" animate="visible">
        <Left>
          {list
            .filter((a, i) => i % 2 === 0)
            .map((a) => (
              <Li variants={child}>
                <Pr>{a.company}</Pr>
                <Sb>{a.ocupy}</Sb>
                <Pr />
              </Li>
            ))}
        </Left>
        <Right>
          {list
            .filter((a, i) => i % 2 === 1)
            .map((a) => (
              <Li variants={child}>
                <Pr>{a.company}</Pr>
                <Sb>{a.ocupy}</Sb>
                <Pr />
              </Li>
            ))}
        </Right>
      </Div>
    </>
  );
}

export default History;
