// Preloader
let preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('remove');
})

// Light and Dark mode 
let themeBtn = document.querySelector("[data-theme-btn]");
let HTML = document.documentElement;

if(sessionStorage.getItem("theme") !== null) {
    HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    sessionStorage.setItem("theme", document.documentElement.dataset.theme);
    HTML.dataset.theme = document.documentElement.dataset.theme;
}

themeBtn.addEventListener("click", function() {
    if (HTML.dataset.theme === "dark") {
        HTML.dataset.theme = "light";
        sessionStorage.setItem("theme", "light")
    } else {
        HTML.dataset.theme = "dark";
        sessionStorage.setItem("theme", "dark");
    }
})


// TAB 
let tabBtn = document.querySelectorAll("[data-tab-btn]");

let tabContent = document.querySelectorAll("[data-tab-content]");


tabBtn.forEach(item => {

    item.addEventListener("click", function() {
        
        tabBtn.forEach(i => {
            i.classList.remove("active");
        })       

        item.classList.add("active");

        tabContent.forEach(con => {
            con.classList.remove("active");
        })

        document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`).classList.add("active");

    })

})
