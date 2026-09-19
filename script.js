window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = scroll / maxScroll;

    if (progress < 0.33) {
        document.body.style.backgroundColor = "#f8f5f2";
    } else if (progress < 0.66) {
        document.body.style.backgroundColor = "#e8e8f2";
    } else {
        document.body.style.backgroundColor = "#ddd9e8";
    }
});
