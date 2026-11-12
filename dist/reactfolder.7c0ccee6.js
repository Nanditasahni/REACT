/**
 * <div id="parent">
 * <div id="children>
 * <h1>I am in h1 tag</h1>
 * <h2>i am in h2 tag</h2>
 * </div>
 * </div>
 * RectElement(object)->html (browser understands)
 */ ///simple raect hai
// const heading = React.createElement("h1", 
//     {id:"heading"}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//if we want to  pass multiple attribute we keetp ract in array
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am in h1 tag"),
    React.createElement("h2", {}, "I am in h2 tag")
]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=reactfolder.7c0ccee6.js.map
