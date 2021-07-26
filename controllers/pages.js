const films = require("../utils/films");


const pages = {

    home:  (req, res) => {

        res.status(200).render('home');
    },
    
    film: async(req, res) => {
        const title = await req.body.title
        const film = await films.getOneFilm(title);
        console.log(film);
        res.status(200).render('film',{data: film});
    }
}

module.exports = pages;