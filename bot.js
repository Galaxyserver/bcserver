const prefix = "G";

client.on("message", message => {
let args = message.content.split(" ")
if(args[0].toLowerCase() === (prefix + `bc`)){
// let sdsa = message.content.split(" ").slice(6);
if(!args[1]) {
    return message.channel.send(`${message.author}, There's no message to send!`);
} 
if(!message.member.hasPermission("ADMINISTRATOR")){
    return message.channel.send(`You have no perms to do this`);
}
        message.guild.members.forEach(f => {
         
            let embedbc = new Discord.RichEmbed;
               embedbc.setTitle(`A new message!`);
            embedbc.addField(`The server`, `${message.guild.name}`,true);
            embedbc.addField(`The sender`,`${message.author}`,true);
            embedbc.addField(`The message`, `${message.content.split(" ").slice(1).join(" ")}`,true);
            embedbc.setFooter(`${galaxy.user.username}`, `${galaxy.user.displayAvatarURL}`);
            embedbc.setThumbnail(`${message.author.displayAvatarURL}`);
            embedbc.setColor(`RANDOM`);
            f.send(embedbc);
          
        });
       
  message.channel.send(`**عدد الاعضاء المستلمين ${message.guild.members.filter(f => f.status !== 'offline').size}**\n **عدد الاعضاء الغير مستلمين${message.guild.members.filter(f => f.status === 'offline').size}**`);
}
});

client.login(process.env.BOT_TOKEN);
