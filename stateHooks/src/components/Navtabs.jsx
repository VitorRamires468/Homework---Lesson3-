import { useState } from "react";
import classes from "./Navtabs.module.css";
function NavTabs() {
  const texts = [
    ["Gdasda", "dasdadasd"],
    ["asdasdasd", "asddaewq"],
    ["1123132", "sadsadasdsad"],
    ["12313213", "vitor"],
  ];
  const [count, setCount] = useState([]);
  return (
    <div>
      <div>
        <div className={classes.div}>
          <ul className={classes.lista}>
            <li
              onClick={() => {
                setCount(texts[0]);
              }}
            >
              Why React?
            </li>
            <li
              onClick={() => {
                setCount(texts[1]);
              }}
            >
              Core Features
            </li>
            <li
              onClick={() => {
                setCount(texts[2]);
              }}
            >
              Reloaded Resources
            </li>
            <li
              onClick={() => {
                setCount(texts[3]);
              }}
            >
              React vs JS
            </li>
          </ul>
        </div>
        <ul className={classes.content}>
          {count.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavTabs;
