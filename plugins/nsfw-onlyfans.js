//MAXIMUS
let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (m.isGroup && !db.data.chats[m.chat].nsfw) throw `Fitur *NSFW* BELUM AKTIF di grup ini\n\nAktifkan Fitur ini dengan menulis *.enable nsfw*`;
if (command == 'onlyfans') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/onlyfans/onlyfans.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', `OnlyFans by ${wm}`, m)}
}
handler.command = handler.help = ['onlyfans']
handler.tags = ['nsfw']
handler.limit = true
handler.register = false

module.exports = handler
