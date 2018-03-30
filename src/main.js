import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import {
	Provider
} from "react-redux";
import store from "./store/store.js";
import iconfont from "../static/font/iconfont.css";
import fontS from "./utils/fontSet.js"
ReactDOM.render(<Provider store={store}>
	<App /></Provider>,
	document.getElementById("root")
)