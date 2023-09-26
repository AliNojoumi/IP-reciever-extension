import style from "./App.module.css";
import { TbMapPinCode } from "react-icons/tb";

function App() {
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
