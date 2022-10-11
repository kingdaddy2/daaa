const { Client, Collection, discord } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const Discord = require('discord.js');
const client = new Client({ disableMentions: "everyone" });
client.setMaxListeners(50)
const moment = require("moment");
client.login('NzQ3ODgxNzk3MzQ5NjcxMTIy.X0VVMw.wUzThHxa9BFHmSO7u6RG-VcsVSg');
client.commands = new Collection();
client.queue = new Map();
const cooldowns = new Collection();
const fs = require('fs');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
client.website = require("./website/dashboard.js");
const { Database } = require("quickmongo");
client.db = new Database(
  "mongodb+srv://ryhnodb:rFs9Jvahe7p840bd@cluster0.57hbw.gcp.mongodb.net/rhyno?retryWrites=true&w=majority"
);
const db = client.db

db.on("ready", async () => {
  const ping = await db.ping();
  console.log(`Database Connected Uptime : ${db.uptime} , Ping : => { Read : ${ping.read} ,Write : ${ping.write}, Average : ${ping.average}`)
  
})
 
client.on("ready", () => {
  client.website.load(client);
  console.log(`${client.user.username} ready!`);
});
 
client.on("warn", (info) => console.log(info));
client.on("error", console.error);
  

 
module.exports = client

/*
const MessageMap = new Map();

client.on("message", async (msg) => {
   let Blacklist = await db.fetch(`Blacklist_${msg.author.id}`);
        if(Blacklist === 'on') return;
let userData = MessageMap.get(msg.author.id);
let msgCount = userData;
msgCount++

if(!userData) {
  return MessageMap.set(msg.author.id, 1)
}

if(msgCount === 20) {
  db.add(`xp_${msg.author.id}`, 5)
  db.add(`coins_${msg.author.id}`, 5)
  MessageMap.set(msg.author.id, 0)
} else {
  MessageMap.set(msg.author.id,msgCount + 1)
}
})


*/