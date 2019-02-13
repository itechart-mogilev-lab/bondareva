import { Controller } from "./controller";
import "./style.css";

let inputClass = "input_disable";

let controller = new Controller(5);
console.log(controller.getValue());

let div = document.createElement("div");
div.classList = ["container"];

let input = document.createElement("input");
input.classList.add("input");
input.classList.add(inputClass);

let btn = document.createElement("button");
btn.innerText = "Send";
btn.classList = ["button"];

btn.addEventListener("click", () => {
  if (input.classList.contains(inputClass)) {
    input.classList.remove(inputClass);
  } else {
    input.classList.add(inputClass);
  }
});

document.body.appendChild(div);
div.appendChild(input);
div.appendChild(btn);

controller.exponentiation(3);
console.log(controller.getValue());
