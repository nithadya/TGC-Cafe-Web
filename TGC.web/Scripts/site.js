/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

/*-----Search-Bar-Start-----*/
let searchButton = document.querySelector("#search-icon");
let searchSection = document.querySelector(".search-section");
let searchSectionClose = document.querySelector("#search-close");

searchButton.addEventListener('click', () => {
    searchSection.classList.toggle('active');
    console.log("pakooooooooo");
});

searchSectionClose.addEventListener('click', () => {
    searchSection.classList.remove('active');
});
/*-----Search-Bar-End-----*/





var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});