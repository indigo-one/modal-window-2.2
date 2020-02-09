/*
function hello() {
  console.log("Hello");
  hello2();
  alert('работает')
}
function hello2() {
   // console.log('bla bla bla');
}*/

function hello() {
  alert("работает");
}

let btn = document.querySelector("#btn");
btn.onclick = hello;

//-----------------открывваем модалку
let modalShow = document.querySelector("#modal-show");

function openModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
  modal.style.background = "aqua";
  modal.style.border = "10px solid #c0c0c0";
  modal.style.borderRadius = "20px";
}
modalShow.onclick = openModal;

//-----------Закрываем модалку
let modalClose = document.querySelector("#modal-close");
function closeModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}
modalClose.onclick = closeModal;
 