import React from "react";
import done from "../../assets/done.png";
import notDone from "../../assets/notDone.png";
import trash from "../../assets/trash.png";
import styles from "./styles.module.css";

export type Task = {
  id: number;
  description: string;
  status: string;
  createdAt: string;
};

interface TaskCardProps {
  task: Task;
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

enum Status {
  DONE = "done",
  PENDING = "pending",
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onDeleteTask,
  onToggleTask,
}) => {
  const isDone = task?.status === Status.DONE;

  const statusIcon = isDone ? done : notDone;

  return (
    <li className={styles.taskCardContainer}>
      <button type="button" onClick={() => onToggleTask(task.id)}>
        <img src={statusIcon} alt="status icon" />
      </button>
      <span
        style={{
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "#808080" : "var(--color-text)",
        }}
      >
        {task?.description}
      </span>
      <button type="button" onClick={() => onDeleteTask(task.id)}>
        <img src={trash} alt="trash icon" />
      </button>
    </li>
  );
};

export default TaskCard;
