let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Usage : ${usedPrefix + command} UserID\n\nExample: *${usedPrefix + command} 570098876*`
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/freefire/${encodeURIComponent(text)}?apikey=${global.lolkey}`)
		let json = await res.json()
		let get_result = json.result
		let txt = `*Nickname* : ${get_result}`
		await m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply('Fitur Error!')
	}
}

handler.help = ['stalkfreefire'].map(v => v + ' uid')
handler.tags = ['internet']
handler.command = /^(stalkff|stalkfreefire|sff|userff)$/i

handler.premium = true
handler.limit = false

module.exports = handler