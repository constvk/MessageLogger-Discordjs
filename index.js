const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client();
const fs = require("fs")

client.on("ready", () => {
  console.log(`\n--------------------><--------------------\n░░░████▌█████▌█░████████▐▀██▀\n░▄█████░█████▌░█░▀██████▌█▄▄▀▄\n░▌███▌█░▐███▌▌░░▄▄░▌█▌███▐███░▀\n▐░▐██░░▄▄▐▀█░░░▐▄█▀▌█▐███▐█\n░░███░▌▄█▌░░▀░░▀██░░▀██████▌\n░░░▀█▌▀██▀░▄░░░░░░░░░███▐███\n░░░░██▌░░░░░░░░░░░░░▐███████▌\n░░░░███░░░░░▀█▀░░░░░▐██▐███▀▌\n░░░░▌█▌█▄░░░░░░░░░▄▄████▀░▀\n░░░░░░█▀██▄▄▄░▄▄▀▀▒█▀█░\n--------------------><--------------------\n`)
});

client.on('messageDelete', message => {
  if(message.author.bot) return;
	if(message.author.id === client.user.id) return;
  if (message.channel.type === 'dm'){ 

    fs.writeFile("./filelogs.txt", `[^] ${message.author.username} (${message.author.id}) | '${message.content}'`, function(erro) {

      if(erro) {
          throw erro;
      }
    
      console.log(`< - ${message.author.username} (${message.author.id}) | '${message.content}' - >`)
    }); 

}})

client.login(config.token)