import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import EntryPoint from "./EntryPoint";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<EntryPoint />, document.getElementById("root"));
serviceWorker.unregister();
