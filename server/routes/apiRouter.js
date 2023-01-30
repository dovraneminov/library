const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/comics', async (req, res) => {
  try {
    const persons = await axios('https://gramener.com/comicgen/v1/comic ');
    res.json(persons.data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
