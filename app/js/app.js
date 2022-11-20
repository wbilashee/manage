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

const links = document.querySelectorAll("a[href='#']");
links.forEach(link => link.addEventListener("click", (e) => {
    e.preventDefault();
}));

const form = document.querySelector(".footer__form");
const email = document.querySelector("#email");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = email.value;
    error.style.visibility = "hidden"

    if (value === "") {
        error.style.visibility = "visible";
        return;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false) {
        error.style.visibility = "visible";
    } else {
        email.value = "";
    }
});