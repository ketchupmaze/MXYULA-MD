let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command, participants }) => {
    let media = await(await fetch('https://github.com/ketchupmaze/mp3/raw/main/Kata%20kata%20Pain%20%5BSHINRA%20TENSEI%5D%20waktu%20menyerang%20konoha.mp3?raw=true')).buffer()
    await conn.sendFile(m.chat, media, 'mm.mp3', '', null, false, { mentions: participants.map(a => a.id), quoted: m })
}
handler.command = /^(itamio)$/i
handler.group = true
handler.owner= true

module.exports = handler