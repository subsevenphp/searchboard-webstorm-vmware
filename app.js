const fs = require('fs');

fs.readFile('terminology-data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const jsonData = JSON.parse(data);

    // Loop through the JSON data and create HTML elements for each term
    let html = '';
    for (let i = 0; i < jsonData.length; i++) {
        const term = jsonData[i].term;
        const definition = jsonData[i].definition;

        const termHtml = `<div class="term">
      <h2>${term}</h2>
      <p>${definition}</p>
    </div>`;
        html += termHtml;
    }

    // Write the HTML to a file
    fs.writeFile('search-results.html', html, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('HTML file written successfully.');
    });
});



