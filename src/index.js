import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";

import './style.css'

// Init VK  Mini App
bridge.send("VKWebAppInit");

let count = 0;

function updateApp(getLeft, getTop) {
  const App = (
    <div className="Main">
			<div className="score">{count}</div>
			<div className="button" onClick={clickButton} style={{left: getLeft+'%', top: getTop+'%'}}></div>
		</div>
  );
  ReactDOM.render(App, document.getElementById("root"));
}

function clickButton() {
  count++;
  updateApp(getRandomInt(0, 88), getRandomInt(0, 80));
}

updateApp(getRandomInt(0, 88), getRandomInt(0, 80));

if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}