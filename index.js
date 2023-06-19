const show = document.querySelectorAll(".show");
const hide = document.querySelectorAll(".hide");
const form = document.querySelector("#container");
const submitBtn = document.querySelector("#submit");

const resultContainer = document.getElementById("resultContainer");

form.addEventListener("submit", Submit);

function Submit() {
  event.preventDefault();

  console.log("button hit");
  console.log(form.classList.contains("show"));

  if (form.classList.contains("show")) {
    console.log("if");

    form.classList.remove("show");
    form.classList.add("hide");
    resultContainer.classList.remove("hide");
    resultContainer.classList.add("show");
  }
}
