const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');
const client = require('../../index')
const db = client.db

router.get('/', CheckAuth, async(req, res) => {  
     let Blacklist = await db.fetch(`Blacklist_${req.user.id}`);
        if(Blacklist === 'on') return res.redirect(`/err/blacklist`)
  
                let blacklist = await client.db.fetch(`Blacklist_${req.user.id}`)
  if(blacklist == null) blacklist = 'False'
  if(blacklist == "True") return res.redirect(`/err/blacklist`)
  
  let bg1 = await db.fetch(`bg1_${req.user.id}`);
  let bg2 = await db.fetch(`bg2_${req.user.id}`);
  let bg3 = await db.fetch(`bg3_${req.user.id}`);
  let bg4 = await db.fetch(`bg4_${req.user.id}`);
  let bg5 = await db.fetch(`bg5_${req.user.id}`);
  let bg6 = await db.fetch(`bg6_${req.user.id}`);
  let bg7 = await db.fetch(`bg7_${req.user.id}`);
  let bg8= await db.fetch(`bg8_${req.user.id}`);
  let bg9 = await db.fetch(`bg9_${req.user.id}`);
  let bg10 = await db.fetch(`bg10_${req.user.id}`);
  
  
  
    const liver = await db.fetch(`liver_${req.user.id}`);
    const real = await db.fetch(`real_${req.user.id}`);
    const bvb = await db.fetch(`bvb_${req.user.id}`);
    const barca = await db.fetch(`barca_${req.user.id}`);
  //VIP
  
  let vip1 = await db.fetch(`vip1_${req.user.id}`);
  let vip2 = await db.fetch(`vip2_${req.user.id}`);
  let vip3 = await db.fetch(`vip3_${req.user.id}`);
  let vip4 = await db.fetch(`vip4_${req.user.id}`);
  
    let curbg = await db.fetch(`currentbg_${req.user.id}`);
    if(curbg == null) curbg = 'https://cdn.discordapp.com/attachments/740429389832912896/740430005510865028/image_14.png';

      let curbadge = await db.fetch(`curbadge_${req.user.id}`);

let vip = await db.fetch(`vip_${req.user.id}`);


    res.render("bg.ejs", {
        status: (req.isAuthenticated() ? `${req.user.username}#${req.user.discriminator}` : "Logout"),
        client: req.client.server.client.user,
        bg1: bg1,
        bg2: bg2,
        bg3: bg3,
        bg4: bg4,
        bg5: bg5,
        bg6: bg6,
        bg7: bg7,
        bg8: bg8,
        bg9: bg9,
        bg10: bg10,
      
      //
        curbadge: curbadge,
        liver: liver,
        barca: barca,
        bvb: bvb,
        real: real,

      //
       vip:vip,
      vip1:vip1,
      vip2:vip2,
      vip3:vip3,
      vip4:vip4,
      //
        curbg: curbg,
        guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
        avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`
    });
 })
//1
    .post("/1", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '1000') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '1000')
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741429833044590633/48-482983_pretty-art-backgrounds.jpg')
    db.set(`bg1_${req.user.id}`, 'true')
    await res.redirect(`/customize`);
})
    .post("/u1", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741429833044590633/48-482983_pretty-art-backgrounds.jpg')
    await res.redirect(`/customize`);
})
// 2
    .post("/2", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '1000') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '1000')
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741429834277978172/67-671044_anime-wallpaper-hd-4k.jpg')
    db.set(`bg2_${req.user.id}`, 'true')
    await res.redirect(`/customize`);
})
    .post("/u2", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741429834277978172/67-671044_anime-wallpaper-hd-4k.jpg')
    await res.redirect(`/customize`);
})
//3
    .post("/3", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '1000') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '1000')
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741429837478232124/144020.jpg')
    db.set(`bg3_${req.user.id}`, 'true')
    await res.redirect(`/customize`);
})
    .post("/u3", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741429837478232124/144020.jpg')
    await res.redirect(`/customize`);
})
//4
    .post("/4", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '1000') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '1000')
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430560093896804/rZP9JH0z_400x400.jpg')
    db.set(`bg4_${req.user.id}`, 'true')
    await res.redirect(`/customize`);
})
    .post("/u4", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430560093896804/rZP9JH0z_400x400.jpg')
    await res.redirect(`/customize`);
})
//5
    .post("/5", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '1000') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '1000')
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430562090385549/Webp.net-resizeimage_1.jpg')
    db.set(`bg5_${req.user.id}`, 'true')
    await res.redirect(`/customize`);
})
    .post("/u5", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430562090385549/Webp.net-resizeimage_1.jpg')
    await res.redirect(`/customize`);
})
//6
    .post("/6", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '1000') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '1000')
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430564103651338/Webp.net-resizeimage_2.jpg')
    db.set(`bg6_${req.user.id}`, 'true')
    await res.redirect(`/customize`);
})
    .post("/u6", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430564103651338/Webp.net-resizeimage_2.jpg')
    await res.redirect(`/customize`);
})
//7
    .post("/7", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '1000') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '1000')
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430566251003944/Webp.net-resizeimage.jpg')
    db.set(`bg7_${req.user.id}`, 'true')
    await res.redirect(`/customize`);
})
    .post("/u7", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430566251003944/Webp.net-resizeimage.jpg')
    await res.redirect(`/customize`);
})
//8
    .post("/8", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '1000') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '1000')
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430568507539556/Webp.net-resizeimage2.png')
    db.set(`bg8_${req.user.id}`, 'true')
    await res.redirect(`/customize`);
})
    .post("/u8", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/741430568507539556/Webp.net-resizeimage2.png')
    await res.redirect(`/customize`);
})
















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1
    .post("/b1", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '500') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '500')
    db.set(`real_${req.user.id}`, 'True')
    db.set(`curbadge_${req.user.id}`, 'https://cdn.discordapp.com/attachments/740556620358221906/741203011287646218/real-madrid.png')
    await res.redirect(`/customize#badge`);
})
    .post("/ub1", CheckAuth, async function(req, res) {  
    db.set(`curbadge_${req.user.id}`, 'https://cdn.discordapp.com/attachments/740556620358221906/741203011287646218/real-madrid.png')
    await res.redirect(`/customize#badge`);
})




//2




    .post("/b2", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '500') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '500')
    db.set(`liver_${req.user.id}`, 'True')
    db.set(`curbadge_${req.user.id}`, 'https://cdn.discordapp.com/attachments/740556620358221906/741203010046132224/liverpool.png')

    await res.redirect(`/customize#badge`);
})
    .post("/ub2", CheckAuth, async function(req, res) {  
    db.set(`curbadge_${req.user.id}`, 'https://cdn.discordapp.com/attachments/740556620358221906/741203010046132224/liverpool.png')
    await res.redirect(`/customize#badge`);
})



