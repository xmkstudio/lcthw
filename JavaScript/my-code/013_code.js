const geometry = require("./013_geometry");
const myLog = require("./012_2");

let area51 = geometry.area(2.8);
let circ2 = geometry.circumference(6);

myLog.myLog(`Area: ${area51},\nCircumference: ${circ2}`);
