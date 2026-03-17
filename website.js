/*===STICKY NAVBAR====*/
window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
}
/*=====NAV BAR=======*/
document.addEventListener("DOMContentLoaded", function () {
    var navbarItems = document.querySelectorAll('#navbar a');

    navbarItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            navbarItems.forEach(function (navItem) {
                navItem.classList.remove("active");
            });

            this.classList.add("active");

            var targetSectionId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetSectionId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

/*===ABOUT PAGE====*/
let slides = document.querySelectorAll('.slide-container-about');
    let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

/*======CONTACT PAGE=====*/
const inputs = document.querySelectorAll(".input");

function focusTo(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurTo(){
    let parent = this.parentNode;
    if(this.value =="") {
    parent.classList.remove("focus");
}}
inputs.forEach(input => {
    input.addEventListener("focus", focusTo);
    input.addEventListener("blur", blurTo);
})

/*==== SIDEBAR =====*/
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}