import React from "react";

import styles from "./styles.module.css";

interface LabelTasksProps {
  title: string;
  counter?: number;
  total?: number;
  textColor?: string;
}

const TableTasks: React.FC<LabelTasksProps> = ({
  counter = 0,
  total,
  title,
  textColor,
}) => {
  return (
    <div className={styles.labelBadgeContainer}>
      <span
        style={{
          color: textColor,
        }}
      >
        {title}
      </span>
      <span className={styles.badge}>
        {total ? `${counter} de ${total}` : counter}
      </span>
    </div>
  );
};

export default TableTasks;
