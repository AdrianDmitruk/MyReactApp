import { FC } from "react";

interface TaskBlockProps {
  title: string;
  text: string;
}

export const TaskBlock: FC<TaskBlockProps> = (props) => {
  const { title, text } = props;

  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
    </>
  );
};
