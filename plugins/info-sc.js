let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
   conn.reply(m.chat, `『 A S S I S T E N  Y U L A 』

*• BOTS USE SCRIPTS*
https://github.com/ketchupmaze/MXYULA-MD

`, m)
}

handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script)$/i

handler.register = false
handler.premium = false
handler.limit = false

module.exports = handler
