const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');
const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");



router.get('/404', CheckAuth, async (req, res) => {
        
        res.render("notfound.ejs", {
            client: req.client.server.client.user,
             login: (req.isAuthenticated() ? "yes" : "no"),
            guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
            avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        });
    })



router.get('/blacklist', CheckAuth, async (req, res) => {
        
        res.render("notfound.ejs", {
            client: req.client.server.client.user,
             login: (req.isAuthenticated() ? "yes" : "no"),
            guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
            avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        });
    })


  
  
module.exports = router;