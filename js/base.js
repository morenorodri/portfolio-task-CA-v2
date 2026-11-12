// elements
const themeToggle = document.querySelector(".js-themeToggle"); 
const savedTheme = localStorage.getItem("theme");


// evenets
themeToggle.addEventListener("click", () => {
    toggleTheme()
})


// functions 
function toggleTheme() {
    const toggleStatus = themeToggle.getAttribute("aria-pressed") === "false";
    console.log(toggleStatus);

    if (toggleStatus === false) {
        setLightTheme();
    
    } else if (toggleStatus === true) {
        setDarkTheme();
    }
}


// checking in localStorage saved dark theme 
if (savedTheme === "dark") {
    setDarkTheme();
}

function setDarkTheme() {
    themeToggle.setAttribute("aria-pressed", true);
    document.body.classList.add("dark-theme");
    themeToggle.innerHTML = `<img src="./img/icon/sun-light-icon.svg" alt="a sun for light mode switch"> `;
    localStorage.setItem('theme', 'dark');
}

function setLightTheme() {
    themeToggle.setAttribute("aria-pressed", false);
    document.body.classList.remove("dark-theme");
    themeToggle.innerHTML = `<img src="./img/icon/moon-light-icon.svg" alt="a moon for dark mode switch"> `;   
    localStorage.setItem('theme', 'light'); 
}



// the before setting toggle in U01
// const toggleTheme = document.querySelector("#theme-toggle");
// const savedTheme = localStorage.getItem("theme");

// if (savedTheme === "dark") {
//     toggleTheme.checked = true;
// }

// toggleTheme.addEventListener("change", (event) => {
//     const checkValue = event.target.checked;

//     if (checkValue) {
//         console.log("true");
//         localStorage.setItem('theme', 'dark');
    
//     } else {
//         console.log("false");
//         localStorage.setItem('theme', 'light');
//     }
// });