const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const fs = require("fs")
const botconfig = require("../../ayarlar.json");
const ayar = require("../../ayarlar.json");
exports.run = async (client, message, args) => {
	message.delete()
if(message.author.id !== ayar.sahip) return message.channel.send("Yetkin yetmiyor.")
    let red = args[0];
if(!args[0]) return message.channel.send(new MessageEmbed()
        .setDescription(`
**.verisil tüm => Bütün verileri siler

.verisil kayıt => Etiketlediğin kişinin kayıt bilgisini sıfırlar

.verilsil isim => Etiketlediğin kişinin isim geçmişini sıfırlar**
`)).then(x => x.delete({timeout: 10000}));
if (!red) return;

if (red === "tüm") {
		message.delete()
await db.delete(`toplamkayıt.`)
await db.delete(`erkekkayıt.`)
await db.delete(`kızkayıt.`) 
await db.delete(`isimler.`)
await db.delete(`isimlerkız.`)
await db.delete(`isimlererkek.`) 
message.channel.send(new MessageEmbed().setDescription(`Başarıyla bütün bilgileri sıfırlandı.`).setFooter(ayar.sunucuismi).setTimestamp().setColor(`RED`)).then(msg => msg.delete({timeout: 5000}))
return;
}

if (red === "kayıt") {
		message.delete()
  if(!args[0]) return message.channel.send(new MessageEmbed().setDescription(`Kayıt verisini sıfırlayacağın üyeyi belirtmelisin.\n\n\`.datasil @RedLife/ID\``).setColor("RED").setFooter(`Developer RedLife`).setTimestamp()).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))  
  let redlife = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase().includes(args[0].toLowerCase())) 
message.channel.send(new MessageEmbed().setDescription(`Başarıyla ${redlife} üyesinin kayıt bilgileri sıfırlandı.`).setFooter(ayar.sunucuismi).setTimestamp().setColor(`RED`)).then(msg => msg.delete({timeout: 5000}))
message.react(ayar.onayemoji)
await db.delete(`toplamkayıt.${redlife.id}`)
await db.delete(`erkekkayıt.${redlife.id}`)
await db.delete(`kızkayıt.${redlife.id}`) 
    return;
}
  if (red === "isim") {
	  	message.delete()

  if(!args[0]) return message.channel.send(new MessageEmbed().setDescription(`İsim verisini sıfırlayacağın üyeyi belirtmelisin.\n\n\`.verisil @RedLife/ID\``).setColor("RED").setFooter(`Developer RedLife`).setTimestamp()).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))  
  let redlife = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase().includes(args[0].toLowerCase())) 
message.channel.send(new MessageEmbed().setDescription(`Başarıyla ${redlife} üyesinin isim bilgileri sıfırlandı.`).setFooter(ayar.sunucuismi).setTimestamp().setColor(`RED`)).then(msg => msg.delete({timeout: 5000}))
message.react(ayar.onayemoji)
await db.delete(`isimler.${redlife.id}`)
await db.delete(`isimlerkız.${redlife.id}`)
await db.delete(`isimlererkek.${redlife.id}`) 
		}	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["verisil"],
  permLevel: 0
};

exports.help = {
  name: "verisil",
  description: "Verileri silersiniz!",
  usage: "verisil"
};
