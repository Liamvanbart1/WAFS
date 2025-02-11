const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key from GitHub Secrets
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            const newsList = document.getElementById('news-list');
            newsList.innerHTML = ''; // Clear existing content

            data.articles.forEach(article => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h3>${article.title}</h3>
                    <p><strong>Source:</strong> ${article.source.name}</p>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsList.appendChild(listItem);
            });
        } else {
            console.log('No articles found');
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Call function when the page loads
fetchNews();
