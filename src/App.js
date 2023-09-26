import { useState, useEffect } from "react";
import dotenv from "dotenv";
import style from "./App.module.css";
import { TbMapPinCode } from "react-icons/tb";

dotenv.config();

function App() {
  const [fetchIpData, fetchIpDataHandler] = useState({});

  function fetchIpFunction() {
    try {
      fetch(`https://ipinfo.io?token=${process.env.ACCESS_TOKEN}`)
        .then((response) => response.json())
        .then((data) => fetchIpData(data))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchIpFunction();
  });

  return (
    <section className={style["container"]}>
      <div className={style["icon-container"]}>
        <div className={style["icon"]}>
          <TbMapPinCode />
        </div>
      </div>
      <div className={style["info-container"]}></div>
    </section>
  );
}

export default App;
