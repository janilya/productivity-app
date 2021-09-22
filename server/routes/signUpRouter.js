const express = require('express');
const {newUsername,createUser} = require('../controllers/databaseController');
const router = express.Router();

router.post('/', createUser, (req, res) => {
  console.log(res.locals.userTasks);
  if(res.locals.errorMessage){
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
});

module.exports = router;