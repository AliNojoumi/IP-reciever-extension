import { useState, useEffect } from "react";
import style from "./App.module.css";
import { TbMapPinCode } from "react-icons/tb";

function App() {
  const [fetchIpData, fetchIpDataHandler] = useState({});

  function fetchIpFunction() {
    try {
      fetch(`https://ipinfo.io?token=54e3c02870b938`)
        .then((response) => response.json())
        .then((data) => {
          fetchIpDataHandler(data);
          console.log(data);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchIpFunction();
  }, []);

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
