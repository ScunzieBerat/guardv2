const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
if (!message.member.roles.has('Kod Paylaşımcı Rol ID')) return message.channel.send(`Bu komutu kullanabilmek için \`Kod Paylaşımcı\` rolüne sahip olmasınız.`);
 
let kanal = args[0]
if(!kanal) return message.channel.send(`Kanal adı yazmalısın!`)
  
let link = args.slice(1).join(" ")
let l = args[1]
if(!l) return message.channel.send(`Hastebin linkini ve kodun açıklamasını yazmalısın!`)
  
const embed = new Discord.RichEmbed()
.setTitle('Kod Eklendi!')
.setDescription(`**Kodun Adı: ${kanal}**\n **Paylaşan Kişi: ${message.author}**\n \n **Eklenen Kod:** \n **${link}** \n \n **Bir Sorun Yaşar İseniz <#Hata Yardım Kanal ID> Kanalından Yardım Alabilirsiniz. Kod Bozuk ise: !hata <hatalı-kod> Şeklinde Bildirebilirsiniz!**`)
.setThumbnail(client.user.avatarURL)
.setColor('#04b0d6')
.setFooter('Darkcode Kod Paylaşım', message.author.avatarURL)
//DarkCode
message.guild.createChannel(`↬📂↫${kanal}`, "text").then(ka => {

let rol = message.guild.roles.find(x => x.name === "@everyone")

let rol2 = message.guild.roles.find(z => z.id === "kanalı göre bilecek rol ID ")


ka.overwritePermissions(rol,  {

    READ_MESSAGES: false,
    SEND_MESSAGES: false

})

ka.overwritePermissions(rol2,  {

    READ_MESSAGES: true,
    SEND_MESSAGES: false

})
ka.setParent("Kategori")

ka.send(embed)

})
   
}
exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: []
}


exports.help = {
name: 'kod-paylaş'    
}
﻿