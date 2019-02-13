import { Controller } from "./controller";

let controller = new Controller(5);
console.log(controller.getValue());

controller.exponentiation(3);
console.log(controller.getValue());
// "@babel/core": "^7.2.2",
//     "@babel/preset-env": "^7.3.1",
//     "@babel/preset-stage-2": "^7.0.0",
