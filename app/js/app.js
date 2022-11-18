const toggleBtn = document.querySelector(".header__toggle");
const fadeItems = document.querySelectorAll(".has-fade");
const header = document.querySelector(".header");

toggleBtn.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        fadeItems.forEach(elem => {
            elem.classList.remove("fade-in");
            elem.classList.add("fade-out");
        });
    } else {
        header.classList.add("open");
        fadeItems.forEach(elem => {
            elem.classList.remove("fade-out");
            elem.classList.add("fade-in");
        });
    }
});
