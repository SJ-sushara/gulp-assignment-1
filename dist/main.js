function navbarToggle(){document.body.offsetWidth<=767&&(document.getElementById("navMenu").classList.add("hidden"),document.getElementById("toggleIcon").onclick=function(e){var n=document.getElementById("navMenu").classList;n.contains("hidden")?n.remove("hidden"):n.add("hidden")})}navbarToggle(),window.onresize=navbarToggle,document.querySelector(".nav-toggle").addEventListener("click",function(e){this.classList.toggle("opened"),console.log("dsadajd")});