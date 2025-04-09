import React from "react";//rect and react dom coming from node module
import { createRoot } from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title", key: "h1" }, "Heading 1");//react coming from import react ,cE from node
const heading2 = React.createElement("h2", { id: "title", key: "h2" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [heading1, heading2]);

const root = createRoot(document.getElementById("root"));
root.render(container);


// const heading = React.createElement("h1", {id:"title"}, "Hello from React");

// const root = ReactDOM.createRoot(document.getElementById("root")); 

// root.render(heading); 