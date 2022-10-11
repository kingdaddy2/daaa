const express = require('express');
const router = express.Router();
const passport = require("passport");
const CheckAuth = require('../auth/CheckAuth');

router.get("/", function(req, res) { 
  const support = 'https://discord.gg/CcHNt4e';
   res.redirect(support)
})



module.exports = router;
