import burger from "./imgs/burger.png";

export default function loadHomePage() {
    const content = document.querySelector(".content")
    const container = document.createElement("div")
    const image = document.createElement("img")
    container.classList.add("main-burger")
    image.src = burger
    container.appendChild(image)
    content.appendChild(container)
};