'use strict';

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();
  const resultsContainer = document.getElementById('results');

  if (!query) {
    resultsContainer.innerHTML = '<p>Please enter a show name.</p>';
    return;
  }

  resultsContainer.innerHTML = '';

  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
      }

      data.forEach(item => {
        const show = item.show;

        const article = document.createElement('article');

        const title = document.createElement('h2');
        title.textContent = show.name;
        article.appendChild(title);

        const link = document.createElement('a');
        link.href = show.url;
        link.textContent = 'More details';
        link.target = '_blank';
        article.appendChild(link);

        if (show.image?.medium) {
          const image = document.createElement('img');
          image.src = show.image.medium;
          image.alt = show.name;
          article.appendChild(image);
        }

        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = show.summary || 'No summary available.';
        article.appendChild(summaryDiv);

        resultsContainer.appendChild(article);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      resultsContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    });
});