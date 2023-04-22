import React from "react";
import logoRocket from "../../assets/rocket.png";
import logoTitle from "../../assets/todo.png";

import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <img src={logoRocket} alt="Rocket image" />
      <img src={logoTitle} alt="todo title logo" />
    </header>
  );
};

export default Header;
