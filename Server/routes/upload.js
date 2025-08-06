const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post('/upload', (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send('No file uploaded.');
  }

  const file = req.files.file;
  const uploadPath = path.join(__dirname, '..', 'uploads', file.name);

  file.mv(uploadPath, err => {
    if (err) return res.status(500).send(err);
    res.send('File uploaded successfully.');
  });
});

module.exports = router;
