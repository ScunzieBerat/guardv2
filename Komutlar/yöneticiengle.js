const Discord = require('discord.js');

const db = require('quick.db')

exports.run = (client, message, args) => { 

     //if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  if (db.fetch(`yöneticiengel_${message.guild.id}`)) {

  return message.reply(`Bu Özellik Aktifmiş`)

}

  db.set(`yöneticiengel_${message.guild.id}`, message.guild.id)

  message.reply(`Başarılı ! Bu Sunucuda Sistem Aktif** `)

};

exports.conf = {

  enabled: true,  

  guildOnly: false, 

  aliases: ['yönetici-engel-aç'], 

  permLevel: 3

};

exports.help = {

  name: 'yöneticiengelaç',

  description: 'sayaç', 

  usage: 'sayaç'

};