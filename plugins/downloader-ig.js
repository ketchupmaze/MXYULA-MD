let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://www.instagram.com/reel/CyYyAZVvPXI/?igshid=NTc4MTIwNjQ2YQ==`
       try {
    var api = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolkey}&url=${args[0]}`)
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
var dor = await api.json()
for (var array of dor.result) {
conn.sendFile(m.chat, array, 't.mp4', '*(IGTV, POST, VIDEO, REEL, ETC)*', m)
}
  } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|instagram(dl)?)$/i
handler.register = false
handler.limit = 5

module.exports = handler