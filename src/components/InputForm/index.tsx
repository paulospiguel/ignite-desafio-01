import React from "react";
import plusCircle from "../../assets/plusCircle.svg";

import { Task } from "../TasksList/TaskCard";
import styles from "./styles.module.css";

interface InputFormProps extends React.HTMLAttributes<HTMLFormElement> {
  placeholder?: string;
  onAddTask: (newTask: Task) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  placeholder,
  onAddTask,
  ...props
}) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      alert("Digite uma tarefa");
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      description: inputValue,
      status: "pending",
      createdAt: new Date().toLocaleDateString("pt-BR"),
    };

    onAddTask(newTask);
    setInputValue("");
  };

  return (
    <form
      {...props}
      onSubmit={handleCreateTask}
      className={`${styles.inputGroupForm} ${props.className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button type="submit">
        <span>Criar</span>
        <img src={plusCircle} alt="plus circle icon" />
      </button>
    </form>
  );
};

export default InputForm;
