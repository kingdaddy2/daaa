const express = require('express');
const router = express.Router();
const passport = require("passport");
const CheckAuth = require('../auth/CheckAuth');
const Discord = require('discord.js')


router.get("/", function(req, res) { 
    res.render("index.ejs", {
        status: (req.isAuthenticated() ? `Profile` : ` Get Started`),
        client: req.client.server.client.user,
        user: req.user,
        login: (req.isAuthenticated() ? "yes" : "no"),
        invite: `https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=bot&permissions=-1`
    });
})
    .get("/login", passport.authenticate("discord", { failureRedirect: "/" }), 
        function(req, res) {         
   const hook = new Discord.WebhookClient(
      "750495916980437033",
      "kIirs6ZYiCEsC9Bg1ChCr_Tww6WpM_VxEbHPDbS4-vv_Ev2yG4cTaIQbGjMN96p3qXTs"
    );
  const loginembed = new Discord.MessageEmbed()
.setColor("b256b6")
      .setTitle(`${req.user.username}#${req.user.discriminator} Just Logged In To Rhyno Dashboard`)
      .setDescription(`**${req.user.username}#${req.user.discriminator} ID** : \`\`${req.user.id}\`\` `)
      .setFooter(`Rhyno Discord Bot Support`)
      .setThumbnail("https://cdn.discordapp.com/icons/747874086679740506/a_38737e5591b46bab7819123f08baf55e.gif?size=1024");        
  res.redirect("/guilds");
  hook.send(loginembed)
    })
        .get("/logout", async function(req, res) {
  const hook = new Discord.WebhookClient(
      "750496436067500125",
      "RcfGWw5Ja_ByjDZItdhBOzoGMbfXL83YKvFLl1-D958up4Fbo6OJWVrqnfNIYwVP3btr"
    );  
  const logoutembed = new Discord.MessageEmbed()
.setColor("b256b6")
      .setTitle(`${req.user.username}#${req.user.discriminator} Just logged Out from Rhyno Dashboard`)
      .setDescription(`**${req.user.username}#${req.user.discriminator} ID** : \`\`${req.user.id}\`\` `)
      .setFooter(`Rhyno Discord Bot Support`)
      .setThumbnail("https://cdn.discordapp.com/icons/747874086679740506/a_38737e5591b46bab7819123f08baf55e.gif?size=1024");      
            await req.logout();
  hook.send(logoutembed)
            await res.redirect("/");
        });


//


module.exports = router;
 