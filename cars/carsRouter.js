const express = require('express');
const db = require('./carsDb');
const router = express.Router();

router.get('/', (req, res)=> {
 db.get()
 .then(car => {
  res.status(200).json(car)
 }).catch(err => {
  res.status(500).json(err)
 })
})

module.exports = router;