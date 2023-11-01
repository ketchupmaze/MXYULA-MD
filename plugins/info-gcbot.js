/*let handler = async m => m.reply(`
script:check = document.cookie.includes('ltoken') && document.cookie.includes('ltuid') || alert('Please logout and log back in before trying again, cookie is currently expired/invalid!'); cookie = document.cookie; check && document.write(`<p>${cookie}</p><br><button onclick="navigator.clipboard.writeText('${cookie}')">Click here to copy!</button><br>`)
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc', 'sewa', 'script']
handler.tags = ['info']
handler.command = /^(sewa|sc(ript)?)$/i
module.exports = handler
*/



let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
   let maximus = `
-= *GROUP BOT WHATSAPP* =-

https://chat.whatsapp.com/FJRtTzRKxP8A2wT6fcCW3s`
		await conn.sendMessage(m.chat, {
                text: maximus,
                contextInfo: {
                    externalAdReply: {
                        title: "Genshin impact Botz",
                        body: "",
                        thumbnailUrl: "https://telegra.ph/file/7a20200e053f8906d375f.jpg",
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

handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot)$/i

handler.register = false
handler.premium = false
handler.limit = false

module.exports = handler