let uploadImage = require('../lib/uploadImage.js')
let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if ((/image/g.test(mime) && !/webp/g.test(mime)) || q.message?.imageMessage) {
		try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			let res = await fetch(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${global.lolkey}&img=${out}`)
			let json = await res.json()
			if (json.status != '200') throw `Fitur Error!`
			let get_result = json.result
			m.reply(`NSFW Score : *${get_result}*`)
		} catch (e) {
			console.log(e)
			m.reply('Fitur Error!')
		}
	} else m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
}

handler.help = ['ceknsfw'].map(v => v + ' reply image')
handler.tags = ['internet']
handler.command = /^(ch?ec?k)nsfw|nsfw(ch?ec?k)$/i

handler.premium = false
handler.limit = false
module.exports = handler