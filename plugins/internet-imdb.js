let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply(`Example : ${usedPrefix + command} Avengers`)
	try {
	    let res = await fetch(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`)
	    let anu = await res.json()
		let ini_txt = `*${anu.title}*\n\n`
		ini_txt += `_"${anu.plot}"_\n`
		ini_txt += `_${anu.imdburl}_\n\n`
		ini_txt += `*Rating :*\n`
		for (let x of anu.ratings) {
			ini_txt += `━ ${x.value} _( ${x.source} )_\n`
		}
		ini_txt += `\nReleased : ${anu.released}\n`
		ini_txt += `Rated : *${anu.rated}*\n`
		ini_txt += `Genres : ${anu.genres}\n`
		ini_txt += `Languages : ${anu.languages}\n`
		ini_txt += `Released : ${anu.released}\n`
		ini_txt += `Director : ${anu.director}\n`
		ini_txt += `Writer : ${anu.writer}\n`
		ini_txt += `Actor : ${anu.actors}\n`
		await conn.sendMessage(m.chat, { image: { url: anu.poster }, caption: ini_txt }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`Result not found.`)
	}
}

handler.help = ['imdb'].map(v => v + ' film name')
handler.tags = ['internet']
handler.command = /^(film|imdb)$/i

handler.premium = false
handler.limit = true

module.exports = handler