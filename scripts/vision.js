document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".vision-box");

    boxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            box.style.boxShadow = `0 0 15px ${randomColor}`;
        });

        box.addEventListener("mouseleave", function () {
            box.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.1)";
        });
    });
});