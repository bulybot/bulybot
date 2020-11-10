const discord = require ('discord.js');
var bot = new discord.Client();
const token = 'TOKEN';
const prefix = '!';
var version = '0.9 Pre-release';
const recentlyUsed = new Set();

//czarna lista
let Words = [prefix + "lenny"];
let Words1 = [prefix + "buły"];
let Words2 = [prefix + "porn-vid"];
let Words3 = [prefix + "jasnychuj"];
let Words4 = [prefix + "chujwie"];
let Words5 = [prefix + "pesa"];
//ilość zdjęc
let ilosc1 = 21 //buły
let ilosc2 = 25 //szopy
let ilosc3 = 55 //kafo
let ilosc4 = 53 //kibel, en57
let ilosc5 = 15 //eu07
let ilosc6 = 18 //impuls
let ilosc7 = 5 //et41
let ilosc8 = 11 //byczq
let ilosc9 = 8 //pies
let ilosc10 = 6 //kot
//let ilosc11 =  //weglarka
//let ilosc12 =  //ep09
//let ilosc13 = //stonka

//czarnalista
//lenny
bot.on("message", (message) => {
 if (Words.some(word => message.content.includes(word))) {
 message.channel.send("( ͡° ͜ʖ ͡°)");
 message.delete();
 }
});
//jasny usuwanie
bot.on("message", (message) => {
 if (Words3.some(word => message.content.includes(word))) {
 message.delete();
 }
});
//chujwie usuwanie
bot.on("message", (message) => {
 if (Words4.some(word => message.content.includes(word))) {
 message.delete();
 }
});
//pesa usuwanie
bot.on("message", (message) => {
 if (Words5.some(word => message.content.includes(word))) {
 message.delete();
 }
});
//sprawdzanie NSFW
bot.on("message", (message) => {
	if (message.channel.nsfw) {
  //message.channel.send('ń NSFW');
	return; }
 if (Words1.some(word => message.content.includes(word))) {
 message.author.send("To nie jest kanał NSFW!");
 message.delete();
 }
});
//sprawdzanie NSFW i usuwanie 
bot.on("message", (message) => {
	if (message.channel.nsfw) {
  //message.channel.send('ń NSFW');
	return; }
 if (Words2.some(word => message.content.includes(word))) {
 message.author.send("To nie jest kanał NSFW!");
 message.delete();
 }
});
  
  //kula
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "chujwie")) {
    message.channel.send ( {files: ["img/kula.png"]} )
  }
});
  
//jasny
  bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "jasnychuj")) {
    number = 1;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["vid/jasny/" + imageNumber + ".mp4"]} )
  }
});
 
//status
bot.on('ready', () => {
  console.log('Bot jest online! '+ version);

  bot.user.setActivity(prefix +'buły', { type: 'WATCHING' });
});

//cooldown porn-vid
bot.on('message', message => {

  if (message.author.bot) return;

  if (!message.channel.nsfw) {
  //message.channel.send('ń NSFW');
     return;
    }

    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]){
        case 'porn-vid':
          if(recentlyUsed.has(message.author.id)){
              message.reply("Nie możesz znowu użyć tej komendy! Zaczekaj do 5 sekund!");
            } else{
                recentlyUsed.add(message.author.id);
                number = 23;
                imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                message.channel.send ( {files: ["vid/porn/" + imageNumber + ".mp4"]} )
                setTimeout(() => {
                recentlyUsed.delete(message.author.id)
                }, 5000);
            }

        break;
    }

});

//skarga ban
bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + 'skarga')) {
      message.channel.send({embed: {
          color: 0x2ed32e,
          fields: [{
              name: "Skarga",
		  value: "Skargi można składać na pv developerów bądż serwer developerski: **!support**"
        }
       ],
       footer: {
        text: 'Autorzy: MrTalon63#1180 & wojtasss298#5421',
      },
  }
  })
  }})
  
//wsparcie
bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + 'wsparcie')) {
      message.channel.send({embed: {
          color: 0x2ed32e,
          fields: [{
              name: "Wsparcie",
              value: "Chcesz nam pomóc? \nMożesz to zrobić przez wysłanie nam większej ilości obrazków. \nWyślij je do **MrTalon63#1180** lub **wojtasss298#5421**, a po jakimś czasie może zostaną dodane!"
        }
       ],
       footer: {
        text: 'Autorzy: MrTalon63#1180 & wojtasss298#5421',
      },
  }
  })
  }})
 
