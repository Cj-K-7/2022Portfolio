import { useEffect, useRef, useState } from "react";
import { ClockFrame, Hour, Hr, Min , Mn, Sec, Sc} from './styled';
import clock from "../../images/clock.png";

interface Time {
  hour: number;
  min: number;
  sec: number;
}

function Clock() {
  const [time, setTime] = useState<Time>({ hour: 0, min: 0, sec: 0 });
  const getTime = () => {
    const day = new Date();
    const deg = 6;
    setTime({
      hour: day.getHours() * 30,
      min: day.getMinutes() * deg,
      sec: day.getSeconds() * deg,
    });
  };

  const savedCallBack = useRef(getTime);

  useEffect(() => {
    savedCallBack.current = getTime;
  }, [getTime]);

  useEffect(() => {
    const tic = () => {
      savedCallBack.current();
    };
    const timer = setInterval(tic, 1000);
    return () => clearInterval(timer);
  }, [getTime]);

  return (
    <ClockFrame img={clock}>
      <Hour>
        <Hr hour={time.hour} min={time.min} />
      </Hour>
      <Min>
        <Mn min={time.min} />
      </Min>
      <Sec>
        <Sc sec={time.sec} />
      </Sec>
    </ClockFrame>
  );
}

export default Clock;
