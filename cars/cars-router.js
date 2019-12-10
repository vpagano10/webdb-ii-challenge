const express = require('express');
const knex = require('knex');

// const db = require('../data/car-dealer.db3');
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true
});

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
        .from('cars')
    .then(cars => {
        res.status(200)
            .json(cars)
    })
    .catch(err => {
        console.log('error with GET /', err)
        res.status(500)
            .json({ message: 'Failed to retreieve cars' })
    })
});

router.get('/:id', (req, res) => {
    db.select('*')
        .from('cars')
        .where({ id: req.params.id })
        .first()
    .then(car => {
        res.status(200)
            .json(car)
    })
    .catch(err => {
        console.log('Error with GET /:id', err)
        res.status(500)
            .json({ message: 'Failed to retreieve car' })
    })
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars')
        .insert(carData, 'id')
    .then(ids => {
        const id = ids[0]
        return db('cars')
            .select('id', 'make', 'model', 'milage')
            .where({ id })
            .first()
            .then(car => {
                res.status(201)
                    .json(car)
            })
    })
    .catch(err => {
        console.log('Error with POST /', err)
        res.status(500)
            .json({ message: 'Failed to add new car' })
    })
});

module.exports = router;