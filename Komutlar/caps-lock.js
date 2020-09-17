const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(`<a:evet:698227224482152448> **Yeterli yetki, bulunmamakta!**`);

  let capslock = await db.fetch(`capslock_${message.guild.id}`);
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`);
    message.channel.send(`<a:evet:698227224482152448>   **Capslock engelleme sistemi, kapatıldı!**`);
  }

  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, "acik");
    message.channel.send(`<a:evet:698227224482152448> ** Capslock engelleme sistemi, aktif!**`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["capslock-engel"],
  permLevel: 0
};
exports.help = {
  name: "caps-engel",
  category: "Moderasyon komutları!",
  description: "Capslock kullanımını engeller.",
  usage: "capslock-engelleme"
};