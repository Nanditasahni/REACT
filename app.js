

/**
 * <div id="parent">
 * <div id="children>
 * <h1>I am in h1 tag</h1>
 * <h2>i am in h2 tag</h2>
 * </div>
 * </div>
 * RectElement(object)->html (browser understands)
 */


///simple raect hai
        // const heading = React.createElement("h1", 
        //     {id:"heading"}, "Hello world from React");
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);

        //if we want to  pass multiple attribute we keetp ract in array

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hey I am React"
);
const jsxHeading=<h1 id="heading"> i am react in jsx</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);