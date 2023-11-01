let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args[0]) throw `*Contoh:* ${usedPrefix + command} https://youtu.be/z6tDHN20h7s`
	if (!args[0].match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))) return m.reply(`URL tidak benar`)
		try {
			let res = await fetch(`https://api.lolhuman.xyz/api/ytaudio?apikey=${global.lolkey}&url=${args[0]}`)
			let anu = await res.json()
			anu = anu.result
			if (!anu.link.link) throw new Error('Error')
			conn.sendMessage(m.chat, {
                audio: {
                    url: anu.link.link
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: anu.title,
                        body: "YouTube Downloader Audio By Assisten Yula 💕",
                        thumbnailUrl: anu.thumbnail,
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
		} catch (e) {
			console.log(e)
			throw `Invalid Youtube URL / terjadi kesalahan.`
		}
	}
handler.help = ['ytmp3 <url>']
handler.tags = ['downloader']
handler.command = /^(yt(a(udio)?|mp3))$/i

handler.premium = false
handler.limit = 2

module.exports = handler


 