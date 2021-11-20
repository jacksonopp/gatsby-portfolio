require("./src/css/index.css");
const React = require("react")

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <div>{element}</div>
}