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
      <div className={style["info-container"]}>
        <div className={style["text-container-bordered"]}>
          <p className={style["p"]}>IP :</p>
          <p className={style["p-fetched"]}>{fetchIpData.ip}</p>
        </div>
        <div className={style["text-container"]}>
          <p className={style["p"]}>Country : </p>
          <p className={style["p-fetched"]}>{fetchIpData.country}</p>
        </div>
        <div className={style["text-container"]}>
          <p className={style["p"]}>City : </p>
          <p className={style["p-fetched"]}>{fetchIpData.city}</p>
        </div>
        <div className={style["text-container"]}>
          <p className={style["p"]}>Region : </p>
          <p className={style["p-fetched"]}>{fetchIpData.region}</p>
        </div>
        <div className={style["text-container"]}>
          <p className={style["p"]}>Timezone : </p>
          <p className={style["p-fetched"]}>{fetchIpData.timezone}</p>
        </div>
      </div>
    </section>
  );
}

export default App;
