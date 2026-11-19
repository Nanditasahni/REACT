

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
const jsxHeading=<h1 id="heading"> i am react in jsx 😁</h1>

// const fn1=()=>true;
 // if we write {} then we use return ture other wise there is no need to write return  
// const fn2=()=>{
//     return ture;
// }

///react functional component
//react component
const Title=()=>(
    <h1  className ="head" tabIndex="5"> hey i man ract using JSX😁</h1>
);
const HeadingComponent=()=>(
    <div id="container">
        <Title/> 
      <h1 className="heading">Namaste react functional component</h1>;
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);  

// we can not render HeadingComponent like root.render(HeadingComponent)
// beacose it is component not element so we wrape int on page like 
// root.render(<Headingcomponent/>)