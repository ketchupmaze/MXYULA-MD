/*let uploadImage = require('../lib/uploadImage.js')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=${global.lolkey}&img=${out}` }, caption: `*Sudah Jadi anime Tuan*` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}

handler.help = ['jadianime']
handler.tags = ['tools']
handler.command = /^((to|jadi)a?nime)$/i

handler.register = true
handler.limit = true

module.exports = handler

const uploadFile = require('../lib/uploadFile');
const fetch = require('node-fetch');
let handler = async (m, { 
conn, 
usedPrefix, 
command
 }) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const img = await q.download?.()
			let out = await uploadFile(img)
			let old = new Date()
			let res = await fetch(`https://api.botcahx.live/api/maker/jadianime?url=${out}&apikey=${global.btc}`)
			let convert = await res.json()
			let buff = await fetch(convert.result.img_crop_single)
  .then(res => res.buffer())
			await conn.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
};
handler.help = ['jadianime'].map(v => v + ' caption / reply img');
handler.command = ['toanime', 'jadianime'];
handler.tags = ['ai'];
handler.premium = true;
handler.limit = false;
module.exports = handler;*/