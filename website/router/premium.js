const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');
const Discord = require('discord.js')
const ms = require("parse-ms");

router.get("/", function(req, res) { 
        
        res.render("premium.ejs", {
        status: (req.isAuthenticated() ? `User Panel` : "Login"),
        client: req.client.server.client.user,
        user: req.user,
        login: (req.isAuthenticated() ? "yes" : "no"),
        invite: `https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=bot&permissions=-1`
        });
    })

  
module.exports = router;