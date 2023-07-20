function searchMovies(apiKey, searchQuery) {
    const apiUrl = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data['Search']) {
                console.log(data)
                const result = document.getElementById('films')
                result.innerHTML = '';

                data['Search'].forEach(movie => {
                    const movieTitle = movie['Title']
                    const movieYear = movie['Year']
                    const moviePoster = movie['Poster']
                    result.innerHTML += `<div class="card mb-3" style="max-width: 200px;">
                    <img src="${moviePoster}" class="card-img-top" alt="Affiche du film${movieTitle}">
                    <div class="col">
                    <div class="card-body>
                        <h5 class="card-title">${movieTitle}</h5>
                        <p class="card-text">${movieYear}</p>
                        <a href-"#" class="btn btn-primary">Voir plus</a>
                    </div>
                  </div>`
                });
            } else {
                console.log('Aucun film trouvé.');
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données:", error)
        });
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const apiKey = '45a0f22';
    const searchQuery = document.getElementById('search').value;
    searchMovies(apiKey, searchQuery);
});









