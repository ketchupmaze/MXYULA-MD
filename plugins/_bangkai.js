let { generateWAMessageFromContent } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command, participants }) => {
    let media = await( await fetch(`https://scdn.itsrose.life/y6xTbF.opus`)).buffer()
    conn.sendMessage(m.chat, { audio: media, mentions: participants.map(a => a.id) })
}
handler.command = /^(senbonzakura)$/i
handler.group = true
handler.owner= true

module.exports = handler