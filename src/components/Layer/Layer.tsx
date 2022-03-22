import React, { useRef } from "react";
import { theme } from "../../style/them";
import reactIcon from "../../images/react.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import js from "../../images/js.png";
import ts from "../../images/ts.png";
import next from "../../images/next.png";

import { LayerPart, Position, Section } from "./styled";

const degree = 45;
const colors = [
  theme.white,
  theme.blue,
  theme.black,
  theme.yellow,
  theme.white,
  theme.orange,
  theme.black,
];
const images = [next, reactIcon, ts, js, css, html, null];

const description = [
  "",
  "Be Programmer",
  "",
  "Absolutely",
  "",
  "Begin with...",
  "2022 PORTFOLIO",
];

const array = colors.map((color, index) => {
  return { color, icon: images[index], description: description[index] };
});

function Layer() {
  const ref = useRef<HTMLDivElement>(null);
  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    currentTarget.style.transform = "translateX(100vw)";
  };
  const onlastClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    currentTarget.style.transform = "translateX(1000vw)";
    if (ref.current) ref.current.style.transform = "translateX(1000vw)";
  };
  return (
    <Position ref={ref}>
      <Section>
        <LayerPart
          onClick={onlastClick}
          index={9}
          skew={degree}
          color={theme.sky}
          x={-600}
        ><h1>Wellcom to My World</h1></LayerPart>
        {array.map((item, index) => (
          <LayerPart
            onClick={onClick}
            key={index}
            index={index}
            skew={(index + 1) % 2 === 1 ? -degree : degree}
            color={item.color}
            x={
              (index + 1) % 2 === 1
                ? (index + 1) * 50 - 400
                : (index + 1) * 50 - 600
            }
          >
            {item.icon && <img src={item.icon} />}
            {item.description && <h1>{item.description}</h1>}
          </LayerPart>
        ))}
      </Section>
    </Position>
  );
}

export default Layer;
