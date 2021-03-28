const Discord = require('discord.js')
const {bot} = require('../../redlife');
const botconfig = require("../../ayarlar.json");
const db = require("quick.db");
bot.setMaxListeners(50)
const prefix = botconfig.prefix;
const tag = botconfig.tag
bot.on("message", async (message) => {
    const guild = message.guild;
    if(message.author.bot || message.channel.type === "dm") return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)	
});
bot.on("message", async msg => {
  if (msg.author.bot) return;
  var random = [
    "Oha bu çocuk Türk müüüüüüüüüüüü?",
    "Buralarda yeniyim de kalbinin yolunu tarif eder misin?",
    "Nasıl yani şimdi sen gerçek misin?",
    "Bunca zaman neredeydin ?",
    "Şey gözlerin çok güzelmiş tanışalım mı ?",
    "Kalbinin yolunu gösterir misin...",
    "Corona olsan bile sana sarılırdım",
    "Ya şey senin evin yok mu ? Hep aklımdasın da....",
    "Oha sen gerçek misin ?",
    "Anlatsana biraz neden bu kadar mükemmelsin",
    "Nasılsın diye sorma bebeğim, sana göreyim ;)",
    "Herkese mermi sana papatya biliyor musun ?",
    "Kakaolu sütsün seni sevmeyen ölsün ❤",
    "Ya sen hep böyle hoşuma mı gideceksin ?",
    "Çikolatalı keksin bu alemde teksin",
	"Bir gülüşü var, kelebek görse ömrü uzar.",
	"O kadar güzelsin ki, manzaralar seni seyretsin.",
	"Masallar güzeldir evet hele kahramanı sensen.",
	"Fazlası zarar olmayan iki şey; biri sen biri kokun.",
	"Böyle basit bir dünyada sen benim için çok özelsin.",
	"Aşk birisinde anlam bulacaksa o da sensin benim için.",
	"Ağlamak için sebeplerim var ama senin varlığın gülümsemek için ağır basıyor.",
	"Sen benim geceme ışık yayan yıldız gibisin.",
	"Seni gördüğüm an karanlıktan korkmuyor yüreğim.",
	"Güneş doğsun diye dua ediyorum. Çünkü seni görmek için gündüze ihtiyacım var.",
    "8 milyar gülüş varken seninki favorim",
    "Suyun içinde klorür senin kalbinde bir ömür...",
    "Çok tatlı olmayı bırak artık... Kalbim başa çıkamıyor !",
    "Kalbini dinle dediklerinde seni dinleyesim geliyor ❤",
    "Polisi arıyorum çünkü bu kadar tatlı olman yasadışı !",
    "Ölüm ani dünya fani bi kere sevsen nolur ki yani ?",
    "Bana yüzünü dönme gece oluyor sanıyorum.",
    "Güneş aya ben sana tutuldum.",
	"Sen benim gökyüzüne gönderdiğim duamın yeryüzündeki cevabısın.",
	"Sen hep gülümse ki yüreğinin güzelliği gülüşlerinde canlansın…",
	"Sen benim görmek için, bakmaya gerek bile duymadığım ezberimsin.",
	"Kendimi görebileceğim en güzel ayna bana aşkla bakan gözlerindir.",
	"Senin bir gülüşün benim için hayat öpücüğü gibi.",
    "Sana gemi alalım dümende bir numarasın.",
    "AÇILIN DÜNYANIN 8.HARİKASI GELDİ !",
    "Ben küçücük bi botum ama sana kocaman sarılırım",
    "Kafam çok güzel çünkü içinde sen varsın.",
    "Alnın güzelmiş yazısı olabilir miyim ?",
	"Hiç bir harfi sensiz bir cümleye kurban etmedim.",
    "Şiirler yarım kalsa da olur, sen gel beni tamamla olmaz mı...",
    "Seni dünyanın en güzel 8. harikası seçiyorum.",
    "Kendime gelemiyorum, sana gelsem olur mu?",
    "Fazlası zarar olmayan iki şey; biri sen biri kokun.",
    "Gülüşün; hani yağmur yağarken güneş açar ya onun gibi bir şey.",
    "Güneş mi doğmuş yoksa sen mi gülümsedin :)",
    "Denize kıyısı olan şehirleri bile kıskandırırsın.",
    "Kimselere söyleme. Ben ‘Seni’ yazarım, onlar şiir zanneder.",
    "Senden ne köy olur ne de kasaba. Sen gel kalbimin başkenti ol.",
    "Gülüşün şimşek içermiyiz birer milkşeyk ?"
  ];
  var randomlan =
    random[Math.floor(Math.random(1) * random.length)];
  db.add(`mesajsayıları_${msg.guild.id}`, 1);
  var toplamsayıları = await db.fetch(`mesajsayıları_${msg.guild.id}`);
  if (toplamsayıları > 249) {
    msg.channel.send("<@" + msg.author.id + "> " + randomlan + " ");
    db.add(`mesajsayıları_${msg.guild.id}`, -249);
  }
});


bot.on("message", async (message) => {
    if(message.author.bot || message.channel.type === "dm") return;
            if(message.content.includes('link',)){
              [message.channel.send(botconfig.invitelink)]
       }
	   
	    if(message.author.bot || message.channel.type === "dm") return;
            if(message.content.includes('tag',)){
              [message.channel.send(`Bebeğim tagımızı almak ister misin? ${tag}`)]
              [message.channel.send(botconfig.tag)]
       }

});