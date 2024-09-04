import React, { useState, useEffect } from "react";

const NightModeSwitch = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("night-mode", isNightMode);
    const container = document.querySelector(".conteiner");
    if (container) {
      container.classList.toggle("night-mode", isNightMode);
    }
  }, [isNightMode]);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <button
      className={`night-mode-button ${isNightMode ? "night-mode" : ""}`}
      onClick={toggleNightMode}
    >
      Modo Noturno
    </button>
  );
};

export default NightModeSwitch;
