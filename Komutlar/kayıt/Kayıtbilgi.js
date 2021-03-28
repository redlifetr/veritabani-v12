const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
const ayar = require("../../ayarlar.json")


exports.run = async (client, message, args, presence) => {
   if (!message.member.roles.cache.has(ayar.yetki.botkomut) && !message.member.hasPermission('ADMINISTRATOR')) return 
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;


  const member = message.guild.member(user);
     let kız = db.get(`kızkayıt.${member.id}`) || 0;
    let erkek = db.get(`erkekkayıt.${member.id}`) || 0;
    let fakekayıt = db.get(`fakekayıt.${member.id}`) || 0;
    let toplam = kız+erkek+fakekayıt
  
  const redlife = new MessageEmbed()
  .setColor(`RANDOM`)
  .setAuthor(`Kayıt Bilgi`, member.user.avatarURL({dynamic: true}))
  .setTimestamp()
  .setFooter(`Developer RedLife`)
  .setDescription(`${user} Net Toplam **${toplam}** Kayıt (**${toplam}** Toplam, **${kız}** Kadın, **${erkek}** Erkek, **${fakekayıt}** Fake)`);
  
   
  
  message.channel.send(redlife);
  message.react(ayar.onayemoji)
};
exports.conf = {enabled: true,guildOnly: true,aliases: ["kayitbilgi" , "kayıtb", "kayıt"],permLevel: 0}
exports.help = {name: 'kayıtbilgi',description: "Sunucuya kaydolmaya ne dersin ?",usage: 'Erkek isim yaş'} 