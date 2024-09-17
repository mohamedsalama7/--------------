
date = new Date;
date = date.getFullYear()


document.getElementById("date").innerHTML = date;
navUl = document.querySelector("nav > ul");
isOpen = false;
document.querySelector("#menu").addEventListener("click", () => {

  navUl.classList.toggle("toggle");
})
