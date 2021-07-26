const fetch = require('node-fetch');

const films = {
    
    getOneFilm: async (title) => {
        const res = await fetch (`https://www.omdbapi.com/?t=${title}&apikey=baa1d554`);
        const film = await res.json();
        return film;
    }
}

module.exports = films;