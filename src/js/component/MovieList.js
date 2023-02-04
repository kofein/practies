import {movie} from "./movie";
export default class MovieList {
    render(selector) {
        selector.appendChild(this.fragment)
    }

    setList(data) {
        this.fragment = document.createDocumentFragment()

        data.forEach(data => () => {
            const article = document.createElement('article')
            article.innerHTML = movie(data)
            article.classList.add('movie')
            this.fragment.appendChild(article)
        })

        console.log(this.fragment);
    }
}