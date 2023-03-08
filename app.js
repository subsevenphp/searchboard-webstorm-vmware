// Select the form and search input
const form = document.querySelector('form');
const searchInput = document.querySelector('#search');

// Add an event listener to the form for when it's submitted
form.addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the search term from the input field
    const searchTerm = searchInput.value;

    // Use an API or database to get search results based on the search term
    const searchResults = getSearchResults(searchTerm);

    // Display the search results in the results div
    displaySearchResults(searchResults);
});
// Function to get search results based on a search term
function getSearchResults(searchTerm) {
    // Replace this with code to fetch search results from an API or database
    const results = [
        'JavaScript',
        'HTML',
        'CSS',
        'React',
        'Node.js'
    ];

    // Filter the results based on the search term
    const filteredResults = results.filter(result => result.toLowerCase().includes(searchTerm.toLowerCase()));

    return filteredResults;
}

// Function to display search results in the results div
function displaySearchResults(searchResults) {
    // Select the results div
    const resultsDiv = document.querySelector('#results');

    // Clear any previous search results
    resultsDiv.innerHTML = '';

    // If there are no search results, display a message
    if (searchResults.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    // Create an unordered list for the search results
    const resultList = document.createElement('ul');

    // Loop through the search results and create list items for each result
    searchResults.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        resultList.appendChild(listItem);
    });

    // Add the list of search results to the results div
    resultsDiv.appendChild(resultList);
}
