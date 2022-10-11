const express = require('express');
const router = express.Router();
const passport = require("passport");
const CheckAuth = require('../auth/CheckAuth');

router.get("/", function(req, res) { 
  const invite = "https://discord.com/api/oauth2/authorize?client_id=747881797349671122&permissions=8&redirect_uri=https%3A%2F%2Frhyno.xyz%2Flogin&scope=bot";
   res.redirect(invite)
})



module.exports = router;
