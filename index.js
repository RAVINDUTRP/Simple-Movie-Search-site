function search() {
    let movieName = document.getElementById("movie").value
    console.log(movieName)

    let apiKey = "8ba90fa6"

    let url = "http://www.omdbapi.com/?apikey=" + apiKey+ "&t=" + movieName

    console.log(url)

    let httpRequest = new XMLHttpRequest()

    httpRequest.open("GET", url)

    httpRequest.responseType = "json"

    httpRequest.send()

    httpRequest.onload = function() {
        let movie = httpRequest.response
        console.log(movie)

        document.getElementById("title").innerHTML = movie.Title
        document.getElementById("poster").src = movie.Poster
        document.getElementById("plot").innerHTML = movie.Plot
        document.getElementById("rate").innerHTML = movie.imdbRating
   
    }
}