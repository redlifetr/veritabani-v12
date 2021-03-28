const Discord = require('discord.js')
const {bot} = require('../../redlife');
const botconfig = require("../../ayarlar.json");
const db = require("quick.db");
var moment = require("moment");
bot.setMaxListeners(50)
bot.on('guildMemberRemove', async member => {
    db.push("isimler." + member.id,  `\`${member.displayName}\` (Sunucudan Ayrılma)\n`)
    db.add('isimlererkek.'+member.id, 1)
})