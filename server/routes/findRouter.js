// const express = require('express');
// const { Op } = require('sequelize');
// const {
//   Author, Book, Genre, Popular,
// } = require('../db/models');

// const router = express.Router();

// router.post('/', async (req, res) => {
//   const { input } = req.body;
//   const found = await Book.findAll({
//     where: {
//       text: {
//         [Op.substring]: input,
//       },
//     },
//   });
//   res.json(found);
// });

// module.exports = router;
