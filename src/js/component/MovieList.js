import {movie} from "./movie";
export default class MovieList {
    drawToDOM(selector) {
        selector.innerHTML(this.movieList)
    }

    renderMovies(moviesList) {
        this.fragment = document.createDocumentFragment('')

        data.forEach(data => () => {
            this.fragment.appendChild(movie(data))
        })
    }
}