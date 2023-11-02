let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
   let maximus = `BOT ini menggunakan Script
https://github.com/ketchupmaze/MXYULA-MD`
		await conn.sendMessage(m.chat, {
                text: maximus,
                contextInfo: {
                    externalAdReply: {
                        title: "SC YULA 250K 💕",
                        body: "",
                        thumbnailUrl: "https://telegra.ph/file/154aa4d6cfcc703ab268f.jpg",
                        sourceUrl: "https://wa.me/6281283516246",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {quoted: m})
	} catch (e) {
		console.log(e)
		throw `Fitur Error.`
	}
}

handler.help = ['sewa', 'sc']
handler.tags = ['info']
handler.command = /^(sewa|sc|script)$/i

handler.register = false
handler.premium = false
handler.limit = true

module.exports = handler
