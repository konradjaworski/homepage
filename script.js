console.log("Witam Wszystkich Bardzo Serdecznie");

let przycisk = document.querySelector(".przycisk");
let naglowek = document.querySelector(".naglowek");

przycisk.addEventListener("click", () => {

  naglowek.remove();


});

// let przyciskIner = document.querySelector(".przyciskIner");

// przyciskIner.addEventListener("click", ()=> {
// if (przyciskIner.innerText === "Włącz COŚ") {
// przyciskIner.innerText = "Wyłącz COŚ";

// }
// else  
// {przyciskIner.innerText = "Włącz COŚ";

// }
// })

let changeBackgroundButton = document.querySelector(".changeBackground");
let body = document.querySelector(".container");
let nextColorName = document.querySelector(".nextColorName");

changeBackgroundButton.addEventListener("click", () => {
  body.classList.toggle("greyBackground");
  nextColorName.innerText = body.classList.contains("greyBackground") ? "biały" : "szary";
});