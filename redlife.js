const ayar = require("./ayarlar.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
const ms = require('parse-ms');
const db = require("quick.db")
const client = new Discord.Client();
require('moment-duration-format');
const request = require("request")    
const humanizeDuration = require("humanize-duration")
const bot = new Discord.Client({disableEveryone: true});
require("./fonksiyonlar.js")(bot);
const newUsers = new Discord.Collection();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.afk = new Map();
/*const express = require('express')
const app = express()
app.get("/foo", (req, res, next) => {
  const foo = JSON.parse(req.body.jsonString);
});
process.on("unhandledRejection", (reason, promise) => {
});*/

bot.on("ready", () => {
console.log(` `);
console.log(`// ${bot.user.username} ismi ile giriş yapıldı!`);
bot.user.setPresence({ activity: { type: "WATCHING", name: `RedLife ❤️ </>`}, status: 'dnd' })
/*
Status kısmı için,
idle: Boşta,
dnd: Rahatsız Etmeyin,
online: Çevrimiçi
*/
});

Date.prototype.toTurkishFormatDate = function (format) {
    let date = this,
      day = date.getDate(),
      weekDay = date.getDay(),
      month = date.getMonth(),
      year = date.getFullYear(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
    let monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
    let dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
    if (!format) {
      format = "dd MM yyyy | hh:ii:ss";
    };
    format = format.replace("mm", month.toString().padStart(2, "0"));
    format = format.replace("MM", monthNames[month]); 
    if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2, 2));
    };
    format = format.replace("dd", day.toString().padStart(2, "0"));
    format = format.replace("DD", dayNames[weekDay]);
    if (format.indexOf("HH") > -1) format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
    if (format.indexOf("hh") > -1) {
      if (hours > 12) hours -= 12;
      if (hours === 0) hours = 12;
      format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
    };
    if (format.indexOf("ii") > -1) format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'));
    if (format.indexOf("ss") > -1) format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
    return format;
  };
module.exports = {
  bot: bot
};
bot.login(ayar.token);

setInterval(async() => {
bot.guild.members.cache.filter(red => red.user.username.includes(ayar.tag) && !red.roles.cache.has(ayar.genel.tagrol)).forEach(life => life.roles.add(ayar.genel.tagrol)) 
}, 1000 * 60)