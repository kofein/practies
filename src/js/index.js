import MovieList from "./component/MovieList";

import movieService from "./movieService";

const input = document.querySelector(".search")
const Movies = new MovieList()
const list = document.querySelector(".movies")

input.addEventListener('input', (e) => {
    const searchText = e.target.value
    if (!searchText) return

    list.innerHTML = ''

    movieService.getVideoByText(searchText)
        .then( result => {
            Movies.setList(result)

            Movies.render(list)
        })
})

