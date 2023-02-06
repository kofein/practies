import {movie} from "./movie";
export default class MovieList {
    render(selector) {
        selector.appendChild(this.fragment)
    }

    setList(data) {
        this.fragment = document.createDocumentFragment()

        data.results.forEach(data => {
            try {
                console.log(data);
                const article = document.createElement('article')
                article.innerHTML = movie(data)
                article.classList.add('movie', 'col-lg-3')
                this.fragment.appendChild(article)
            } catch(e) {
                console.log(e);
            }


        })
    }
}