let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `*CONTOH*\n${usedPrefix + command} Bot`
let teks = encodeURI(text)
if (command == 'attp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${global.lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
}
handler.command = /^(attp)$/i
handler.help = ['attp'].map(v => v + ' text')
handler.tags = ['sticker']
handler.register = false
handler.limit = 2
module.exports = handler