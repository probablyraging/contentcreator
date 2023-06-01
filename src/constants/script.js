
document.addEventListener("DOMContentLoaded", function () {
    var scrollpos = sessionStorage.getItem('scrollpos');
    if (scrollpos) {
        if (document.readyState === "complete") {
            window.scrollTo({
                top: scrollpos,
                behavior: 'auto'
            });
        } else {
            window.addEventListener("load", function () {
                setTimeout(function () {
                    window.scrollTo({
                        top: scrollpos,
                        behavior: 'auto'
                    });
                }, 500);
            });
        }
    }
});

window.onbeforeunload = function () {
    sessionStorage.setItem('scrollpos', window.scrollY);
};