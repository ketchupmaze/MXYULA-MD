const fetch = require('node-fetch');
const fs = require('fs');

const handler = async (m, { conn, command, usedPrefix }) => {
  if (m.isGroup && !db.data.chats[m.chat].nsfw) throw `Fitur *NSFW* BELUM AKTIF di grup ini\n\nAktifkan Fitur ini dengan menulis *.enable nsfw*`;
  let text2 = `SANGEAN`;

 /* if (command == 'lolinsfw' ) {
    const blow = JSON.parse(fs.readFileSync('./json/nsfwloli.json'));
    const res = blow[Math.floor(Math.random() * blow.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }*/

  if (command == 'ahegao' ) {
    const ass = JSON.parse(fs.readFileSync('./json/ahegao.json'));
    const res = ass[Math.floor(Math.random() * ass.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'ass' ) { 
    const yuri = JSON.parse(fs.readFileSync('./json/ass.json'));
    const res = yuri[Math.floor(Math.random() * yuri.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'bdsm' ) { 
    const bdsm = JSON.parse(fs.readFileSync('./json/bdsm.json'));
    const res = bdsm[Math.floor(Math.random() * bdsm.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'blowjob' ) { 
    const cum = JSON.parse(fs.readFileSync('./json/blowjob.json'));
    const res = cum[Math.floor(Math.random() * cum.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'cuckold' ) { 
    const ero = JSON.parse(fs.readFileSync('./json/cuckold.json'));
    const res = ero[Math.floor(Math.random() * ero.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'cum' ) { 
    const foot = JSON.parse(fs.readFileSync('./json/cum.json'));
    const res = foot[Math.floor(Math.random() * foot.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'ero' ) { 
    const glasses = JSON.parse(fs.readFileSync('./json/ero.json'));
    const res = glasses[Math.floor(Math.random() * glasses.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'femdom' ) { 
    const jahy = JSON.parse(fs.readFileSync('./json/femdom.json'));
    const res = jahy[Math.floor(Math.random() * jahy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'foot' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/foot.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'gangbang' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/gangbang.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'glasses' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/glasses.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'hentai' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/hentai.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'jahy' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/jahy.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'manga' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/manga.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'mstb' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/masturbation.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'neko' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/neko.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'orgy' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/orgy.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'panties' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/panties.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'pussy' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/pussy.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'tentacles' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/tentacles.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'thighs' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/thighs.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'cosplaynsfw' ) { 
    const orgy = JSON.parse(fs.readFileSync('./json/cosplaynsfw.json'));
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }
  
  if (command == 'maid' ) { 
    const orgy = await fetch(`https://api.zahwazein.xyz/randomanime/maid?apikey=${global.zein}`);
    const res = await orgy.buffer()
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }
}

handler.command = handler.help = [
'ahegao', 
'ass', 
'bdsm', 
'blowjob', 
'cuckold', 
'cum', 
'ero', 
'femdom', 
'foot', 
'gangbang', 
'glasses', 
'hentai', 
'jahy', 
'manga', 
'mstb', 
'neko', 
'orgy', 
'panties', 
'pussy', 
'tentacles', 
'thighs', 
'maid',
'cosplaynsfw'];
handler.tags = ['nsfw'];
handler.premium = true;
handler.group = true;

module.exports = handler;