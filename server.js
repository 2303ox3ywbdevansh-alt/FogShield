const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'fogshield-animated.html'));
});

// Catch all routes and serve the HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'fogshield-animated.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 FogShield is running on http://localhost:${PORT}`);
    console.log(`🌐 Server started successfully!`);
});
