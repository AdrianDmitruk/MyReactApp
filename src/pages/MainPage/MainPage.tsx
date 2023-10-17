import { FC } from "react";
import { TaskBlock } from "../../components/TaskBlock/TaskBlock";
import { Greeting } from "../../components/Greeting/Greeting";
import Counter from "../../components/Counter/Counter";
import { Clock } from "../../components/Clock/Clock";

export const MainPage: FC = () => {
  return (
    <>
      <TaskBlock
        title="Задание 1"
        text="Создайте новый проект React с использованием Create React App. Назовите его MyReactApp. Убедитесь, что проект успешно создан."
        responseText="Создал и убедился =)"
      />
      <TaskBlock
        title="Задание 2"
        text="Исследуйте структуру проекта, созданного с помощью Create React App. Ответьте на следующие вопросы:"
        liFirst="В каком каталоге находится исходный код вашего приложения?"
        liSecond="Где хранятся статические файлы, такие как HTML?"
        liThird="Какие файлы и каталоги относятся к зависимостям проекта?"
        responseLiFirst="Исходный код находиться в каталоге src. Путь MyReactApp/src"
        responseLiSecond="Статические файлы, находятся в public."
        responseLiThird="В корневом каталоге MyReactApp. Файл package.json содержит информацию о зависимостях JS и node_modules"
      />
      <TaskBlock
        title="Задание 3"
        text="Создайте новый функциональный компонент с именем Greeting. Этот компонент должен выводить на экран приветствие, например, Привет, мир!."
        responseText="Создал"
      />

      <TaskBlock
        title="Задание 4"
        text="В компоненте Greeting используйте JSX для отображения текста приветствия. Затем вставьте этот компонент в файл src/App.js и выведите его на странице."
      >
        <Greeting />
      </TaskBlock>
      <TaskBlock
        title="Задание 5"
        text="Расширьте компонент Greeting, чтобы он мог принимать имя пользователя в качестве свойства (props) и выводить приветствие с именем пользователя. Вызовите компонент с разными именами пользователей."
      >
        <Greeting name="Адриан" />
      </TaskBlock>
      <TaskBlock
        title="Задание 6"
        text="Создайте классовый компонент с именем Counter. Добавьте в него состояние (state) в виде счетчика, начальное значение которого равно 0. Выведите счетчик на страницу и добавьте кнопки для увеличения и уменьшения его значения."
      >
        <Counter />
      </TaskBlock>
      <TaskBlock
        title="Задание 7"
        text="Это дополнительное задание, выполните его по желанию."
        liFirst="Создайте еще один компонент, который будет отображать текущее время и обновлять его каждую секунду с использованием функции setInterval."
        liSecond="Стилизуйте компоненты."
      >
        <Clock />
      </TaskBlock>
    </>
  );
};
