export const smoothScrollTo = (element, duration) => {
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    let startTime = null;

    const scroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress * (2 - progress);
        window.scrollTo(0, start + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(scroll);
        }
    };

    requestAnimationFrame(scroll);
};
