import { Table } from "@features/main";
import { Button } from "antd";
import { useState } from "react";
import styles from "./Main.module.scss";

export const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <Button onClick={toggleDarkMode} className={styles.button}>
        {darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </Button>
      <Table />
    </div>
  );
};
