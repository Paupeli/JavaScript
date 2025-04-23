'use strict';

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value;

  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
  .then(response => response.json())
    .then(data => {
      console.clear();
      console.log(`Results for "${query}":`);
      data.forEach((item, index) => {
        console.log(`${index + 1}. ${item.show.name}`);
        console.log(`   Summary: ${item.show.summary?.replace(/<[^>]*>/g, '') || 'No summary available.'}`);
        console.log(`   URL: ${item.show.url}`);
        console.log('-----------------------------');
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
