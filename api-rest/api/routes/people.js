const e = require('express');
const { Router } = require('express');
const router = Router();
let people = require('../sample.json'); // database simulation

router.get('/', (req, res) => {
    res.json(people);
});

//get a person by id
router.get('/:id', (req, res) => {
    res.json(people.find(person => person.id === parseInt(req.params.id)));
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
        res.status(500).json({ error: 'Bad Request' });
    }
});

//delete a person by id
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    people = people.filter(person => person.id !== parseInt(req.params.id));
    res.json(people);
});

//modify a person by id
router.put('/:id', (req, res) => {
    const { name, mail, rol } = req.body;
    const person = people.find(person => person.id === parseInt(req.params.id));
    if (!person) {
        res.status(500).json({ error: 'Bad Request' });
    } else {
        if (name !== undefined) {
            person.name = name;
        }
        if (mail !== undefined) {
            person.mail = mail;
        }
        if (rol !== undefined) {
            person.rol = rol;
        }
    }
    people = people
    res.json(people);
});


module.exports = router;