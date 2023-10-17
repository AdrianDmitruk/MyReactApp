import { FC } from "react";
import { TaskBlock } from "../../components/TaskBlock/TaskBlock";
import { HighlightText } from "../../components/HighlightText/HighlightText";
import { Icon } from "../../components/Icon/Icon";

import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import { Accordion } from "../../components/Accordion/Accordion";
import { Panel } from "../../components/Accordion/Panel/Panel";

export const DopPage: FC = () => {
  return (
    <>
      <TaskBlock
        title="Задание на React.cloneElement"
        text="Создайте новый компонент HighlightText, который будет принимать свойство color и использовать React.cloneElement, чтобы окрасить текст в указанный цвет."
      >
        <HighlightText color="red">This text should be red</HighlightText>
      </TaskBlock>

      <TaskBlock
        title="Задание на React.cloneElement"
        text="Создайте компонент Icon, который будет принимать иконку в качестве свойства и использовать React.cloneElement, чтобы отобразить переданную иконку."
      >
        <Icon icon={<AddToQueueIcon color="primary" />} />
      </TaskBlock>

      <TaskBlock
        title="Задание на children prop и React.Children"
        text="children prop и React.Children"
        liFirst="Создайте компонент Accordion, который будет использоваться для создания аккордеона с развертывающимися панелями. Компонент должен принимать props.children, который будет массивом панелей аккордеона."
        liSecond="Используйте React.Children.map, чтобы добавить функциональность открытия и закрытия каждой панели при щелчке на ее заголовке."
        liThird="Попробуйте усовершенствовать компонент Accordion, чтобы он мог открывать только одну панель одновременно, закрывая остальные при открытии новой."
      >
        <Accordion>
          <Panel title="Панель 1" isOpen={false} onPanelClick={() => {}}>
            Контент 1
          </Panel>
          <Panel title="Панель 2" isOpen={false} onPanelClick={() => {}}>
            Контент 2
          </Panel>
          <Panel title="Панель 3" isOpen={false} onPanelClick={() => {}}>
            Контент 3
          </Panel>
        </Accordion>
      </TaskBlock>
    </>
  );
};
