// nav hamburger menu logic

let hamburgerMenu = document.querySelector(".hamburgerMenu");
let dropdownMenu = document.querySelector(".dropdownMenu");
let dropdownLinks = document.querySelectorAll(".dropdownLink");

let height = 0;

let isDropDown1Active = false;
let isDropDown2Active = false;

hamburgerMenu.addEventListener("click", () => {
    if(isDropDown1Active) {
        DropDown1Off();
        DropDown2Off();
    }
    else {
        DropDown1On();
    }
});

window.addEventListener("resize", () => {
    if(window.innerWidth > 650 && isDropDown1Active && !isDropDown2Active) {
        DropDown1Off();
    }
    else if(window.innerWidth > 650 && isDropDown1Active && isDropDown2Active) {
        DropDown2Off();

        setTimeout(() => {
            DropDown1Off();
        }, 300)
    }
});

document.querySelectorAll(".dropdownLinkSvgContainer").forEach(h3 => {
    h3.addEventListener("click", () => {
        const faq = h3.closest(".dropdownLink");
        const paragraph = faq.querySelector("li");
        const svg = faq.querySelector(".dropdownLinkSvgContainer svg");

        const num = 80

        if(paragraph.style.height === `${num}px`) {
            DropDown2Off(paragraph, svg, num);
        }
        else {
            DropDown2On(paragraph, svg, num);
        }
        dropdownMenu.style.height = `${height}px`;
    });
});

function DropDown1On() {
    isDropDown1Active = true;

    height = 187;
    dropdownMenu.style.height = `${height}px`;
}

function DropDown1Off() {
    isDropDown1Active = false;

    height = 0;
    dropdownMenu.style.height = `${height}px`;
}

function DropDown2On(paragraph, svg, num) {
    isDropDown2Active = true;

    paragraph.style.height = `${num}px`;
    height = height + num;
    svg.style.rotate = "180deg";
}

function DropDown2Off(paragraph, svg, num) {
    isDropDown2Active = false;

    paragraph.style.height = "0px";
    height = height - num;
    svg.style.rotate = "0deg";
}

//////////////////////////////////////////////
// nav fixed position logic

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const introSlides = document.querySelector(".introSlides");

function GetNav1Height() {
    return window.innerWidth < 650 ? nav1.offsetHeight : nav1.offsetHeight;
}

function UpdateNav2Position() {
    const nav1Height = GetNav1Height();

    if(window.innerWidth > 400) {
        if(window.scrollY > nav1Height) {
            nav2.style.position = "fixed";
            nav2.style.top = "0";
    
            introSlides.style.paddingTop = "110px";
        }
        else {
            nav2.style.position = "relative";
            nav2.style.top = "";
    
            introSlides.style.paddingTop = "0px";
        }
    }
    else {
        if(window.scrollY > nav1Height) {
            nav2.style.position = "fixed";
            nav2.style.top = "0";
    
            introSlides.style.paddingTop = "90px";
        }
        else {
            nav2.style.position = "relative";
            nav2.style.top = "";
    
            introSlides.style.paddingTop = "0px";
        }
    }
}

window.addEventListener("DOMContentLoaded", UpdateNav2Position);
window.addEventListener("scroll", UpdateNav2Position);
window.addEventListener("resize", UpdateNav2Position);

//////////////////////////////////////////////
// nav links hover animation logic

const navlink1 = document.querySelector(".navlink1");
const navlink2 = document.querySelector(".navlink2");
const navlink3 = document.querySelector(".navlink3");
const navlink4 = document.querySelector(".navlink4");
const navLinkDecoration1 = document.querySelector(".navLinkDecoration1");
const navLinkDecoration2 = document.querySelector(".navLinkDecoration2");
const navLinkDecoration3 = document.querySelector(".navLinkDecoration3");
const navLinkDecoration4 = document.querySelector(".navLinkDecoration4");

navlink1.addEventListener("mouseenter", () => {
    navLinkDecoration1.style.width = "100%";
});
navlink2.addEventListener("mouseenter", () => {
    navLinkDecoration2.style.width = "100%";
});
navlink3.addEventListener("mouseenter", () => {
    navLinkDecoration3.style.width = "100%";
});

navlink1.addEventListener("mouseleave", () => {
    navLinkDecoration1.style.width = "0px";
});
navlink2.addEventListener("mouseleave", () => {
    navLinkDecoration2.style.width = "0px";
});
navlink3.addEventListener("mouseleave", () => {
    navLinkDecoration3.style.width = "0px";
});