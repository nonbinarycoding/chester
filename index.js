// Catbot the Discord bot
// by GL Osborne
// Returns a random cat joke when the command '+meow' is sent.

// Require stuff, declare stuff
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const fs = require('fs');
var path = require('path');
const prefix = '+'
var err = '';
var data = '';

// Log in

client.on('ready', () => {
    console.log('Bot has started!');
    client.user.setActivity('+meow for a joke');
});


// Watch for command

client.on('message', async message => {

        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (command === 'meow') {
            // Read in the file of cat jokes and make it an array
            fs.readFile((path.join(__dirname, 'catjokes.txt')), (err, data) => {
                if (err) {
                    throw err;
//                    console.log(data);
                } else {
                    const content = data.toString();
                    const allLines = content.split('\r\n');
                    // Choose a random line (aka, a joke)
                    var linenum = Math.floor(Math.random() * allLines.length);

                    // Reply to the command with the random joke
                    message.channel.send(allLines[linenum]);
                }
            });

        }
}, (err, data));

client.login(process.env.BOT_TOKEN);