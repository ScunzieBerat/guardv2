const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  let sunucu = client.guilds.get("589413911304863746")
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
if(!message.member.roles.has("682795123670646839")&& !message.member.roles.has("606710176539475988")) return message.channel.send("Bu komutu kullanmaya yetkin yok.");  
  let guild = message.guild
  let user = message.mentions.users.first();
  let sChannel = message.guild.channels.find(c => c.name === "?-chat")
  let sebep = args.slice(1).join(" ") || `Belirtilmemiş.`
  let yasaklayankisi = `Yasaklayan : ${message.author.tag} - ${message.author.id}`
  if (!user) return message.channel.send(`Kimi asacaksın kanka`)
  if(sunucu.members.get(user.id).roles.has("604492115707428924")) return message.channel.send("Bu kişi banlanamaz!").then(m => m.delete(9000));
if (user == message.author) return message.channel.send(`Banlayacağın kişiyi etiketle`)
   message.react('605973409150795786')
  message.guild.member(user).ban(`${sebep} | ${yasaklayankisi}`).catch(error => message.reply("Üyeyi yasaklamak için yetkim yetmiyor.")) 
  let embed2 = new Discord.RichEmbed()
  .addField(`Biri asıldı mı sanki he?`, `**Yasaklayan :** ${message.author.tag} \n **Yasaklanan :** ${user.tag}\n **Yasaklama Nedeni :** ${sebep} `)
  .setImage('https://cdn.discordapp.com/attachments/583680695293968404/601813274090274836/giphy.gif')
  let userembed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(`Sunucudan yasaklandın`, user.avatarURL)
  .setDescription(`**${guild.name}** sunucusundan **${sebep}** sebebiyle banlandın.`)
  .setImage('Kullanıcının özeline giden gif linki')
  user.send(userembed)
  message.channel.send(embed2).then(m => m.delete(9000));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 0
};
exports.help = {
  name: 'uban',
  description: 'Belirttiğiniz kullanıcıyı sunucudan yasaklar.',
  usage: 'yasakla <@kullanıcı>'
};