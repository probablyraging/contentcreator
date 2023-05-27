const mouseGlow = document.querySelector('.mouse_glow');

document.addEventListener('mouseenter', (e) => {
    let opacity = 0;
    const setInt = setInterval(() => {
        if (opacity > 1) return clearInterval(setInt);
        mouseGlow.style.opacity = opacity;
        opacity += 0.1;
    }, 20);
});

document.addEventListener('mousemove', (e) => {
    mouseGlow.style.position = 'absolute';
    mouseGlow.style.top = e.clientY + window.scrollY + 'px'; // Account for scroll position
    mouseGlow.style.left = e.clientX + 'px';
});

document.addEventListener('mouseleave', (e) => {
    let opacity = 1;
    const setInt = setInterval(() => {
        if (opacity < 0) {
            mouseGlow.style.opacity = '0';
            return clearInterval(setInt);
        }
        mouseGlow.style.opacity = opacity;
        opacity -= 0.1;
    }, 20);
});