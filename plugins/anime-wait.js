let uploadImage = require('../lib/uploadImage.js')
let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if ((/image/g.test(mime) && !/webp/g.test(mime)) || q.message?.imageMessage) {
		let img = await q.download?.()
		let out = await uploadImage(img)
	    let tioxd = await fetch(`https://api.neoxr.eu/api/whatanime?url=${out}&apikey=${global.neoxr}`)
if (!tioxd.ok) throw await tioxd.text()
let tiodl = await tioxd.json()
let { 
anilist, 
filename, 
episode, 
from, 
to, 
similarity, 
video, 
image } = tiodl.data
let kontol = `*WHAT ANIME IS THIS*
*Similarity* : _${similarity}_

• *Filename :* ${filename}
• *Episode :* ${episode}
• *From/to :* ${from}/${to}
• *Video Link :* ${video}
`
await conn.sendFile(m.chat, image, 'tiovid.jpg', kontol, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}
handler.help = ['whatanime'].map(v => v + ' reply img')
handler.tags = ['internet']
handler.command = /^wait|(whatanime)$/i
handler.register = false
handler.premium = false
handler.limit = 5

module.exports = handler