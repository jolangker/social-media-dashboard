const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  document.body.classList.toggle("light-bg");
  document.querySelector("header").classList.toggle("light-bg");
  document.querySelector("h4").classList.toggle("text-blue");
  document.getElementById("summary").classList.toggle("light-bg");

  const h1 = document.querySelectorAll("h1");
  for (let index = 0; index < h1.length; index++) {
    h1[index].classList.toggle("text-dark");
  }

  const card = document.querySelectorAll(".card");
  for (let index = 0; index < card.length; index++) {
    card[index].classList.toggle("card-light");
  }
});
