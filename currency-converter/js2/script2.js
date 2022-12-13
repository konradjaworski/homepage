let coursePol = document.querySelector(".js-course");
let sumPol = document.querySelector(".js-sum");
let countPol = document.querySelector(".js-count");
let resultPol = document.querySelector(".js-result");

countPol.addEventListener("submit", (event) => {
    event.preventDefault();

    let course = coursePol.value;
    let sum = sumPol.value;

    let result = (sum / course);

    resultPol.innerText = result.toFixed(2);

});

let courseEuro = document.querySelector(".js-course");
let sumEuro = document.querySelector(".js-sumEuro");
let countEuro = document.querySelector(".js-countEuro");
let resultEuro = document.querySelector(".js-resultEuro");

countEuro.addEventListener("submit", (event) => {
    event.preventDefault();

    let coursenext = courseEuro.value;
    let sumnext = sumEuro.value;

    let result = (sumnext * coursenext);

    resultEuro.innerText = result.toFixed(2);

});