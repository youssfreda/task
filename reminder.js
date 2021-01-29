import { createEvent } from "./calctime.js";

const input = document.querySelector(".add-box input"),
  addButton = document.querySelector(".plus"),
  list = document.querySelector(".tasks-list"),
  TimeDate = document.querySelector("#eventtime");
addButton.onclick = (_) => {
  createEvent(input, TimeDate, list);
};

document.addEventListener("click", function (e) {
  let tasks = document.querySelectorAll(".tasks-list .taskBox");

  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
  }
});