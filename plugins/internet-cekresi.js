let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) return m.reply(`Usage : ${usedPrefix + command} Nomor Resi`)
	try {
		let anu = await (await fetch(`https://api.lolhuman.xyz/api/checkresi?apikey=${global.lolkey}&resi=${text.trim()}`)).json()
		if (anu.status != 200) throw `Wah Sepertinya Error`
		anu = anu.result
		let txt = `*Resi : ${anu.resi}*\n`
		+ `*Courier :* ${anu.courier}\n\n`
		+ `*ORIGIN :*\n`
		+ `*Name :* ${anu.origin.name}\n`
		+ `*Address :* ${anu.origin.address}\n\n`
		+ `*DESTINATION :*\n`
		+ `*Name :* ${anu.destination.name}\n`
		+ `*Address :* ${anu.destination.address}\n\n`
		+ `*———————HISTORY———————*`
		for (let x of anu.history) {
			txt += `\n\n*Note :* ${x.note}\n`
			txt += `*Time :* ${x.time}`
		}
		conn.sendMessage(m.chat, {
                text: txt,
                contextInfo: {
                    externalAdReply: {
                        title: "Cek Resimu di Whatsapp",
                        body: "Powered by Assisten Yula 💕",
                        thumbnailUrl: "https://telegra.ph/file/9e1c5852ee6f56f95d97d.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
	} catch (e) {
		console.log(e)
		throw 'Sistem YuLa Error / Nomor Resi Salah'
	}
}

handler.help = ['cekresi'].map(v => v + ' noresi')
handler.tags = ['internet']
handler.command = /^(cekresi)$/i
handler.limit = 5
handler.register = false

module.exports = handler