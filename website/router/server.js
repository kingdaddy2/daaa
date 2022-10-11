const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');
const Discord = require('discord.js')
const ms = require("parse-ms");
const client = require('../../index')
const db = client.db

router.get("/:guildID", CheckAuth, async (req, res) => {
 let serv = req.client.server.client.guilds.cache.get(req.params.guildID);
      if (!serv) return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=bot&permissions=-1&guild_id=${req.params.guildID}`);

      if(!req.client.server.client.guilds.cache.get(req.params.guildID).members.cache.get(req.user.id).hasPermission("MANAGE_GUILD")) return res.redirect("/guilds");

       let nickname = serv.members.cache.get(req.client.server.client.user.id).displayName

       let embedc = await db.fetch(`embedcolor_${req.params.guildID}`)
  if (embedc === null) embedc = '#b256b6'
  
  let prefix = await db.fetch(`prefix_${req.params.guildID}`)
  if(prefix == null) prefix = "#";
  
  
  let autorole = await db.fetch(`autorole_${req.params.guildID}`);
    let autoroler = await db.fetch(`autoroler_${req.params.guildID}`);
    //MESSAGE LOGS
  let messagelog = await db.fetch(`messagelog_${req.params.guildID}`);
  let messagelogc = await db.fetch(`messagelogc_${req.params.guildID}`);
//Join / Leave Logs
  const joinleavelogs = await db.fetch(`joinleavelogs_${req.params.guildID}`);
  const joinleavelogsc = await db.fetch(`joinleavelogsc_${req.params.guildID}`);
  //banlogs
  
  const banlogs = await db.fetch(`banlogs_${req.params.guildID}`);
  const banlogsc = await db.fetch(`banlogsc_${req.params.guildID}`);
  //rolelogs
  
  const rolelogs = await db.fetch(`rolelogs_${req.params.guildID}`);
  const rolelogsc = await db.fetch(`rolelogsc_${req.params.guildID}`);
  //Channels Logs
  const channellogs = await db.fetch(`channellogs_${req.params.guildID}`)
  const channellogsc = await db.fetch(`channellogsc_${req.params.guildID}`)
  
  let premiumowner = await db.fetch(`premium_owner_${req.params.guildID}`);
  let ownername = req.client.server.client.users.cache.get(premiumowner);
  let premiumtimer = await db.fetch(`premiumtimer_${req.params.guildID}`);
  let premium = await db.fetch(`premium_${req.params.guildID}`);
  
  let prURL;
  let prNAME;
  if(premium) {
    const { Client, Collection, discord } = require("discord.js");
  
  let token = await db.fetch(`premium_token_${req.params.guildID}`)
  let server = new Client({ disableMentions: "everyone" });
  
  
  server.login(token)
   let prURL = "https://cdn.discordapp.com/avatars/751343204653334538/8597f3c4ec6d0b9bacc6d95bbae54832.png?size=512"
   let prNAME = "Rhyno Premium" 
  }
              let timeout = 2592000000;

        let time = ms(timeout - (Date.now() - premiumtimer));  

  
        res.render("guild.ejs", {
        status: (req.isAuthenticated() ? `${req.user.username}#${req.user.discriminator}` : "Login"),
        client: req.client.server.client.user,
        guild:serv,
        messagelog:messagelog,
        messagelogc: messagelogc,
        autorole:autorole,
        prefix:prefix,
        prURL:prURL,
        prNAME:prNAME,
        premium:premium,
          premiumowner:premiumowner,
          time:time,
          ownername: ownername,
          channellogs:channellogs,
          channellogsc:channellogsc,
          rolelogs:rolelogs,
          rolelogsc:rolelogsc,
          banlogs:banlogs,
          banlogsc:banlogsc,
          joinleavelogs:joinleavelogs,
          joinleavelogsc:joinleavelogsc,
        nickname: nickname,
        user: req.user,
        autoroler:autoroler,
        embedc: embedc,
        avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
          
        })
})


 .post("/:guildID", CheckAuth, async function(req, res) { 
        if(!req.body.new_PREFIX || req.body.new_PREFIX.length === 0) return res.render("err.ejs", {
    msg: "Please Specify A Prefix",
    guildid: `${req.params.guildID}`
  })
         db.set(`prefix_${req.params.guildID}`, req.body.new_PREFIX)
  
  if(!req.body.new_NICK || req.body.new_NICK.length === 0) return res.render("err.ejs", {
    msg: "Please Specify A Nickname",
    guildid: `${req.params.guildID}`
  })
     let serv = req.client.server.client.guilds.cache.get(req.params.guildID);
       serv.members.cache.get(req.client.server.client.user.id).setNickname(req.body.new_NICK);
  let embedc = await db.fetch(`embedcolor_${req.params.guildID}`)
  if (embedc === null) embedc = '#b256b6'
  db.set(`embedcolor_${req.params.guildID}`, req.body.new_EMBED)
  

        res.redirect(`/servers/${req.params.guildID}`);
    })

