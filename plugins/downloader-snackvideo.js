let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://sck.io/p/jiv-dwZX`
 try {
 let tioxd = await fetch(`https://api.lolhuman.xyz/api/snackvideo?apikey=${global.lolkey}&url=${args[0]}`)
 conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
if (!tioxd.ok) throw await tioxd.text()
let tiodl = await tioxd.json()
if (!tiodl.status) throw tiodl
let { 
caption, 
url
} = tiodl.result
await conn.sendFile(m.chat, url, 'tiovid.mp4', `${caption}`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
   } catch (e) {
		console.log(e)
		m.reply(`Sistem Yula *Error*`)
	}
}
handler.help = ['snackvideo'].map(v => v + ' url')
handler.tags = ['downloader']
handler.command = /^(snackdl|snackvideo)$/i
handler.register = false
handler.limit = 5

module.exports = handler