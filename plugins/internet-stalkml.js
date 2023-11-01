let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Usage : ${usedPrefix + command} UserID/ZoneID\n\nExample: *${usedPrefix + command} 84830127/2169*`
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/mobilelegend/${text}?apikey=${global.lolkey}`)
		let json = await res.json()
		let get_result = json.result
		let txt = `*Nickname* : ${get_result}`
		await m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply('Fitur Error!')
	}
}

handler.help = ['stalkml'].map(v => v + ' uid/zone')
handler.tags = ['internet']
handler.command = /^(stalkml|sml|userml)$/i

handler.premium = true
handler.limit = false

module.exports = handler