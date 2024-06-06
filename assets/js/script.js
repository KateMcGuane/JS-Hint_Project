const API_KEY = "tKkUkYnVJPlsQlYsktT084h76EE";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
/* not actually using event listener for these lessons, but good habit to pass evnet into object handler */

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if(response.ok) {
        console.log(data.expiry);
    }
}