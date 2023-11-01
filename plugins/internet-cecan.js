//MAXIMUS
let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
let text2 = `Cecan by Assisten YuLa\n\nLink : `;

if (command == 'cecan') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/Databasee/main/cecan/cecan.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2 + cita, m)}
}
handler.command = handler.help = ['cecan']
handler.tags = ['internet']
handler.limit = 5
handler.register = false

module.exports = handler