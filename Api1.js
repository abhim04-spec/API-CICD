const express = require('express');
const app = express();

app.use(express.json()); // allows JSON body

let users = []; // in-memory "database"

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST create user
app.post('/users', (req, res) => {
    const user = { name: req.body.name, address: req.body.address, zipCode: req.body.zipCode };

    if (!user.name) {
        return res.status(400).json({ error: 'Name required' });
    }
    else if (!user.address) {
        return res.status(400).json({ error: "address is mandatory" });
    }
    else if (!user.zipCode) {
        return res.status(400).json({ error: "ZipCode is important" });
    }
    users.push(user);
    res.status(201).json(user);
});

// DELETE user
app.delete('/users/:name', (req, res) => {
    const name = req.params.name;

    users = users.filter(u => u.name !== name);
    res.json({ message: 'Deleted' });
});

module.exports = app;