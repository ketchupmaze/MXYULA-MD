let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} cocofun_url_video*\n\nExample :\n${usedPrefix + command} http://i.coco.fun/short/1513tui`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		let anu = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=${global.lolkey}&url=${text}`)
		let json = await anu.json()
		let ini_txt = `*${json.result.title}*\n\nuploader : *${json.result.uploader}*\ntag : ${json.result.tag}\nviews : ${json.result.views}`
		conn.sendFile(m.chat, json.result.withwm, `cocofun.mp4`, ini_txt, m)
	} catch (e) {
		console.log(e)
		m.reply(`Invalid cocofun url.`)
	}
}

handler.help = ['cocofunwm'].map(v => v + ' url')
handler.tags = ['downloader']
handler.command = /^(cocofunwm)$/i
handler.register = false
handler.premium = false
handler.limit = true

module.exports = handler