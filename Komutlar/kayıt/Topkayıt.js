const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const ms = require("ms")
const ayar = require("../../ayarlar.json")
const moment = require("moment")
require("moment-duration-format")
exports.run = function(client, message, args) {
   if (!message.member.roles.cache.has(ayar.yetki.botkomut) && !message.member.hasPermission('ADMINISTRATOR')) return 
let sayi = 1
let sayi2 = 1
                                
let map = message.guild.members.cache.filter(mem => !mem.user.bot).array().sort((a, b) => { return ( db.fetch(`toplamkayıt.${b.user.id}`) || 0) - ( db.fetch(`toplamkayıt.${a.user.id}`) || 0)  }).slice(0, 20).map(member => { return `\`${sayi++}.\` <@${member.user.id}>: Toplam Kayıtları: \`${( db.fetch(`toplamkayıt.${member.user.id}`) || 0)}\` (\`${( db.fetch(`erkekkayıt.${member.user.id}`) || 0)}\` Erkek , \`${( db.fetch(`kızkayıt.${member.user.id}`) || 0)}\` Kadın)`}).join("\n")
let map2 = message.guild.members.cache.filter(mem => !mem.user.bot).array().sort((a, b) => { return ( db.fetch(`erkekkayıt.${b.user.id}`) || 0) - ( db.fetch(`erkekkayıt+.${a.user.id}`) || 0)  }).slice(0, 20).map(member => { return `\`${sayi2++}.\` <@${member.user.id}> | \`${( db.fetch(`erkekkayıt.${member.user.id}`) || 0)} Erkek Kayıt\``})
const redlife = new MessageEmbed()
    .setDescription(map)
    .setAuthor(message.author.tag, message.member.user.avatarURL({dynamic: true}))
    .setColor(`RED`)

message.channel.send(redlife);
     message.react(ayar.onayemoji)
};

exports.conf = {enabled: true,guildOnly: true,aliases: ["topkayıt" , "kayıttop", "kayıttop"],permLevel: 0}
exports.help = {name: 'topkayıt',description: "Sunucuya kaydolmaya ne dersin ?",usage: 'Erkek isim yaş'} 