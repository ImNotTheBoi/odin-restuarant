import "./styles.css";
import loadHomePage from "./homepage.js"
import loadMenuPage from "./menupage.js"
import loadAboutPage from "./aboutpage.js"

//* Buttons are given functions based on table index
const content = document.querySelector(".content")
const aboutButton = document.querySelector(".about")
const homeButton = document.querySelector(".home")
const menuButton = document.querySelector(".menu")
const pageButtons = [aboutButton, homeButton, menuButton]
const loadFunctions = [loadAboutPage, loadHomePage, loadMenuPage]

function loadButtons(){
    for (let i = 0; i < pageButtons.length; i++) {
        pageButtons[i].addEventListener('click', () => {
            content.innerHTML = ""
            loadFunctions[i]()
            highlightButton(pageButtons[i])
        })
        console.log(i)
    }
}

function highlightButton(button){
    pageButtons.forEach((element) => {
        element.classList.remove("highlight")
    })
    button.classList.toggle("highlight")
}

loadButtons()
loadFunctions[1]()
highlightButton(pageButtons[1])