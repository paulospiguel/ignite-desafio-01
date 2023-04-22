import React from "react";

import styles from "./styles.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      Feito com ❤ por <a href="https//github.com/paulospiguel">Paulo Spiguel</a>
    </footer>
  );
};

export default Footer;
