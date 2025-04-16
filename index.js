require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const prefix = '!amii';

client.once('ready', () => {
    console.log(`Amiibot est connecté en tant que ${client.user.tag} !`);
});

client.on('messageCreate', message => {
    // Ignorer les messages venant du bot lui-même ou sans le bon préfixe
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'bonjour') {
        message.reply('Salut ! Je suis Amiibot');
    } else if (command === 'help') {
        message.reply('Voici les commandes disponibles : `!amii bonjour`, `!amii help`');
    } else {
        message.reply('Commande inconnue. Essaie `!amii help`.');
    }
});

client.login(process.env.DISCORD_TOKEN);

