import styled from "styled-components";

export const ClockFrame = styled.div<{ img: string }>`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => `url(${props.img})`};
  background-size: cover;
  border: 3.5px solid ${(props) => props.theme.white};
  border-radius: 50%;
  box-shadow: 0 10px 10px rgba(30, 30, 30, 0.1),
    inset 0 8px 10px rgba(30, 30, 30, 0.1);
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    z-index: 10;
  }
`;
export const Hour = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
`;
export const Hr = styled.div<{ hour: number; min: number }>`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  ${(props) => `transform: rotateZ(${props.hour + props.min / 12}deg);`}
  &::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 40px;
    background-color: ${(props) => props.theme.black};
    border-radius: 3px 3px 0 0;
  }
`;

export const Min = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
`;
export const Mn = styled.div<{ min: number }>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  ${(props) => `transform: rotateZ(${props.min}deg);`}
  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 50px;
    background-color: ${(props) => props.theme.blue};
    border-radius: 3px 3px 0 0;
  }
`;
export const Sec = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
`;
export const Sc = styled.div<{ sec: number }>`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  ${(props) => `transform: rotateZ(${props.sec}deg);`}
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 70px;
    background-color: ${(props) => props.theme.red};
    border-radius: 3px 3px 0 0;
  }
`;