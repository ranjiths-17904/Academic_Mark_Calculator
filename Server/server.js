const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.get('/', (req, res) => res.send('API is running...'));

// Define user, auth, upload routes later
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
