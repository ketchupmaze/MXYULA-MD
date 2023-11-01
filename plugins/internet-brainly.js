let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Soekarno adalah`
	try {
		let api = await fetch(`https://api.lolhuman.xyz/api/brainly?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`)
		let anu = await api.json()
		if (anu.status != '200') throw `Informasi tidak tersedia.`
		let txt = '*Result :*'
		for (let x of anu.result) {
			txt += `\n\n*QUESTION :*\n${x.question.content}\n`
			if (x.question.attachments.length > 0) {
				for (let y of x.question.attachments) {
					try { txt += `_- ${y.url}_\n` }
					catch (e) { console.log(e) }
				}
			}
			txt += `*ANSWER :*\n${x.answer.content}\n`
			if (x.answer.attachments.length > 0) {
				for (let y of x.answer.attachments) {
					try { txt += `_- ${y.url}_\n` }
					catch (e) { console.log(e) }
				}
			}
			txt += `───────────────────`
		}
		await m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply(`Informasi tidak tersedia.`)
	}
}

handler.help = ['brainly'].map(v => v + ' question')
handler.tags = ['internet']
handler.command = /^(brainly)$/i

handler.premium = false
handler.limit = 5
handler.register = false

module.exports = handler