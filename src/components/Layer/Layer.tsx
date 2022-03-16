import React from "react";
import { theme } from "../../style/them";
import reactIcon from "../../images/react.png";
import { LayerPart, Position, Section } from "./styled";

const degree = 45;
const colors = [
  theme.blue,
  theme.sky,
  theme.white,
  theme.blue,
  theme.sky,
  theme.white,
  theme.black,
  theme.black,
];
const images = [
  reactIcon,
]

const array = colors.map((color,index)=>{return {color , icon : images[index]}})

function Layer() {
  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { currentTarget } = event;
    console.log(currentTarget);
    currentTarget.style.transform = "translateX(1000px)";
  };
  return (
    <Position>
      <Section>
        {array.map((item, index) => (
          <LayerPart
            onClick={onClick}
            key={index}
            skew={(index + 1) % 2 === 1 ? degree : -degree}
            color={item.color}
            x={
              (index + 1) % 2 === 1
                ? (index + 1) * 60 - 600
                : (index + 1) * 60 - 400
            }
          >
            <img src={item.icon} />
          </LayerPart>
        ))}
      </Section>
    </Position>
  );
}

export default Layer;
