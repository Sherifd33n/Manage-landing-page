const menu = document.querySelector(".menu");
const navList = document.querySelector("ul");
const menuBtn = document.querySelector(".menu img");
const body = document.querySelector("body");

const list1 = document.querySelector(".press1");
const list2 = document.querySelector(".press2");
const list3 = document.querySelector(".press3");
const list4 = document.querySelector(".press4");
const list5 = document.querySelector(".press5");

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  navList.classList.toggle("active");
});
list1.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});

list2.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});

list3.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});

list4.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});

list5.addEventListener("click", function () {
  navList.classList.remove("active");
  menu.classList.remove("active");
});
