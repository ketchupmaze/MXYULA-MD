//MAXIMUS
let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
let text1 = `Cogan by Assisten YuLa\n\nLink : `;
let text2 = `Cecan by Assisten YuLa\n\nLink : `;

if (command == 'cecan') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/cecan/cecan.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text2 + cita, m)}

if (command == 'cogan') {
let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/cecan/cogan.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'foto.jpg', text1 + cita, m)}
}
handler.command = handler.help = ['cecan', 'cogan']
handler.tags = ['internet']
handler.limit = true
handler.register = true

module.exports = handler
