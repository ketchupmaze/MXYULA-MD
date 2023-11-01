let fetch = require('node-fetch')
let fs = require('fs')

let handler = async (m, { conn, command, usedPrefix }) => {

let text2 = `NIH KAK (⁠✿⁠^⁠‿⁠^⁠)`

if (command == 'storyanime' ) {
let res = JSON.parse(fs.readFileSync('./json/storyanime.json'))
let blow = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, blow, 'foto.mp4', text2, m)}
}
handler.command = handler.help = ['storyanime']
handler.tags = ['anime']
handler.limit = true

module.exports = handler