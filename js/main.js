//Script to toggle menu in mobile view

// var y = document.getElementById("navMenu");
// var y = this;

function navbarToggle() {
  if (document.body.offsetWidth <= 767) {
    document.getElementById("navMenu").classList.add("hidden");
    document.getElementById("toggleIcon").onclick = function(e) {
      var menuClasses = document.getElementById("navMenu").classList;
      if (menuClasses.contains("hidden")) {
        menuClasses.remove("hidden");
      } else {
        menuClasses.add("hidden");
      }
    };
  }
}
navbarToggle();
window.onresize = navbarToggle;

//script for parallax effect on banner

// var parallax = document.querySelector(".parallax");
// window.addEventListener("scroll", function() {
//   var scrolledHeight = window.pageYOffset,
//     limit = parallax.offsetTop + parallax.offsetHeight;
//   if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
//     parallax.style.backgroundPositionY =
//       (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
//   } else {
//     parallax.style.backgroundPositionY = "0";
//   }
// });
