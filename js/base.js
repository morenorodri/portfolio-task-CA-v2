const toggleTheme = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    toggleTheme.checked = true;
}

toggleTheme.addEventListener("change", (event) => {
    const checkValue = event.target.checked;

    if (checkValue) {
        console.log("true");
        localStorage.setItem('theme', 'dark');
    
    } else {
        console.log("false");
        localStorage.setItem('theme', 'light');
    }
});

console.log(toggleTheme);