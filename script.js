// select all li elements
var li = document.querySelectorAll(".nav-item");
// loop through the array
for (var i = 0; i < li.length; i++) {
  // add event listener on click
  li[i].addEventListener("click", function () {
    // remove class 'selected' from all li elements
    // console log the element text content that was clicked
    console.log(this.textContent);
    for (var j = 0; j < li.length; j++) {
      li[j].classList.remove("active");
      if (li[j].textContent == this.textContent) {
        li[j].classList.add("active");
      }
    }
    // add class 'selected' to the clicked li element
    this.classList.add("active");
  });
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
