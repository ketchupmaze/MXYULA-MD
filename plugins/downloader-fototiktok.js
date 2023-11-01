let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://vt.tiktok.com/ZSLBbkYx6/`
    var api = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkey}&url=${args[0]}`)
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
var dor = await api.json()
    m.reply('*Bot akan mengirim data melalui chat pribadi*')
for (var array of dor.result) {
      await conn.sendFile(m.sender, array, 't.jpg', '*TIKTOK FOTO*', m)
      await delay(4000)
    }
    m.reply('*Selesai*')
}
handler.help = ['tiktoksilde'].map(v => v + ' url')
handler.tags = ['downloader']

handler.command = /^((foto|img)tiktok|tiktokslide)$/i
handler.register = false
handler.limit = 5

module.exports = handler

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}