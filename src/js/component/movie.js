export function movie(data){
    const movie = {}

    Object.assign(movie, data)

    movie.title = movie.name || movie.title

    const html = `
        <h2>#${movie.id} - ${movie.title}</h2>
        <div>${movie.overview}</div>
    `

    debugger

    return html
}
