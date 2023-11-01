let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Contoh : \n.wallpaper EULA`
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/wallpaper?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`)
		let anu = Buffer.from(await res.arrayBuffer())
		if (Buffer.byteLength(anu) < 22000) throw Error(`[!] Error : Buffer not found.`)
		await conn.sendMessage(m.chat, { image: anu, caption: `Result : ${text}\n\n Assisten YuLa💕` }, { quoted: m })
	} catch (e) {
		console.log(e)
		throw `Pencarian Tidak Di Temukan!!!`
	}
}

handler.help = ['wallpaper'].map(v => v + ' query')
handler.tags = ['downloader']
handler.command = /^(wallpaper)$/i

handler.register = false
handler.limit = 5

module.exports = handler