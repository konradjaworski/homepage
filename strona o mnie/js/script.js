console.log("Witam Wszystkich Bardzo Serdecznie");

let button = document.querySelector(".button");
let heading = document.querySelector(".heading");

button.addEventListener("click", () => {

  heading.remove();


});

// let buttonIner = document.querySelector(".buttonIner");

// buttonIner.addEventListener("click", ()=> {
// if (buttonIner.innerText === "Włącz COŚ") {
// buttonIner.innerText = "Wyłącz COŚ";

// }
// else  
// {buttonIner.innerText = "Włącz COŚ";

// }
// })

let changeBackgroundButton = document.querySelector(".changeBackground");
let body = document.querySelector(".container");
let nextColorName = document.querySelector(".nextColorName");

changeBackgroundButton.addEventListener("click", () => {
  body.classList.toggle("greyBackground");
  nextColorName.innerText = body.classList.contains("greyBackground") ? "biały" : "szary";
});