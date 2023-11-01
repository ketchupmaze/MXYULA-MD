const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage.js');

async function handler(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
      const img = await q.download();
      const out = await uploadImage(img);
      const response = await( await fetch(`https://api.itsrose.life/image/drawMe?url=${out}&apikey=${global.rose}`)).buffer()
      await conn.sendFile(m.chat, response, 'gambar.jpg', `Sudah jadi, tuan!`, m)
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi Gagal/Error. Silakan coba lagi`);
  }
}

handler.help = handler.command = ['drawme'];
handler.tags = ['ai']
handler.limit = 5

module.exports = handler