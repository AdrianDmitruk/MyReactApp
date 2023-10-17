import { FC } from "react";

interface GreetingProps {
  name?: string;
}

export const Greeting: FC<GreetingProps> = ({ name }) => {
  return <>{name ? <p>Привет, {name}!</p> : <p>Привет, мир!</p>}</>;
};
