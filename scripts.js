function getMovieInfo() {
    // We set the movie name here
    let movieTitle = 'Frozen'
    const apiKey = 'ask-your-tech-lead-for-the-API-key'

    // This is where we fetch the data from our API.
    fetch('https://www.omdbapi.com/?t=' + encodeURI(movieTitle) + '&apikey=' + encodeURI(apiKey))
      .then(response => response.json())
      .then(response => {
          // This is where you populate the html elements and
          // element attributes with values from the result;
      })
      .catch(err => console.error(err));
}