const Discord = require('discord.js')
const {bot} = require('../../redlife');
const botconfig = require("../../ayarlar.json");
const db = require("quick.db");
var moment = require("moment");
bot.setMaxListeners(50)

bot.on("guildMemberAdd", async(member) => {
    const kayitChannel = member.guild.channels.cache.get(botconfig.kanal.hosgeldinkanal);
  const supheliChannel = member.guild.channels.cache.get(botconfig.kanal.süpheli);
  
  const teyitsizRole = member.guild.roles.cache.get(botconfig.genel.kayıtsızrolü1);
  const teyitsizRole2 = member.guild.roles.cache.get(botconfig.genel.kayıtsızrolü2);
  const suphelihesap = member.guild.roles.cache.get(botconfig.cezalar.yenihesaprolü);
  const tagrol = member.guild.roles.cache.get(botconfig.genel.tagrol);
  let eskiNick = member.user.username;

const emoji1 = (bot.emojis.cache.find(x => x.name === "emoji isim"));
const emoji2 = (bot.emojis.cache.find(x => x.name === "emoji isim"));
const emoji3 = (bot.emojis.cache.find(x => x.name === "emoji isim"));
const emoji4 = (bot.emojis.cache.find(x => x.name === "emoji isim"));
const emoji5 = (bot.emojis.cache.find(x => x.name === "emoji isim"));
const emoji6 = (bot.emojis.cache.find(x => x.name === "emoji isim"));
const emoji7 = (bot.emojis.cache.find(x => x.name === "emoji isim"));
const emoji8 = (bot.emojis.cache.find(x => x.name === "emoji isim"));

  if(member.user.username.includes(botconfig.tag)){ member.roles.add(tagrol)}
  let user = bot.users.cache.get(member.id);
  const t = new Date().getTime() - user.createdAt.getTime();
  const gün = moment(t).format('dddd');
  moment.locale('tr'); 
  var tar1 = moment(user.createdAt).format('LLL')

  if (t < 604800000)  {
    member.roles.add(suphelihesap)
    supheliChannel.send(`${emoji2} **${member} isimli kullanıcı sunucuya giriş yaptı.**\n\n${emoji3}**Hesap kurulma tarihi:** ${tar1}\nHesap şüpheli olduğu için **${suphelihesap}** rolü verildi.`)
  }
  else{
    member.roles.add(teyitsizRole)
    await member.roles.add(teyitsizRole2)
kayitChannel.send(`<@&${botconfig.yetki.botkomut}>`)
     const redEMBED = new Discord.MessageEmbed()
  .setColor("#05022e")
.setDescription(`>>> 
**__WELCOME TO ${member.guild.name}__**
\n ${emoji1} **Hoşgeldin,** ${member} **Seninle** **\`${member.guild.memberCount}\`** **Kişiyiz!**
\n ${emoji2} **Kayıt işlemlerinin tamamlanması için lütfen sesli odaya giriş yapın**\n\n${emoji3} <@&${botconfig.yetki.botkomut}> **Rolündeki yetkililer seninle ilgilenecektir.**
\n **${emoji4} Sayın üyelerimiz, Kayıt Sorumluları robot olmadığınızdan emin olana kadar sabırla beklemede kalınız.**
\n ${emoji5} **Kayıt işlemlerinizi tamamladıktan sonra sunucu içi bulunan kurallarımızı okumayı ihmal etmeyin.**
\n **${emoji7} Hesap Kuruluş Zamanı: \`${tar1}\` **
\n${emoji6} **Hesap Durumu:** ${emoji8}`
)
//.setImage("isterseniz gif falan");
kayitChannel.send(redEMBED);

   
   
   
   await member.setNickname(`${botconfig.tag} İsim | Yaş`);
 }
 });