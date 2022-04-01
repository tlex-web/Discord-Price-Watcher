const { Client, Intents } = require("discord.js")
require("dotenv").config()

//const { getPrice } = require('./getPrice.js')
const runner = require('./server.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

console.log(true)

// const member = client.users.fetch(959411283407548456)

// member.then(function(res) {
//     console.log(res)
// })
runner()

client.login(process.env.TOKEN);