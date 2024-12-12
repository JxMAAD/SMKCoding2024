const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var sejarahSection = document.getElementById('sejarah');
    var sejarahTop = sejarahSection.offsetTop;

    // Saat scroll melebihi posisi section sejarah
    if (window.scrollY > sejarahTop) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-id], [data-lang-en]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${lang}`);
    });
}