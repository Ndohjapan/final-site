const servicesNavBar = document.querySelector("#navbar-option-3")
const dropdown  = document.querySelector(".dropdown")


servicesNavBar.addEventListener("mouseover", () => {
    console.log("Hello World")
    dropdown.classList.add("visible")
})

servicesNavBar.addEventListener("mouseout", () => {
    dropdown.classList.remove("visible")
})