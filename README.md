# CatBot for Discord

CatBot is an incredibly simple Discord bot.  You send it the command '+meow' and it returns a random joke about cats.  That's it.

This bot is running and is public, but I thought I'd share the code for anyone looking for an example of how to write a bot that returns a random line of a text file to a Discord channel.


## Requirements

To run the existing public bot, you don't need anything but admin level access to a Discord server and a web browser.

To run the bot code on your system, you'll need node.js and npm.


## Installation

### Public bot 
While logged into Discord, go to: 
https://discordapp.com/api/oauth2/authorize?client_id=686054770141692080&permissions=2048&scope=bot

Choose your server and authorize the bot.

### Running the code yourself

Please see this article for directions on how to set up a Discord bot.  It's a longish process.  
Just use this project's index.js instead of the article's.  You will need to set up your own package.json
file; follow the article's instructions.
https://thomlom.dev/create-a-discord-bot-under-15-minutes/


## Usage

In the Discord server running CatBot, type:

```
+meow
```

A random cat joke will be returned to the channel.


## Support

[Report an issue](https://github.com/glosborne/) if you have problems.


## Notes

The jokes were copied into a text file from https://bestlifeonline.com/cat-jokes/ 
in case you're wondering where they came from.  I did not write them myself.  Feel free to send me more jokes!


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)