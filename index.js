const { Client, Intents } = require('discord.js');
require('dotenv').config();

const { getPrice } = require('./getPrice.js');
const runner = require('./server.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag} !`);

	const message = await client.channels.fetch('937697459369566229');
	//message.send("I'm listening to $LIBERO price movements");

	setInterval(async () => {
		const price = await getPrice();
		await message.guild.me.setNickname(`${price.quote.USD.price.toPrecision(5)} $`);
	}, 10000);

	client.user.setActivity('Price Movements', { type: 'WATCHING' });
});

runner();

client.login(process.env.TOKEN);
