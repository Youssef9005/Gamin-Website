// Header

let menu = document.querySelector(".menu");
let menuSpan = document.querySelectorAll(".menu span");
let navBar = document.querySelector("nav");

menu.onclick = function () {
    menuSpan.forEach((spans) => {
        spans.classList.toggle("active");
        navBar.classList.toggle("show")
    });
}
// End Header

let leftSection = document.querySelectorAll(".left");
let rightSection = document.querySelectorAll(".right");
let cardTime = document.querySelectorAll(".card-time");

setInterval(() => {
    if (window.scrollY > 523) {
        leftSection.forEach((left) => {
            left.style.animationPlayState = "running";
        });
        rightSection.forEach((right) => {
            right.style.animationPlayState = "running";
        })
        cardTime.forEach((time) => {
            time.style.animationPlayState = "running";
        })
    }
}, 100);

// 
let headerNews = document.querySelector(".news .header");
let container = document.querySelector(".news .container");
setInterval(() => {
    if (window.scrollY >= 1650) {
        headerNews.style.animationPlayState = "running";
        container.style.animationPlayState = "running";
    }
}, 100);