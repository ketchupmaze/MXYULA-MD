const fetch = require('node-fetch');

const handler = async (m, { conn, command, usedPrefix }) => {
  if (m.isGroup && !db.data.chats[m.chat].nsfw) throw `Fitur *NSFW* BELUM AKTIF di grup ini\n\nAktifkan Fitur ini dengan menulis *.enable nsfw*`;
  let text2 = `SANGEAN`;

  if (command == 'ahegao' ) {
    const ass = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/ahegao.json`)).json()
    const res = ass[Math.floor(Math.random() * ass.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'ass' ) { 
    const yuri = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/yuri.json`)).json()
    const res = yuri[Math.floor(Math.random() * yuri.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'bdsm' ) { 
    const bdsm = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/bdsm.json`)).json()
    const res = bdsm[Math.floor(Math.random() * bdsm.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'blowjob' ) { 
    const cum = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/blowjob.json`)).json()
    const res = cum[Math.floor(Math.random() * cum.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'cuckold' ) { 
    const ero = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/cuckold.json`)).json()
    const res = ero[Math.floor(Math.random() * ero.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'cum' ) { 
    const foot = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/cum.json`)).json()
    const res = foot[Math.floor(Math.random() * foot.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }
  
  if (command == 'eba' ) { 
    const glasses = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/eba.json`)).json()
    const res = glasses[Math.floor(Math.random() * glasses.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'ero' ) { 
    const glasses = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/ero.json`)).json()
    const res = glasses[Math.floor(Math.random() * glasses.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'femdom' ) { 
    const jahy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/femdom.json`)).json()
    const res = jahy[Math.floor(Math.random() * jahy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'foot' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/foot.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'gangbang' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/gangbang.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'glasses' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/glasses.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'hentai' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/hentai.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'jahy' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/jahy.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'manga' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/manga.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'masturbation' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/masturbation.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'neko' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/neko.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'orgy' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/orgy.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'panties' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/panties.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'pussy' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/pussy.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'tentacles' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/tentacles.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'thighs' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/thighs.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }

  if (command == 'cosplaynsfw' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/cosplaynsfw.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2, m);
  }
  
  if (command == 'zettai' ) { 
    const orgy = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/nsfw/zettai.json`)).json()
    const res = orgy[Math.floor(Math.random() * orgy.length)];
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
'eba', 
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
'zettai',
'cosplaynsfw'];
handler.tags = ['nsfw'];
handler.premium = false;
handler.group = true;

module.exports = handler;
