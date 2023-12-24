const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage')
const { remini } = require('betabotz-tools')

let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      m.reply('Memproses image . . . .  ');
      if (command === 'hd' || command === 'remini') {
        const api = await remini(out);
        conn.sendFile(m.chat, api.image_data, null, wm, m);
      } else if (command === 'hd2' || command === 'remini2') {
        const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini?url=${out}&apikey=${global.btc}`);
        const image = await api.json();
        const { url } = image;
        conn.sendFile(m.chat, url, null, wm, m);
      } else if (command === 'hd3' || command === 'remini3') {       
        const api = await fetch(`https://api.itsrose.life/image/unblur?url=${out}&json=true&apikey=${global.rose}`);
        const image = await api.json();
        conn.sendFile(m.chat, Buffer.from(image.result.base64Image, 'base64'), 'gambar.jpg', global.wm, m)
      } else if (command === 'hd4' || command === 'remini4') {
        const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v3?url=${out}&resolusi=4&apikey=${global.btc}`);
        const image = await api.json();
        const url = image.url.url;
        conn.sendFile(m.chat, url, null, wm, m);
      }
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau reply gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    throw `🔧 Error Gunakan Type Lainnya seperti *hd/hd2/hd3/hd4*`
  }
}

handler.command = handler.help = ['hd', 'hd2', 'hd3', 'hd4', 'remini', 'remini2', 'remini3', 'remini4'];
handler.tags = ['ai'];
handler.premium = false;
handler.limit = true;

module.exports = handler;