//3



    .post("/b3", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '500') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '500')
    db.set(`barca_${req.user.id}`, 'True')
    db.set(`curbadge_${req.user.id}`, 'https://cdn.discordapp.com/attachments/740556620358221906/741203007877939210/022-barcelona.png')

    await res.redirect(`/customize#badge`);
})
    .post("/ub3", CheckAuth, async function(req, res) {  
    db.set(`curbadge_${req.user.id}`, 'https://cdn.discordapp.com/attachments/740556620358221906/741203007877939210/022-barcelona.png')
    await res.redirect(`/customize#badge`);
})



//4



    .post("/b4", CheckAuth, async function(req, res) {  
  let coins = await db.fetch(`coins_${req.user.id}`)
  if(coins < '500') return res.render("nf.ejs")
  
    db.subtract(`coins_${req.user.id}`, '500')
    db.set(`bvb_${req.user.id}`, 'True')
    db.set(`curbadge_${req.user.id}`, 'https://cdn.discordapp.com/attachments/740556620358221906/741203008796360714/025-borusia-dortmund.png')

    await res.redirect(`/customize#badge`);
})
    .post("/ub4", CheckAuth, async function(req, res) {  
    db.set(`curbadge_${req.user.id}`, 'https://cdn.discordapp.com/attachments/740556620358221906/741203008796360714/025-borusia-dortmund.png')
    await res.redirect(`/customize#badge`);
})





//VIP Section
    .post("/vip1", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/743740896280969246/43.jpg')
    await res.redirect(`/customize`);
})
   
//2

    .post("/vip2", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/743740898411806740/44.jpg')
    await res.redirect(`/customize`);
})

//3
    .post("/vip3", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/743740899523035186/46.jpg')
    await res.redirect(`/customize`);
})

//4
    .post("/vip4", CheckAuth, async function(req, res) {  
    db.set(`currentbg_${req.user.id}`, 'https://cdn.discordapp.com/attachments/741429412083269753/743740900735320174/47.jpg')
    await res.redirect(`/customize`);
})
//END
module.exports = router;