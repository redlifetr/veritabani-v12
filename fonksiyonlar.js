const fs = require("fs");
const { readdirSync } = require("fs")

module.exports = (bot) => {

    fs.readdir("./Etkinlikler/", (err, files, dirs) => {
    const load = dirs => {
        if (err) console.error(err);
        let etkinlik = readdirSync(`./Etkinlikler/${dirs}/`).filter(f => f.split(".").pop() === "js");
        if (etkinlik.length <= 0) return console.log("Yüklenecek bir etkinlik dosyası bulamadım...");
        console.log(`• ${etkinlik.length} adet etkinlik dosyası yükleniyor...`);
        for (let file of etkinlik) {
            require(`./Etkinlikler/${dirs}/${file}`);
            console.log(`${dirs}/${file} dosyası yüklendi!`);
    }
    }
        ["main"].forEach(x => load(x));
});
    fs.readdir("./Komutlar/", (err, files, dirs) => {
    const load = dirs => {
        if(err) console.log(err);
        let commands = readdirSync(`./Komutlar/${dirs}/`).filter(f => f.split(".").pop() === "js")
        if(commands.lenght <= 0) return console.log("Yüklenecek bir komut dosyası bulamadım...");
        console.log(`• ${commands.length} adet komut dosyası yükleniyor...`);
       for (let files of commands) {
        let props = require(`./Komutlar/${dirs}/${files}`);
        console.log(`${dirs}/${files} dosyası yüklendi!`);
            bot.commands.set(props.help.name, props);
            props.conf.aliases.forEach(alias => bot.aliases.set(alias, props.help.name));
    }
    }
        ["kayıt","botsahip"].forEach(x => load(x));		
});
}