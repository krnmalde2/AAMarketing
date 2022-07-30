// Toggling Buttons

function toggleActive(btn, replaceBtn, p, td) {
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      for (var j = 0; j < btn.length; j++) {
        btn[j].classList.remove("btn-active");
      }
      this.classList.add("btn-active");
    });
    // get text of clicked button text content
  }
}

// Responsive sidebar navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}
// feature implementing! code is not used anywhere
// toogleActive function with foreach loop
let replaceBtn0 = {
  marlas: ["5 Marla", "7 Marla", "10 Marla", "1 Kanal"],
  dimensions: ["(25 x 50)", "(30 x 60)", "(35 x 70)", "(50 x 90)"],
  price: ["1,200,000", "1,560,000", "2,160,000", "3,528,000"],
  downPayment: ["240,000", "312,000", "433,000", "705,600"],
  installments: ["17,500", "17,500", "31,573", "51,450"],
  possesion: ["1,20,000", "1,20,000", "216,500", "352,800"],
};

var p0 = document.getElementById("text0");
var td0 = document.querySelectorAll(".td0");
var btn0 = document.getElementsByClassName("btn0");
var btn1 = document.getElementsByClassName("btn1");
var btn2 = document.getElementsByClassName("btn2");
var btn3 = document.getElementsByClassName("btn3");

toggleActive(btn0, replaceBtn0, p0, td0);
toggleActive(btn1);
toggleActive(btn2);
toggleActive(btn3);
