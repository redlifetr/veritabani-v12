const { MessageEmbed } = require('discord.js');
const qdb = require("quick.db");
const ayar = require("../../ayarlar.json");
const botconfig = require("../../ayarlar.json");

exports.run = async (client, message, args) => {
	message.delete()
	    if (!message.member.roles.cache.has(botconfig.yetkililer.botkomut) && !message.member.hasPermission("ADMINISTRATOR")) return;

    let red = args[0];
if(!args[0]) return message.channel.send(new MessageEmbed()
        .setDescription(`
**Belirtilen üyeye **VIP** rolü verir/alır** \`.rol vip @user\`

**Belirtilen üyeye **MÜZİSYEN** rolü verir/alır** \`.sicil müzisyen @user\`

**Belirtilen üyeye **VOKAL** rolü verir/alır** \`.sicil vokal @user\`
`)).then(x => x.delete({timeout: 10000}));
if (!red) return;

if (red === "vip") {
		message.delete()
        let vipRol = message.guild.roles.cache.get(ayar.genel.vipRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (vipRol && !member.roles.cache.has(ayar.genel.vipRol)) {
             member.roles.add(vipRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${vipRol} rolü verdim.`))
             message.react("✅");
         } 
         if (vipRol && member.roles.cache.has(ayar.genel.vipRol)) {
            member.roles.remove(vipRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${vipRol} rolünü aldım.`))
            message.react("✅")
         } 
         if (!vipRol) {
             message.channel.send(olumsuz.setDescription(`VIP rolü bulunamadı.`))
             message.react("❎")
         }

    return;
}

if (red === "müzisyen") {
		message.delete()
        let muzisyenRol = message.guild.roles.cache.get(ayar.genel.muzisyenRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (muzisyenRol && !member.roles.cache.has(ayar.genel.muzisyenRol)) {
             member.roles.add(muzisyenRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${muzisyenRol} rolü verdim.`))
             message.react("✅");
         } 
        if (muzisyenRol && member.roles.cache.has(ayar.genel.muzisyenRol)) {
            member.roles.remove(muzisyenRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${muzisyenRol} rolünü aldım.`))
            message.react("✅")
         } 
        if (!muzisyenRol) {
             message.channel.send(olumsuz.setDescription(`Müzisyen rolü bulunamadı.`))
             message.react("❎")
         }

    return;
}
  if (red === "vokal") {
	  	message.delete()
        let vokalRol = message.guild.roles.cache.get(ayar.genel.vokalRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (vokalRol && !member.roles.cache.has(ayar.genel.vokalRol)) {
             member.roles.add(vokalRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${vokalRol} rolü verdim.`))
             message.react("✅");
         } 
        if (vokalRol && member.roles.cache.has(ayar.genel.vokalRol)) {
            member.roles.remove(vokalRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${vokalRol} rolünü aldım.`))
            message.react("✅")
         } 
        if (!vokalRol) {
             message.channel.send(olumsuz.setDescription(`Vokal rolü bulunamadı.`))
             message.react("❎")
         }

		}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sicil"],
  permLevel: 0
};
exports.help = {
  name: "sicil",
  description: "sicil",
  usage: "sicil"
};