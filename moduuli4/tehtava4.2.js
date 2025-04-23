'use strict';

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();

  if (!query) {
    console.log("Please enter a show name.");
    return;
  }


  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      console.clear();
      console.log(`Results for "${query}":\n`);

      if (data.length === 0) {
        console.log("No results found.");
        return;
      }


      data.forEach((item, index) => {
        const show = item.show;
        const name = show.name || "Unnamed Show";
        const summary = show.summary ? show.summary.replace(/<[^>]*>/g, '') : "No summary available.";
        const url = show.url || "No URL available.";

        console.log(`${index + 1}. ${name}`);
        console.log(`   Summary: ${summary}`);
        console.log(`   URL: ${url}`);
        console.log('-----------------------------');
      });
    })
    .catch(error => {
      console.error("Error fetching data from API:", error);
    });
});