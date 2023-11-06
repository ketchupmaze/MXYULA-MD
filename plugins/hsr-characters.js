let fetch = require('node-fetch');

const handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `Example: ${usedPrefix}${command} arlan
  
*C H A R A C T E R S  L I S T*
» arlan
» asta
» bailu
» blade
» bronya
» clara
» danhengil
» danheng
» firetrailblazer
» fuxuan
» gepard
» guinaifei
» herta
» himeko
» hook
» jingyuan
» jingliu
» kafka
» luka
» luocha
» lynx
» march7th
» natasha
» pela
» physicaltrailblazer
» qingque
» sampo
» seele
» serval
» silverwolf
» sushang
» tingyun
» topaz
» welt
» yanqing
» yukong
`
  let Maximus;

  switch(text) {
       case 'arlan':
      Maximus = 'Arlan';
      break;
       case 'asta':
      Maximus = 'Asta';
      break;
       case 'bailu':
      Maximus = 'Bailu';
      break;
       case 'blade':
      Maximus = 'Blade';
      break;
       case 'bronya':
      Maximus = 'Bronya';
      break;
       case 'clara':
      Maximus = 'Clara';
      break;
       case 'danhengil':
      Maximus = 'Dan%20Heng%20%E2%80%A2%20Imbibitor%20Lunae';
      break;
       case 'danheng':
      Maximus = 'Dan%20Heng';
      break;
       case 'firetrailblazer':
      Maximus = 'Fire%20Trailblazer';
      break;
       case 'fuxuan':
      Maximus = 'Fu%20Xuan';
      break;
       case 'gepard':
      Maximus = 'Gepard';
      break;
       case 'guinaifei':
      Maximus = 'Guinaifei';
      break;
       case 'herta':
      Maximus = 'Herta';
      break;
       case 'himeko':
      Maximus = 'Himeko';
      break;
       case 'Hook':
      Maximus = 'Hook';
      break;
       case 'jingyuan':
      Maximus = 'Jing%20Yuan';
      break;
       case 'jingliu':
      Maximus = 'Jingliu';
      break;
       case 'kafka':
      Maximus = 'Kafka';
      break;
       case 'luka':
      Maximus = 'Luka';
      break;
       case 'luocha':
      Maximus = 'Luocha';
      break;
       case 'lynx':
      Maximus = 'Lynx';
      break;
       case 'march7th':
      Maximus = 'March%207th';
      break;
       case 'natasha':
      Maximus = 'Natasha';
      break;
       case 'pela':
      Maximus = 'Pela';
      break;
       case 'physicaltrailblazer':
      Maximus = 'Physical%20Trailblazer';
      break;
       case 'qingque':
      Maximus = 'Qingque';
      break;
       case 'sampo':
      Maximus = 'Sampo';
      break;
       case 'seele':
      Maximus = 'Seele';
      break;
       case 'serval':
      Maximus = 'Serval';
      break;
       case 'silverwolf':
      Maximus = 'Silver%20Wolf';
      break;
       case 'sushang':
      Maximus = 'Sushang';
      break;
       case 'tingyun':
      Maximus = 'Tingyun';
      break;
       case 'topaz':
      Maximus = 'Topaz%20and%20Numby';
      break;
       case 'welt':
      Maximus = 'Welt';
      break;
       case 'yanqing':
      Maximus = 'Yanqing';
      break;
       case 'yukong':
      Maximus = 'Yukong';
      break;
      default:
      throw `*CHARACTERS* Tidak ada. Silahkan Tulis dengan Benar.

*C H A R A C T E R S  L I S T*
» arlan
» asta
» bailu
» blade
» bronya
» clara
» danhengil
» danheng
» firetrailblazer
» fuxuan
» gepard
» guinaifei
» herta
» himeko
» hook
» jingyuan
» jingliu
» kafka
» luka
» luocha
» lynx
» march7th
» natasha
» pela
» physicaltrailblazer
» qingque
» sampo
» seele
» serval
» silverwolf
» sushang
» tingyun
» topaz
» welt
» yanqing
» yukong`;
  };
  let data = await fetch(`https://raw.githubusercontent.com/FortOfFans/HSR/main/sheet/${Maximus}.jpg`)
  let image = await data.buffer()
  
  conn.sendFile(m.chat, image, "mtype.jpg", null, m)
};

handler.help = ['hsrsheet <characters>'];
handler.tags = ['gi'];
handler.command = /hsrsheet/i;
handler.limit = false;
handler.register = false;
handler.premium = false;

module.exports = handler;