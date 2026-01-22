require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Bot online als ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);

// Express Webserver damit Render den Bot am Leben lässt
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot läuft!'));
app.listen(PORT, () => console.log(`Webserver läuft auf Port ${PORT}`));
