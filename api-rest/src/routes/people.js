const { Router } = require('express');
const router = Router();
const people = require('../sample.json'); // database simulation

router.get('/', (req, res) => {
    res.json(people);
});

router.post('/', (req, res) => {
    const { name, mail, rol  } = req.body;
    if (name && mail && rol) {
        const newPerson = {
            id : people.length + 1,
            name,
            mail,
            rol
        };
        people.push(newPerson);
        res.json(people);
    } else {
        res.status(400).json({ error: 'Bad Request' });
    }
});

module.exports = router;