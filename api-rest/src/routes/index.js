const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({title: "Interestellar"});
});

router.get('/test', (req, res) => {
    const data = {
        name: "test",
        website: "https://www.google.com"
    }
    res.json(data);
});

module.exports = router;