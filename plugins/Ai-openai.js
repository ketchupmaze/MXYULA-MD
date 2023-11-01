let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `ʜᴀʟʟᴏ ᴛᴜᴀɴ, ᴀᴅᴀ ʏᴀɴɢ ᴍᴀᴜ ᴛᴜᴀɴ ᴛᴀɴʏᴀᴋᴀɴ ᴋᴇᴘᴀᴅᴀ ᴀꜱꜱɪꜱᴛᴇɴ ᴍᴜ ɪɴɪ?
`
	try {
		let anu = await (await fetch(`https://api.itsrose.life/chatGPT/completions?prompt=${text}&apikey=${global.rose}`)).json()
		await conn.sendMessage(m.chat, {
                text: anu.message,
                contextInfo: {
                    externalAdReply: {
                        title: "ChatGPT",
                        body: "",
                        thumbnailUrl: "https://telegra.ph/file/b70c17d01e41146501827.jpg",
                        sourceUrl: "",
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

handler.help = ['openai'].map(v => v + ' question')
handler.tags = ['ai']
handler.command = /^(ai|yula|openai)$/i

handler.register = false
handler.premium = false
handler.limit = true

module.exports = handler