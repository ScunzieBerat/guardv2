  const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const okey = bot.emojis.find(emoji => emoji.name === ":tik1:");
  if(!message.member.roles.has("702899316116815942")) return message.channel.send(`Bu komutu kullanabilmen için <@&702899316116815942> yetkiye sahip olman lazım.`);
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Kanka Cezasını Alacağın Kişinin Etiket, Atmayı Unuttun!**");
  user.removeRole('698221273561563176')
  user.addRole('698221270742990908')
const codeplus = new Discord.RichEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${user},adlı kullanıcı başarıyla **cezalıdan çıkarılmıştır.**`)
        .setColor('00000')
        .setTimestamp()
        message.channel.send(codeplus)
        message.react(okey)
  
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ceza"],
    permLevel: 3
}
exports.help = {
    name: 'unjail',
    description: 'taslak',
    usage: 'taslak'
}    