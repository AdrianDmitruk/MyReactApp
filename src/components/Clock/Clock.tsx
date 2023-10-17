import { FC, useState, useEffect } from "react";

export const Clock: FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <p>{time}</p>
    </>
  );
};