//pomoc
bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + 'pomoc')) {
      message.channel.send({embed: {
          color: 0x2ed32e,
          fields: [{
              name: "Komendy",
              value: "**!pomoc** - Pokazuje to menu \n**!szop** - Losowy szop\n**!kafo** - szopu \n**!buły** - Losowe zdjęcie buł \n**!porn-vid** - Krótkie wideo z porno na pv \n**!lenny** - ( ͡° ͜ʖ ͡°) \n**!pociągi** - pociągi \n**!zwierzęta** - zwierzęta \n**!wsparcie** - wesprzyj nas! \n**!jasnychuj** - jasny chuj \n**!support** - pomoc"
        }
       ],
       footer: {
        text: 'Autorzy: MrTalon63#1180 & wojtasss298#5421',
      },
  }
  })
  }})

//serwer developerski
bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + 'support')) {
      message.channel.send({embed: {
          color: 0x2ed32e,
          fields: [{
              name: "Support",
              value: "Jeśli potrzebujesz pomocy lub chciałbyś aby została dodana nowa komenda, wejdź na oficjalnego discorda naszego BOTA! \n (link z zaproszeniem został wysłany na pv)"
        }
       ],
       footer: {
        text: 'Autorzy: MrTalon63#1180 & wojtasss298#5421',
      },
  }
  })
  }})
  bot.on('message', msg => {
  if (msg.content === (prefix + "support")) {
    msg.author.send('*Link z zaproszeniem na discorda: https://discord.gg/kK8gYzq*');
  }
});

//pociągi
bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + 'pociągi')) {
      message.channel.send({embed: {
          color: 0x2ed32e,
          fields: [{
              name: "Pociagi",
		  value: "**!en57** - en57\n**!eu07** - eu07\n**!impuls** -  impuls\n**!et41** - jamnik\n**!et22** - byczq"
        }
       ],
       footer: {
        text: 'Autorzy: MrTalon63#1180 & wojtasss298#5421',
      },
  }
  })
  }})
  
//zwierzeta
  bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + 'zwierzęta')) {
      message.channel.send({embed: {
          color: 0x2ed32e,
          fields: [{
              name: "Zwierzęta",
              value: "**!pies** - pies\n**!kot** - kot\n**!szop** - szop"
        }
       ],
       footer: {
        text: 'Autorzy: MrTalon63#1180 & wojtasss298#5421',
      },
  }
  })
  }})
  
//ping
bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + 'ping')) {
      message.channel.send({embed: {
          color: 0x2ed32e,
          fields: [{
              name: ":ping_pong: Pong!",
              value: "Mój ping: **" + Math.round(bot.ws.ping) + ' ms**' //client.ping has been moved to the WebSocketManager under client.ws.ping
        }
       ],
       footer: {
         text: 'Autorzy: MrTalon63#1180 & wojtasss298#5421',
       },
  }
  })
  }})

//Buły
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (!message.channel.nsfw) {
  //message.channel.send('ń NSFW');
  return;
  }
  if (message.content.startsWith (prefix + "buły")) {
      number = ilosc1;
      imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      message.channel.send ( {files: ["img/buly/" + imageNumber + ".jpg"]} )
  }
//porn-wid
//  if (message.content.startsWith (prefix + "porn-vid")) {
//     number = 22;
//    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
//     message.channel.send ( {files: ["vid/porn/" + imageNumber + ".mp4"]} )
//}

});

//szopy
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "szop")) {
    number = ilosc2;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/szop/" + imageNumber + ".jpg"]} )
  }
});

//kafo
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "kafo")) {
    number = ilosc3;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/szopu/" + imageNumber + ".jpg"]} )
  }
});

//en57
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "en57")) {
    number = ilosc4;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/en57/" + imageNumber + ".jpg"]} )
  }
});
//kibel
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "kibel")) {
    number = ilosc4;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/en57/" + imageNumber + ".jpg"]} )
  }
});

//eu07
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "eu07")) {
    number = ilosc5;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/eu07/" + imageNumber + ".jpg"]} )
  }
});

//impuls
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "impuls")) {
    number = ilosc6;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/impuls/" + imageNumber + ".jpg"]} )
  }
});

//pesa
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "pesa")) {
    message.channel.send ( {files: ["img/pesa/1.png"]} )
  }
}); 

//węglarka
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "węglarka")) {
    number = "ilosc11";
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/weng/" + imageNumber + ".jpg"]} )
  }
});

//et41
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "et41")) {
    number = ilosc7;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/et41/" + imageNumber + ".jpg"]} )
  }
});

//byczq
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "et22")) {
    number = ilosc8;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/et22/" + imageNumber + ".jpg"]} )
  }
});
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "byk")) {
    number = ilosc8;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/et22/" + imageNumber + ".jpg"]} )
  }
});

//pies
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "pies")) {
    number = ilosc9;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/pies/" + imageNumber + ".jpg"]} )
  }
});

//kot
bot.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith (prefix + "kot")) {
    number = ilosc10;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["img/kot/" + imageNumber + ".jpg"]} )
  }
});

bot.login(token);
