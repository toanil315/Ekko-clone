var demoMenuDisplay = document.getElementById("nav-menu-demo--display");
var navMenuDemo = document.getElementById("nav-menu-demo");
navMenuDemo.style.opacity = "0";
demoMenuDisplay.onclick = function () {
    if (navMenuDemo.style.opacity === "0") {
        demoMenuDisplay.style.color = "var(--primary-color)";
        navMenuDemo.style.opacity = "1";
        navMenuDemo.style.visibility = "visible";

    }
    else {
        demoMenuDisplay.style.color = "var(--text-color)";
        navMenuDemo.style.opacity = "0";
        navMenuDemo.style.visibility = "hidden";
    }
}
var nav = document.getElementById("navbar");
nav.style.boxShadow = "none";

window.addEventListener("scroll", function() {
    var y  = window.pageYOffset;
    if(y !== 0) {
        nav.style.boxShadow = "0 3px 10px rgba(0,0,0, 0.1)";
    }
    else {
        nav.style.boxShadow = "none";
    }
    
})
