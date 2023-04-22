import React from "react";
import InputForm from "../InputForm";
import Empty from "./Empty";
import LabelTasks from "./LabelTasks";
import TaskCard, { Task } from "./TaskCard";
import styles from "./styles.module.css";

const TasksList: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const tasksDoneCounter = tasks.filter(
    (task) => task?.status === "done"
  ).length;

  const handleAddTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const handleRemoveTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id: number) => {
    const currentState = tasks.find((task) => task.id === id)?.status;
    const newState = currentState === "pending" ? "done" : "pending";

    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, status: newState } : task
      )
    );
  };

  return (
    <main className={styles.container}>
      <InputForm
        className={styles.formInput}
        placeholder="Adicione uma nova tarefa"
        onAddTask={handleAddTask}
      />

      <section className={styles.listWrapper}>
        <header>
          <LabelTasks
            title="Tarefas criadas"
            counter={tasks?.length}
            textColor="var(--color-blue)"
          />

          <LabelTasks
            title="Concluídas"
            counter={tasksDoneCounter}
            total={tasks?.length}
            textColor="var(--color-purple)"
          />
        </header>

        <div className={styles.listContent}>
          {tasks.length ? (
            <ul>
              {tasks?.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDeleteTask={handleRemoveTask}
                  onToggleTask={handleToggleTask}
                />
              ))}
            </ul>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
};

export default TasksList;
