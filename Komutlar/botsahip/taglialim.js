const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../../ayarlar.json");

exports.run = async (client, message, args) => {
if(message.author.id !== config.sahip) return message.channel.send("Yetkin yetmiyor.")
let embed = new Discord.MessageEmbed().setFooter("Developer RedLife.").setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();
if(!args[0]) {
message.channel.send(embed.setDescription(`Komutu yanlış kullandınız! ${config.prefix}taglıalım aç/kapat`))
return;    
}
if (args[0] === "aç") {
if(db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`Taglı alım sistemi zaten aktif!`))
db.set(`taglıAlım.${message.guild.id}`, "taglıAlım")
message.channel.send(embed.setDescription(`Taglı alım sistemi aktif edildi!`))
return;    
} else if (args[0] === "kapat") {
if(!db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(` Taglı alım sistemi zaten devre dışı!`))
db.delete(`taglıAlım.${message.guild.id}`)
message.channel.send(embed.setDescription(`Taglı alım sistemi devre dışı bırakıldı!`))
return;    
};

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["taglıalım" , "taglıalım"],
  permLevel: 0
}
exports.help = {
  name: 'taglıalım',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'Erkek isim yaş'
} 