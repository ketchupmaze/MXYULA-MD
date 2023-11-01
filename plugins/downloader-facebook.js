let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://www.facebook.com/reel/2783610791780195/?mibextid=rS40aB7S9Ucbxw6v`
    try {
    var api = await fetch(`https://api.neoxr.eu/api/fb?url=${args[0]}&apikey=${global.neoxr}`)
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
var dor = await api.json()
for (var array of dor.data) {
conn.sendFile(m.chat, array.url, 't.mp4', `*FACEBOOK DOWNLOADER*\n\n*Reso :* ${array.quality}`, m)
}
  } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['facebook'].map(v => v + ' url')
handler.tags = ['downloader']

handler.command = /^(fb|facebook|fbdl)$/i
handler.premium = true

module.exports = handler