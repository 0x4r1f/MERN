const express = require('express');
const app = express();
const cors = require('cors');

// static file serving
app.use(express.static('public'));

app.use(cors());

const apiRoutes = require('./routes/api')
app.use('/api', apiRoutes);

app.listen("5000", () => {
    console.log("Server is running on http://localhost:5000");
}); 

