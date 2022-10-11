const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');
const client = require('../../index')
const db = client.db

router.get('/', CheckAuth, async(req, res) => {
            let blacklist = await db.fetch(`Blacklist_${req.user.id}`)
  if(blacklist == null) blacklist = 'False'
  if(blacklist == "True") return res.redirect(`/err/blacklist`)
    res.render("guilds.ejs", {
        status: (req.isAuthenticated() ? `${req.user.username}` : "Logout"),
        client: req.client.server.client.user,
        user: req.user,
        db:db,
        guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
        avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`
    });
});

module.exports = router;