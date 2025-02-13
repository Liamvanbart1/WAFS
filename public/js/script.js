const fetchJoke = async () => {
    const url = 'https://v2.jokeapi.dev/joke/Programming?type=single';
    // const jokeDisplay = document.querySelector('p:last-of-type');
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error fetching joke from JokeAPI');
        }
        const data = await response.json();

        jokeDisplay.textContent = data.joke;
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchJoke();

function shuffleSections() {
    let container = document.querySelector("div"); // Select the first div
    let sections = Array.from(container.children); // Get all direct children (sections)
    sections.sort(() => Math.random() - 0.5);
    sections.forEach(section => container.appendChild(section)); // Reorder
}

const toggleTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    document.body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
};

document.getElementById("dark-mode").addEventListener("click", toggleTheme);