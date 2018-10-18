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

//toggle icon animation

(function() {
  var toggle = document.querySelector(".nav-toggle");

  toggle.addEventListener("click", function(e) {
    this.classList.toggle("opened");
    console.log("dsadajd");
  });
})();

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
// function $$(selector, context) {
//   context = context || document;
//   var elements = context.querySelectorAll(selector);
//   return Array.prototype.slice.call(elements);
// }

// window.addEventListener("scroll", function() {
//   var scrolledHeight = window.pageYOffset;
//   $$(".parallax").forEach(function(el, index, array) {
//     var limit = el.offsetTop + el.offsetHeight;
//     if (scrolledHeight > el.offsetTop && scrolledHeight <= limit) {
//       el.style.backgroundPositionY =
//         (scrolledHeight - el.offsetTop) / 1.5 + "px";
//     } else {
//       el.style.backgroundPositionY = "0";
//     }
//   });
// });

//on scroll fade in divs
var parallax = document.querySelector(".parallax_section");
var cardClasses = document.getElementById("cards").classList;
var scrolledHeight = window.pageYOffset;
var limit = parallax.offsetTop + parallax.offsetHeight;

console.log(parallax.offsetTop);
console.log(parallax.offsetHeight);

window.addEventListener("scroll", function() {
  console.log(scrolledHeight);
  if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
    console.log(scrolledHeight);
    cardClasses.add("test");
  } else {
    cardClasses.remove("test");
  }
});
