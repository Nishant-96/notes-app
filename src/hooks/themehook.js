import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light-mode");
  useEffect(() => setTheme(localStorage.getItem("theme") ?? "light-mode"), []);

  const changeTheme = () => {
    localStorage.setItem(
      "theme",
      theme === "dark-mode" ? "light-mode" : "dark-mode"
    );
    setTheme(localStorage.getItem("theme"));
  };

  return { theme, changeTheme };
};

export { useTheme };
