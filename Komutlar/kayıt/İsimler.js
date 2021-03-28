const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
const ayar = require("../../ayarlar.json")
const { Client, MessageAttachment } = require('discord.js');

exports.run = async (client, message, args, presence) => {
   if (!message.member.roles.cache.has(ayar.yetki.botkomut) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setDescription(`Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("RED").setFooter(`${ayar.sunucuismi}`).setTimestamp()).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

   if (!member) return message.channel.send(new MessageEmbed().setDescription(`Lütfen bir üyeyi etiketle ve tekrar dene!`).setColor('RANDOM')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))

  let isimlerkız = db.get(`isimlerkız.${member.id}`) || 0;
    let isimler = db.get(`isimler.${member.id}`) || 0;
    let isimlererkek = db.get(`isimlererkek.${member.id}`) || 0;
  
let totalisimler = isimlererkek + isimlerkız

  let isims;
  if(!isimler) isims = "Kullanıcının veri tabanında eski isim kayıtı bulunamadı."
  else isims = isimler.map(x => `${x}`).join(" • ")
    
  let Vegasss = new MessageEmbed()
  .setColor(`RANDOM`)
  .setAuthor(member.user.tag, member.user.avatarURL({dynamic: true}))
  .setDescription(`${totalisimler ? `Bu üyenin toplamda ${totalisimler} isim kayıtı bulundu:`: ""}\n\n • ${isims}`)
   message.channel.send(Vegasss)
    message.react(ayar.onayemoji)
};
exports.conf = {enabled: true,guildOnly: true,aliases: ["isimler" , "İSİMLER", "İSİMLER"],permLevel: 0}
exports.help = {name: 'isimler',description: "Sunucuya kaydolmaya ne dersin ?",usage: 'Erkek isim yaş'}