import React from "react";
import clipBoard from "../../assets/Clipboard.png";

import styles from "./styles.module.css";

const Empty: React.FC = () => {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipBoard} alt="clipboard icon" />
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};

export default Empty;
