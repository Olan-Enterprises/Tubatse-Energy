const container = document.querySelector(".comparisonContainer");
const slider = document.querySelector(".comparisonSlider");

container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;

    container.style.setProperty("--position", `${e.target.value}%`);
    slider.value = position;
});