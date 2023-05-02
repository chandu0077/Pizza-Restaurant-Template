window.onload = function () {
  var pizza = document.querySelector("#pizza");
  var salads = document.querySelector("#salads");
  var starters = document.querySelector("#starters");

  var pizzaitems = document.querySelector("#menu_details_pizza");
  var saladitems = document.querySelector("#menu_details_salads");
  var starteritems = document.querySelector("#menu_details_starters");

  console.log("pizzzza", pizza, salads, starters);
  pizza.addEventListener("click", function () {
    pizzaitems.style.display = "block";
    pizza.classList.add("bgColor_active");
    salads.classList.remove("bgColor_active");
    starters.classList.remove("bgColor_active");
    saladitems.style.display = "none";
    starteritems.style.display = "none";
  });
  salads.addEventListener("click", function () {
    saladitems.style.display = "block";
    salads.classList.add("bgColor_active");
    pizza.classList.remove("bgColor_active");
    starters.classList.remove("bgColor_active");
    pizzaitems.style.display = "none";
    starteritems.style.display = "none";
  });
  starters.addEventListener("click", function () {
    starteritems.style.display = "block";
    starters.classList.add("bgColor_active");
    salads.classList.remove("bgColor_active");
    pizza.classList.remove("bgColor_active");
    pizzaitems.style.display = "none";
    saladitems.style.display = "none";
  });
};
