var { 
sticker5 
} = require('../lib/sticker')
var fs = require('fs')
var handler = async (m, {
 conn, 
 args, 
 text, 
 usedPrefix, 
 command
 }) => {
    text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.quoted && m.quoted.caption ? m.quoted.caption : m.quoted && m.quoted.description ? m.quoted.description : ''
    if (!text) throw `Example : ${usedPrefix + command} Lagi Ruwet`
    const res = `https://api.lolhuman.xyz/api/ttp3?apikey=${global.lolkey}&text=${encodeURIComponent(text.substring(0, 151))}`
    var error = fs.readFileSync(`./media/sticker/emror.webp`)
    try {
        if (command == 'ttp' || command == 'ttp') {
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
    } catch (e) {
        console.log(e)
        await conn.sendFile(m.chat, error, 'error.webp', '', m)
    }
}

handler.command = /^(ttp)$/i
handler.help = ['ttp'].map(v => v + ' text')
handler.tags = ['sticker']
handler.register = false
handler.limit = 2
module.exports = handler