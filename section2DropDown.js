document.querySelectorAll(".FAQ").forEach(h3 => {
    h3.addEventListener("click", () => {
        const faq = h3.closest(".FAQ");
        const paragraph = faq.querySelector("p");
        const svg = faq.querySelector(".FAQSvg");
        let pHeight = paragraph.style.height;
        
        if(paragraph.style.height === "50px") {
            paragraph.style.height = "0px";
            paragraph.style.opacity = "0";

            svg.style.rotate = "0deg";
            console.log(pHeight);
        }
        else {
            paragraph.style.height = "50px";
            paragraph.style.opacity = "1";

            svg.style.rotate = "180deg";
            console.log(pHeight);
        }
    });
});