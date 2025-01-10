let headers = document.querySelectorAll(".section1RightDropDown div h3");

headers.forEach(header => {
    header.addEventListener("click", () => {
        let paragraph = header.nextElementSibling;
        let svg = header.querySelector("svg");

        if(paragraph.style.height === "100px") {
            paragraph.style.height = "0";
            paragraph.style.opacity = "0";
            paragraph.style.overflow = "hidden";

            svg.style.rotate = "0deg";
        }
        else {
            paragraph.style.height = "100px";
            paragraph.style.opacity = "1";
            paragraph.style.overflow = "visible";

            svg.style.rotate = "270deg";
        }
    });
});