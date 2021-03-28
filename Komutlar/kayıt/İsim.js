const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
const ayar = require("../../ayarlar.json");
const jdb = new db.table("cezalar");

exports.run = async (client, message, args) => {
    if (!message.member.roles.cache.has(ayar.yetki.botkomut) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setDescription(`Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("RED").setFooter(`${ayar.sunucuismi}`).setTimestamp()).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))


  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!member) return message.channel.send(new MessageEmbed().setDescription(`Lütfen bir üyeyi etiketle ve tekrar dene!`).setColor('RANDOM')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
  if (member.user.bot)  return message.channel.send(new MessageEmbed().setDescription(`Botlara herhangi bir işlem uygulayamazsın.`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RANDOM')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
  
  
    if(member.id == (`${message.author.id}`)) return message.channel.send(new MessageEmbed().setDescription(`Kendine herhangi bir işlem uygulayamazsın.`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RANDOM')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
     if(member.roles.cache.has(ayar.yetki.botkomut)) return message.channel.send(new MessageEmbed().setDescription(`Belirttiğin kullanıcı **Yetkili** olduğu için işlem uygulayamazsın.`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RANDOM')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
  if(member.hasPermission("ADMINISTRATOR")) return message.channel.send(new MessageEmbed().setDescription(`Yöneticilere herhangi bir işlem uygulayamazsın.`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RANDOM')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))


if (!args[1]) return message.channel.send(new MessageEmbed().setDescription(`Lütfen tüm argümanları doğru giriniz.\nÖrnek Kullanım: !isim @redlife/ID [İsim] [Yaş]`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RANDOM')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
  let isim = args[1].charAt(0).replace('i', "İ").toUpperCase() + args[1].slice(1);

 let yaş = args[2];
  if(!yaş || isNaN(yaş)) return message.channel.send(new MessageEmbed().setDescription(`Lütfen tüm argümanları doğru giriniz.\nÖrnek Kullanım: !isim @redlife/ID [İsim] [Yaş]`).setFooter(`${ayar.sunucuismi}`).setTimestamp().setColor('RANDOM')).then(msg => msg.delete({timeout: 5000}), message.react(ayar.onaysızemoji))
      let member2 = member.user;
  let zaman = new Date().getTime() - member2.createdAt.getTime();
    const gecen = moment
    .duration(zaman)
 .format(`DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`);
  var user = member2;
  var cfxzaman = [];
  if (zaman < 604800000) {
   return message.channel.send(new MessageEmbed().setDescription(`Bu üyenin hesabı ${gecen} önce açıldığı için isim değiştirme gerçekleştirilemedi.`).setColor(`RANDOM`).setFooter(`${ayar.sunucuismi}`).setTimestamp()).then(msg => msg.delete({timeout: 10000}), message.react(ayar.onaysızemoji))
    
    db.add(`fakekayıt.${message.author.id}`, +1)
  } 
  let isimlerkız = db.get(`isimlerkız.${member.id}`) || 0;
    let isimler = db.get(`isimler.${member.id}`) || 0;
    let isimlererkek = db.get(`isimlererkek.${member.id}`) || 0;
let totalisimler = isimlererkek + isimlerkız

  let isims;
  if(!isimler) isims = "Kullanıcının veri tabanında eski isim kayıtı bulunamadı.\n"
  else isims = isimler.map(x => `${x}`).join(" • ")
        let updatedName
 if(member.user.username.includes(ayar.tag)) updatedName = `${ayar.tag} ${isim} | ${yaş}` 
else updatedName = `${ayar.tag} ${isim} | ${yaş}` 

 await member.setNickname(`${updatedName}`)
  const redlife = new MessageEmbed()
  .setColor(`RANDOM`)
  
  .setDescription(`${totalisimler ? `${member} kişisinin ismi başarıyla \`"${isim} | ${yaş}"\` olarak değiştirildi, bu üye daha önce bu isimler ile kayıt olmuş.\n\nKişinin toplamda **${totalisimler}** isim kayıtı bulundu.\n• ${isims}\n Kişinin önceki isimlerine \`!isimler @üye\` komutuyla bakarak kayıt işlemini gerçekleştirmeniz önerilir.`: "<@!"+member+"> üyesinin ismi başarıyla \`"+isim+" | "+yaş+"\` olarak değiştirildi"}`)
  message.channel.send(redlife).then(msg => msg.delete({timeout: 10000}))

db.add('isimlererkek.'+member.id, 1)
db.push("isimler." + member.id,  `\`${member.displayName}\`\n`)
};

exports.conf = {
  name: "İsim",
  guildOnly: true,
  aliases: ["nick", "isim","i",'İSİM','Nick'],
};
exports.help = {name: 'isim',description: "Sunucuya kaydolmaya ne dersin ?",usage: 'Erkek isim yaş'} 
