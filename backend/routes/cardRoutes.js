const express = require('express');
const Card = require('../models/Card');
const router = express.Router();

// Get all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cards' });
    }
});

// Add a new card
router.post('/', async (req, res) => {
    try {
        const newCard = new Card(req.body);
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (error) {
        res.status(400).json({ error: 'Error adding new card' });
    }
});

// Update card
router.put('/:id', async (req, res) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCard);
    } catch (error) {
        res.status(400).json({ error: 'Error updating card' });
    }
});

// Delete card
router.delete('/:id', async (req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.id);
        res.json({ message: 'Card deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting card' });
    }
});

module.exports = router;

