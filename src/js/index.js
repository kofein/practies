//import MovieList from "./component/MovieList";

import movieService from "./movieService";

const input = document.querySelector(".search")

input.addEventListener('input', (e) => {
    const searchText = e.target.value

    movieService.getVideoByText(searchText)
        .then( result => console.log(result))
})

