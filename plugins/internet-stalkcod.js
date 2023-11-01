let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Usage : ${usedPrefix + command} UserID\n\nExample: *${usedPrefix + command} 6290150021186841472*`
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/codm/${encodeURIComponent(text)}?apikey=${global.lolkey}`)
		let json = await res.json()
		let get_result = json.result
		let txt = `*Nickname* : ${get_result}`
		await m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply('Fitur Error!')
	}
}

handler.help = ['stalkcodm'].map(v => v + ' uid')
handler.tags = ['internet']
handler.command = /^(stalkcodm|stalkcodm|scodm|usercodm)$/i

handler.premium = true
handler.limit = false

module.exports = handler