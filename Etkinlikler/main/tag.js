const Discord = require('discord.js')
const {bot} = require('../../redlife');
const botconfig = require("../../ayarlar.json");
const ayarlar = require("../../ayarlar.json");
var db = require("quick.db")
bot.setMaxListeners(50)
bot.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = botconfig.tag
  const sunucu = botconfig.sunucuid
  const emoji = bot.emojis.cache.find(emoji => emoji.name === "EMOJİ İSMİ");
  const emoji1 = bot.emojis.cache.find(emoji => emoji.name === "EMOJİ İSMİ");
  const sv = bot.guilds.cache.get(botconfig.sunucuid)
  const oc = sv.members.cache.get(newUser.id) 
  const kanal = botconfig.kanal.chat
  const tagrols = botconfig.genel.tagrol
  const erkek = botconfig.genel.erkekrolü1
  const erkek2 = botconfig.genel.erkekrolü2
  const kız1 = botconfig.genel.kızrolü1
  const kız2 = botconfig.genel.kızrolü2
  const kayıtsızm = botconfig.genel.kayıtsızrolü1
  const kayıtsızm2 = botconfig.genel.kayıtsızrolü2
  try {
  if (newUser.username.includes(tag) && !bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(tagrols)) {
  await bot.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`${newUser} ${tag} Tagımızı Aldığı için <@&${tagrols}> Rolünü kazandı! ${emoji}`));
  await bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(tagrols);
  }
  if (!newUser.username.includes(tag) && bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(tagrols)) {
  await bot.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı için <@&${tagrols}> Rolünü kaybetti! ${emoji1}`));
  await bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(tagrols);
  await bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(erkek);
      await bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(erkek2);
      await bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(kız1);
      await bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(kız2);
	  await bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(kayıtsızm);
      await bot.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(kayıtsızm2);
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});