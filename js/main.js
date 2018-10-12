//Script to toggle menu in mobile view

// var y = document.getElementById("navMenu");
// var y = this;

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
