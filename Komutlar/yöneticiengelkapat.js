const Discord = require('discord.js');

const db = require('quick.db')

exports.run = (client, message, args) => { 

      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  if (!db.fetch(`yöneticiengel_${message.channel.id}`)) {

  return message.reply(`Sistem Zaten Kapalı`)

}

  db.delete(`yöneticiengel_${message.guild.id}`)

  message.reply(`Sistem Başarılı Bir Şekilde Aktif Edildi`)

};

exports.conf = {

  enabled: true,  

  guildOnly: false, 

  aliases: ['yönetici-engel-kapat'], 

  permLevel: 0

};

exports.help = {

  name: 'yöneticiengelkapat',

  description: 'sayaç', 

  usage: 'sayaç'

};