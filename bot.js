const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    
    let args = message.content.split(' ').slice(1).join(' ');
    
  if (message.content === 'ping') {
      message.channel.send(`<@${message.author.id}> Ping..!`)
  }
  
  
  if (message.content.startsWith('Gbc')) {
          if (!args[0]) {
message.channel.send("**Gbc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);

});
  }
 
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By :Veerz`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Veerz ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Galaxy Server.`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);
