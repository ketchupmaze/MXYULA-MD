let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[❗INFO❗] Masukan Nama User Tiktok Yang Ingin Diambil Fotonya*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${global.lolkey}`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] Sukses Mengambil Foto User ${text}*`, m, false)
}
handler.help = ['pptiktok'].map(v => v + ' username')
handler.tags = ['downloader']
handler.command = /^(tiktokpp|pptiktok|pptt)$/i
handler.register = false
handler.limit = 5
module.exports = handler