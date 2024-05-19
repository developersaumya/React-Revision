/**
 * <div id="root">
 *  <div id ="child">
 *      <h1>I am h1</h1>
 *  </div>
 * </div>
 *
 */

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "H1 from nested"),
  ),
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
