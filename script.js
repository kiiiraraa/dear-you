window.addEventListener("scroll", () => {
    const progress =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);

    const start = [238, 232, 226];
    const end = [190, 188, 220];

    const r = Math.round(start[0] + (end[0] - start[0]) * progress);
    const g = Math.round(start[1] + (end[1] - start[1]) * progress);
    const b = Math.round(start[2] + (end[2] - start[2]) * progress);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
