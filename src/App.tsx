import { Suspense, useState } from "react";
import { Button, Spin } from "antd";
import { AppRouter } from "./providers";
import styles from "./App.module.scss";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <body className={darkMode ? styles.darkTheme : ""}>
      <Suspense fallback={<Spin />}>
        <style>
          {`
          body {
            background-color: ${darkMode ? "rgb(35, 35, 35)" : "#fff"};
            color: ${darkMode ? "#fff" : "rgb(35, 35, 35)"};
          }
        `}
        </style>
        <Button onClick={toggleDarkMode} className={styles.button}>
          {darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </Button>
        <AppRouter />
      </Suspense>
    </body>
  );
}
