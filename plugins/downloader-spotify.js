let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} url*\n\nExample: ${usedPrefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`
    if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
      try {
	let res = await fetch(`https://api.neoxr.eu/api/spotify?url=${text}&apikey=${global.neoxr}`)
	conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
    if (!res.ok) throw `Invalid Spotify url / terjadi kesalahan.`
    let json = await res.json()
    let { thumbnail, title, duration, size, url } = json.data
    let txt_nih = `*DOCUMENT TYPE*
*Title :* ${title}
*Durasi :* ${duration}
*Size :* ${size}`
    await conn.sendFile(m.chat, url, 'kasar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
  await conn.sendMessage(m.chat, { 
    document: { url: url }, 
    mimetype: 'audio/mpeg', 
    fileName: `${title}.mp3`,
    caption: txt_nih
  }, {quoted: m})
      } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}

handler.help = ['spotify'].map(v => v + ' url')
handler.tags = ['downloader']
handler.command = /^(spotify(a(audio)?|mp3)?)$/i

handler.limit = 5;

module.exports = handler