document.addEventListener("mousemove", (event) => {
    document.querySelectorAll(".eye").forEach(eye => {
        let eyeRect = eye.getBoundingClientRect();
        let x = (event.clientX - eyeRect.left) / eyeRect.width - 0.5;
        let y = (event.clientY - eyeRect.top) / eyeRect.height - 0.5;
        let distance = Math.min(Math.sqrt(x * x + y * y), 0.5);
        eye.style.transform = `translate(${x * 10 * distance}px, ${y * 15 * distance}px)`;
    });
});
