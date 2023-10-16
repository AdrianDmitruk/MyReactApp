import { FC } from "react";
import { TaskBlock } from "./components/TaskBlock/TaskBlock";
import "./App.css";

const App: FC = () => {
  return (
    <>
      <TaskBlock title="Test" text="Test" />
    </>
  );
};

export default App;
