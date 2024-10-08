// Import Express
const express = require('express');
const fs = require('fs');

// Create an instance of Express
const app = express();

// Define the port
const port = 3000;

// Handle GET request on "/" path
app.get('/get_state', (req, res) => {
    fs.readFile('db.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading from file:', err);
        } else {
          res.send(data)
        }
      });
});

app.get('/open_door', (req, res) => {
    fs.writeFile('db.txt', "T", (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } 
        res.end()
      });
});


app.get('/close_door', (req, res) => {
    fs.writeFile('db.txt', "F", (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } 
        res.end()
      });
});


// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
