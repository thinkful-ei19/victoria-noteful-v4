'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* ========== POST/CREATE User ========== */
router.post('/users', (req, res, next)=> {
  const {username, fullname, password} = req.body;

  const newUser = {username, fullname, password};

  User.create(newUser)
    .then(result => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch( err => {
      next(err);
    });
    
  /***** Never trust users - validate input *****/
//   if (!username){
//     const err = new Error('Not Validate `username`');
//     err.sta 
//   }

});

module.exports = router;