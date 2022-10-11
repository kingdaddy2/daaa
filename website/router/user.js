const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');
const Discord = require('discord.js')
const ms = require("parse-ms");
const client = require("../../index.js");

router.get('/:userID', CheckAuth, async (req, res) => {

              let blacklist = await client.db.fetch(`Blacklist_${req.user.id}`)
  if(blacklist == null) blacklist = 'False'
  if(blacklist == "True") return res.redirect(`/err/blacklist`)
  
  let user = client.users.cache.get(req.params.userID);
  if(!user) return res.redirect('/err/404');

  let coins = await client.db.fetch(`coins_${req.params.userID}`)
  if(coins == null) coins = "0";
  
  let likes = await client.db.fetch(`likes_${req.params.userID}`)
  if(likes == null) likes = "0";
  
  let note = await client.db.fetch(`note_${req.params.userID}`)
  if(note == null) note = " ";
  
   var xp = await client.db.fetch(`xp_${req.params.userID}`)
        if (xp == null) xp = 1
        var level;
        var nxp;
        var nextLvl;
        if (xp <= 30 && xp >= 1) level = 1, nxp = 30, nextLvl = 2;
        if (xp <= 90 && xp >= 31) level = 2, nxp = 90, nextLvl = 3;
        if (xp <= 150 && xp >= 91) level = 3, nxp = 150, nextLvl = 4;
        if (xp <= 220 && xp >= 151) level = 4, nxp = 220, nextLvl = 5;
        if (xp <= 350 && xp >= 221) level = 5, nxp = 350, nextLvl = 6;
        if (xp <= 500 && xp >= 351) level = 6, nxp = 500, nextLvl = 7;
        if (xp <= 800 && xp >= 501) level = 7, nxp = 800, nextLvl = 8;
        if (xp <= 1200 && xp >= 801) level = 8, nxp = 1200, nextLvl = 9;
        if (xp <= 1700 && xp >= 1201) level = 9, nxp = 1700, nextLvl = 10;
        if (xp <= 2200 && xp >= 1701) level = 10, nxp = 2200, nextLvl = 11;
        if (xp <= 3000 && xp >= 2201) level = 11, nxp = 3000, nextLvl = 12;
        if (xp <= 3800 && xp >= 3001) level = 12, nxp = 3800, nextLvl = 13;
        if (xp <= 4800 && xp >= 3801) level = 13, nxp = 4800, nextLvl = 14;
        if (xp <= 6000 && xp >= 4801) level = 14, nxp = 6000, nextLvl = 15;
        if (xp <= 8000 && xp >= 6001) level = 15, nxp = 8000, nextLvl = 16;
        if (xp <= 10000 && xp >= 8001) level = 16, nxp = 10000, nextLvl = 17;
        if (xp <= 13000 && xp >= 10001) level = 17, nxp = 13000, nextLvl = 18;
        if (xp <= 16000 && xp >= 13001) level = 18, nxp = 16000, nextLvl = 19;
        if (xp <= 20000 && xp >= 16001) level = 19, nxp = 20000, nextLvl = 20;
        if (xp <= 23000 && xp >= 20001) level = 20, nxp = 23000, nextLvl = 21;
        if (xp <= 26000 && xp >= 23001) level = 21, nxp = 26000, nextLvl = 22;
        if (xp <= 29000 && xp >= 26001) level = 22, nxp = 29000, nextLvl = 23;
        if (xp <= 31000 && xp >= 29001) level = 23, nxp = 31000, nextLvl = 24;
        if (xp <= 35000 && xp >= 31001) level = 24, nxp = 35000, nextLvl = 25;
        if (xp <= 40000 && xp >= 35001) level = 25, nxp = 40000;


        if(xp > 40000) nxp = "MAX" , xp = "MAX" , level = "25" , nextLvl = "MAX";
  
  let iconURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg?size=128`;
if (req.user.avatar && req.user.avatar.startsWith("a_")) iconURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif?size=128`;
  
        res.render("p.ejs", {
            client: req.client.server.client.user,
            user: user,
                      coins: coins,
            likes: likes,
            note: note,
            xp: xp,
            nxp: nxp,
            level: level,
            nlvl: nextLvl,
             login: (req.isAuthenticated() ? "yes" : "no"),
            guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
            avatarURL: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
            iconURL: iconURL
        });
    })

  
  
module.exports = router;