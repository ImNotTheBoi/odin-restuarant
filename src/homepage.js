import burger from "./imgs/burger.png";

export default function loadHomePage() {
    const container = document.createElement("div")
    const image = document.createElement("img")
    container.classList.add("main-burger")
    image.src = burger
    container.appendChild(image)
    document.body.appendChild(container)
};