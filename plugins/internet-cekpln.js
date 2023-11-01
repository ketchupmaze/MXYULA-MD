let fetch = require('node-fetch')

let handler = async (m, { text }) => {
	if (!text) throw `*Contoh :* .cektagihanpln 523050371924`
	  try {
		let res = await fetch(`https://api.lolhuman.xyz/api/tagihanlistrik/${text}?apikey=${global.lolkey}`)
		let anu = await res.json()
		if (anu.status != '200') return m.reply(anu.message)
		anu = anu.result
		let txt = `*ID PLN : ${anu.id}*\n`
		txt += `*Name :* ${anu.name}\n`
		txt += `*Tagihan :* ${anu.amount}`
		conn.sendMessage(m.chat, {
text: txt,
contextInfo: {
externalAdReply: {
title: "Cek Tagihan listrik",
body: 'Assisten YuLa💕 By Maximus',
thumbnailUrl: "https://telegra.ph/file/2ca51ba8abab347f783d6.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
		} catch (e) {
		console.log(e)
		m.reply(`Invalid ID.`)
	}
}
handler.help = ['cektagihanpln'].map(v => v + ' nomor id')
handler.tags = ['internet']
handler.command = /^(cektagihanpln|cekpln)$/i
handler.limit = 5

module.exports = handler