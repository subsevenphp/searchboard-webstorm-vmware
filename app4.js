var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        var searchForm = document.querySelector('form');
        var searchInput = document.querySelector('#search');
        var resultsContainer = document.querySelector('#results');
        function search() {
            var query = searchInput.value.trim().toLowerCase();
            var filteredData = jsonData.filter(function(item) {
                return item.term.toLowerCase().includes(query);
            });
            displayResults(query, filteredData);
        }
        function displayResults(query, results) {
            resultsContainer.innerHTML = '';
            var header = document.createElement('h2');
            header.textContent = 'Search results for "' + query + '":';
            resultsContainer.appendChild(header);
            if (results.length === 0) {
                resultsContainer.innerHTML += '<p>No results found.</p>';
                return;
            }
            var list = document.createElement('ul');
            results.forEach(function(result) {
                var listItem = document.createElement('li');
                var termLink = document.createElement('a');
                termLink.textContent = result.term;
                termLink.addEventListener('click', function() {
                    termLink.textContent = result.translation;
                    termLink.classList.add('translated');
                });
                listItem.appendChild(termLink);
                list.appendChild(listItem);
            });
            resultsContainer.appendChild(list);
        }
        searchForm.addEventListener('submit', event => {
            event.preventDefault();
            search();
        });
    }
};

xhr.send();

// Path: app4.js
xhr = new XMLHttpRequest();