.post("/autoroleoff/:guildID", CheckAuth, async function(req, res) { 
  
  db.delete(`autorole_${req.params.guildID}`)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })
.post("/autoroleon/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`autorole_${req.params.guildID}`, "True")
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

.post("/autorole/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`autoroler_${req.params.guildID}`, req.body.change_AUTOROLE)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

//LOGS



//Message
.post("/msglogon/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`messagelog_${req.params.guildID}`, "True")
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })


.post("/msglogoff/:guildID", CheckAuth, async function(req, res) { 
  
  db.delete(`messagelog_${req.params.guildID}`)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

.post("/messagelogschannel/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`messagelogc_${req.params.guildID}`,  req.body.change_LOGCHANNEL)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })
//Join / Leave

.post("/joinleavelogson/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`joinleavelogs_${req.params.guildID}`, "True")
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })


.post("/joinleavelogsoff/:guildID", CheckAuth, async function(req, res) { 
  
  db.delete(`joinleavelogs_${req.params.guildID}`)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

.post("/joinleavelogschannel/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`joinleavelogsc_${req.params.guildID}`,  req.body.change_LOGCHANNEL)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

//Channels

.post("/channellogson/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`channellogs_${req.params.guildID}`, "True")
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })


.post("/channellogsoff/:guildID", CheckAuth, async function(req, res) { 
  
  db.delete(`channellogs_${req.params.guildID}`)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

.post("/channellogschannel/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`channellogsc_${req.params.guildID}`,  req.body.change_LOGCHANNEL)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

//BAN

.post("/banlogson/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`banlogs_${req.params.guildID}`, "True")
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })


.post("/banlogsoff/:guildID", CheckAuth, async function(req, res) { 
  
  db.delete(`banlogs_${req.params.guildID}`)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

.post("/banlogschannel/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`banlogsc_${req.params.guildID}`,  req.body.change_LOGCHANNEL)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

//Roles

.post("/rolelogson/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`rolelogs_${req.params.guildID}`, "True")
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })


.post("/rolelogsoff/:guildID", CheckAuth, async function(req, res) { 
  
  db.delete(`rolelogs_${req.params.guildID}`)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })

.post("/rolelogschannel/:guildID", CheckAuth, async function(req, res) { 
  
  db.set(`rolelogsc_${req.params.guildID}`,  req.body.change_LOGCHANNEL)
  
  
           await res.redirect(`/servers/${req.params.guildID}`);
        
    })







//PREMIUM

.post("/premium/update", CheckAuth, async function(req, res) { 

const { Client, Collection, discord } = require("discord.js");
  
  let token = await db.fetch(`premium_token_${req.params.guildID}`)
  let server = new Client({ disableMentions: "everyone" });
  
  
  server.login(token)
  
  server.user.setAvatar(req.body.new_AVATAR);
  server.user.setUsername(req.body.new_NAME);

})

module.exports = router;