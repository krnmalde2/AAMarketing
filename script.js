// select all li elements
var li = document.querySelectorAll(".nav-item");
// loop through the array
for (var i = 0; i < li.length; i++) {
  // add event listener on click
  li[i].addEventListener("click", function () {
    // remove class 'selected' from all li elements
    for (var j = 0; j < li.length; j++) {
      li[j].classList.remove("active");
    }
    // add class 'selected' to the clicked li element
    this.classList.add("active");
  });
}
