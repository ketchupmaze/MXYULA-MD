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
-= *SEWA BOT WHATSAPP* =-

╔ *LIST HARGA BOT MASUK GRUP*
║ _*Perminggu :* 7,000_
║ _*Perbulan :* 10,000_
║ _*Pertahun :* 110,000_
║ _*Permanen :* 500,000_
╚══════════

╔ *LIST HARGA USER PREMIUM*
║ _*Perhari :* 2,000_
║ _*Perminggu :* 5,000_
║ _*Perbulan :* 15,000_
║ _*Pertahun :* 110,000_
║ _*Permanen :* 550,000_
╚══════════

*FITUR BOT YULA*
» Admin : hidetag, banned SCAMMER, setppgc panjang, kick, cek sider,  & banyak lagi.

» Grup : Anti : link/jualan/toxic/game/rpg/nsfw, build/sheet Genshin & hsr, game & banyak lagi.

» Ai : txt2img, img2img, Remini, Remove background, OpenAi, outPainting & banyak lagi.

» Tools : sticker, ocr, toimg, tovideo, tts, qc, tts anime, voice changer & banyak lagi.

» Download : YouTube, tiktok, tiktok slide/foto, Twitter, Facebook, Instagram, NSFW & banyak lagi.

════════════════════════

╔ *LIST HARGA PANEL*
║ *[RAM 3GB, DISK 7GB, CPU 90%]*
║ *HARGA :* 10,000
║ *[RAM 4GB, DISK 8GB, CPU 100%]*
║ *HARGA :* 15,000
║ *[RAM 5GB, DISK 9GB, CPU 130%]*
║ *HARGA :* 18,000
║ *[RAM 6GB, DISK 10GB, CPU 150%]*
║ *HARGA :* 25,000
║ *[RAM, DISK, CPU, Unlimited]*
║ *HARGA :* 35,000
╚══════════

*Owner : wa.me/6281283516246`
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