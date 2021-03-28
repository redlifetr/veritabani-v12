const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
const ayar = require("../../ayarlar.json")
var tik = ayar.tik
var moment = require("moment")
require("moment-duration-format")
moment.locale("tr")
exports.run = async (client ,message,args ) => {
if (!message.member.roles.cache.has(ayar.yetki.botkomut) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yetersiz yetki.")
const member = await db.fetch(`reds.${message.author.id}.${message.guild.id}.member`)
let redlife = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(member)
if(!redlife) return message.channel.send("kimi kayıt edeceksin dostum?");
if (db.fetch(`taglıAlım.${message.guild.id}`)) {  
if(!redlife.user.username.includes(ayar.tag) && !redlife.roles.cache.has(ayar.genel.vipRol) && !redlife.roles.cache.has(ayar.genel.boosterRolü)) {
message.channel.send(new MessageEmbed().setDescription(`${redlife.user} isimli üyemizin tagımızı taşımadığını, sunucumuzda V.I.P. rolünde bulunmadığını ve sunucumuza takviye yapmadığını görüyorum ve bu yüzden kayıt işlemini gerçekleştiremiyorum. `))    
return
};
};
  if(redlife.user.bot) return message.channel.send(new MessageEmbed().setDescription(`Botlara herhangi bir işlem uygulayamazsın.`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RED')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji)).catch(err => message.channel.send(new MessageEmbed().setDescription(`Lütfen bir üyeyi etiketle ve tekrar dene!`).setColor('RED')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji)))
  if(redlife.id == (`${message.author.id}`)) return message.channel.send(new MessageEmbed().setDescription(`Kendine herhangi bir işlem uygulayamazsın.`).setAuthor(message.author.tag, message.member.user.avatarURL({dynamic: true})).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RED')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
  if(redlife.roles.cache.has(ayar.genel.erkekrolü1)) return message.channel.send(new MessageEmbed().setDescription(`Zaten kayıt edilmiş bir kullanıcıyı kayıt edemezsin. Eğer ki yanlış kayıt işlemi gerçekleştirdiysen <@&${ayar.yetki.developerperm}> rolündeki yetkililere ulaş.`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RED')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
  if(redlife.roles.cache.has(ayar.cezalar.yasaklıtagrolü)) return message.channel.send(new MessageEmbed().setDescription(`Bu kişi veritabanında yasaklı tagda bulunmaktadaır.Eğer bir sorun olduğunu düşünüyorsan <@&${ayar.yetki.developerperm}> rolündeki yetkililere ulaş.`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RED')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))	       
  let member2 = redlife.user;
  let zaman = new Date().getTime() - member2.createdAt.getTime();
  const gecen = moment
  .duration(zaman)
  .format(`DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`);
  var user = member2;
  var cfxzaman = []; 
  if (zaman < 604800000) {
  return message.channel.send(new MessageEmbed().setDescription(`Bu üyenin hesabı ${gecen} önce açıldığı için kaydı gerçekleştirelemedi.`).setColor(`RED`).setFooter(`${ayar.sunucuismi}`).setTimestamp()).then(msg => msg.delete({timeout: 10000}), message.react(ayar.onaysızemoji))
  db.add(`fakekayıt.${message.author.id}`, 1)
  }    
  if(redlife.roles.cache.has(ayar.genel.kızrolü1)){
  await redlife.roles.remove(ayar.genel.kızrolü1)
  }
  if(redlife.roles.cache.has(ayar.genel.kızrolü2)){
  await redlife.roles.remove(ayar.genel.kızrolü2)
  }
 await redlife.roles.remove(ayar.genel.kayıtsızrolü)
 await redlife.roles.remove(ayar.genel.kayıtsızrolü2)
 await redlife.roles.add(ayar.genel.erkekrolü1)
 await redlife.roles.add(ayar.genel.erkekrolü2)
  if(redlife.user.username.includes(ayar.tag)) redlife.roles.add(ayar.genel.tagrol) 
db.add(`erkekkayıt.${message.author.id}`, +1)
db.add(`toplamkayıt.${message.author.id}`, +1)
db.add('isimlererkek.'+redlife.id, 1)
db.push("isimler." + redlife.id,  `\`${redlife.displayName}\` (<@&${ayar.genel.erkekrolü1}>)\n`)
db.delete(`reds.${message.author.id}.${message.guild.id}.member`)
const redlife2 = new MessageEmbed()
.setColor(`RED`)
.setFooter(ayar.sunucuismi)
.setDescription(`${redlife} adlı kullanıcı başarıyla erkek olarak kaydedildi.`)
message.channel.send(redlife2).then(msg => msg.delete({timeout: 5000}))
message.react(ayar.onayemoji)
client.channels.cache.get(ayar.kanal.chat).send(`${redlife} **Hoşgeldins,<#${ayar.kanal.kurallar}> Kanal'ını Okumayı Unutma İyi Eğlenceler**`)
}; 
exports.conf = {enabled: true,guildOnly: true,aliases: ["erkek" , "e", "man", "adam"],permLevel: 0}
exports.help = {name: 'Erkek',description: "Sunucuya kaydolmaya ne dersin ?",usage: 'Erkek isim yaş'} 