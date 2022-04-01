const { Client, Intents } = require('discord.js');
require('dotenv').config();

const { getPrice } = require('./getPrice.js');
const runner = require('./server.js');

// change these parameters
const channelID = '937697459369566229';
const symbol = 'LIBERO';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag} !`);

	const message = await client.channels.fetch(channelID);
	//message.send(`I'm listening to ${symbol} price movements`);

	setInterval(async () => {
		const price = await getPrice(symbol);
		await message.guild.me.setNickname(`${price.quote.USD.price.toPrecision(5)}$`);
	}, 10000);

	client.user.setActivity('Price Movements', { type: 'WATCHING' });
});

runner();

client.login(process.env.TOKEN);
