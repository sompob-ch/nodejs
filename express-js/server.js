const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing application/json
app.use(express.json());

// Route that receives a POST request to /submit
app.post('/submit', (req, res) => {
    console.log(req.body)
    const { name, age } = req.body;
    const response = {
        name,
        age
    };
    res.send(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
