export default function loadMenuPage() {
    const content = document.querySelector(".content")
    const menuDiv = document.createElement("div")
    menuDiv.classList.add("menuDiv")

    const borderDiv = document.createElement("div")
    const burgers = document.createElement("div")
    borderDiv.classList.add("border")
    burgers.classList.add("menuText")
    burgers.textContent = "Burgers"
    borderDiv.appendChild(burgers)

    const nonborderDiv = document.createElement("div")
    const others = document.createElement("div")
    others.classList.add("menuText")
    others.textContent = "Others"
    nonborderDiv.appendChild(others)

    function appendTable(container, table) {
        table.forEach(obj => {
            const heroText = document.createElement("div")
            const description = document.createElement("div")
            heroText.classList.add("hero-text")
            heroText.textContent = obj.name
            description.textContent = obj.desc
            heroText.appendChild(description)
            container.appendChild(heroText)
        });
    }

    const burgerMenu = [
        {
            name: "Classic BYC",
            desc: "Crispy chicken, lettuce, tomato, pickles, and house mayo on a brioche bun."
        },
        {
            name: "Cheesy BYC",
            desc: "Crispy chicken, melted cheddar, bacon, and ranch sauce."
        },
        {
            name: "BBQ BYC",
            desc: "Grilled chicken, smoky BBQ sauce, crispy onions, and cheddar cheese."
        }
    ]

    const othersMenu = [
        {
            name: "Fries",
            desc: "Truffle, Cajun Spiced, Garlic Parmesan, Classic, BBQ."
        },
        {
            name: "Hand-Spun Milkshakes",
            desc: "Vanilla, Chocolate, Strawberry."
        },
        {
            name: "Fresh Lemonade",
            desc: "Classic, strawberry, or blueberry."
        }
    ]
    
    appendTable(borderDiv, burgerMenu)
    appendTable(nonborderDiv, othersMenu)
    menuDiv.appendChild(borderDiv)
    menuDiv.appendChild(nonborderDiv)
    content.appendChild(menuDiv)
}