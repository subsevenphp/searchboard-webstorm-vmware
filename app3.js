const data = [
    {
        "term": "navigation bar",
        "translation": "导航栏"
    },
    {
        "term": "status bar",
        "translation": "状态栏"
    },
    {
        "term": "tool bar",
        "translation": "工具栏"
    },
    {
        "term": "usability testing",
        "translation": "可用性测试"
    }
];

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsContainer = document.querySelector('#results');

function search() {
    const query = searchInput.value.trim().toLowerCase();
    const filteredData = data.filter(item => {
        return item.term.toLowerCase().includes(query);
    });
    displayResults(query, filteredData);
}

function displayResults(query, results) {
    resultsContainer.innerHTML = '';
    const header = document.createElement('h2');
    header.textContent = `Search results for "${query}":`;
    resultsContainer.appendChild(header);
    if (results.length === 0) {
        resultsContainer.innerHTML += '<p>No results found.</p>';
        return;
    }
    const list = document.createElement('ul');
    results.forEach(result => {
        const listItem = document.createElement('li');
        const termLink = document.createElement('a');
        termLink.textContent = result.term;
        termLink.addEventListener('click', () => {
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
