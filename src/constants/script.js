document.addEventListener("DOMContentLoaded", function () {
    var scrollpos = sessionStorage.getItem('scrollpos');
    if (scrollpos) {
        setTimeout(() => {
            window.scrollTo({
                top: scrollpos,
                behavior: 'auto'
            });
        }, 100);
    }
});

window.onbeforeunload = function () {
    sessionStorage.setItem('scrollpos', window.scrollY);
};