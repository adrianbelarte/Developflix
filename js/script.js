import peliculas from './peliculas.js'


//separamos las peliculas por genero
const accion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
const thriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
const aventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));

function crearElementoPelicula(pelicula) {
    const div = document.createElement('div');
    div.classList.add('pelicula');
    div.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}" />
        <h3>${pelicula.title}</h3>
    `;
    return div;
}

const contenedorAccion = document.getElementById('genero-28');
accion.forEach(pelicula => {
    contenedorAccion.appendChild(crearElementoPelicula(pelicula));
});

const contenedorThriller = document.getElementById('genero-53');
thriller.forEach(pelicula => {
    contenedorThriller.appendChild(crearElementoPelicula(pelicula));
    });

const contenedorAventura = document.getElementById('genero-12');
aventura.forEach(pelicula => {
    contenedorAventura.appendChild(crearElementoPelicula(pelicula));
    });

mostrarPeliculasPorGenero();