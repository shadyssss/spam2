const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592450765029638144")
setInterval(function() {
channel.send(`Boted By Shady :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: :heart: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
