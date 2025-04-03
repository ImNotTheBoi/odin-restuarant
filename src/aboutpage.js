export default function loadAboutPage() {
    const content = document.querySelector(".content")
    const ourStory = document.createElement("div")
    const story = document.createElement("div")
    ourStory.classList.add("menuText")
    ourStory.textContent = "Our Story"
    story.textContent = "Once upon a time in the heart of a bustling city, two childhood friends—Jake and Marcus—set out on a mission to create the ultimate chicken burger. Growing up in a neighborhood where backyard BBQs were legendary, they spent their weekends experimenting with flavors, testing out spice blends, and debating over the perfect crunch-to-juiciness ratio for fried chicken."
    ourStory.appendChild(story)
    content.appendChild(ourStory)
}