const router = require('express').Router();
const pages = require('../controllers/pages');


router.get('/', pages.home);
router.get('/film/:title?', pages.film);
router.post('/film', pages.film);


module.exports = router;