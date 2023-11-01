let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/1xgaov026oc44n0/photo_2021-02-05_10-13-39.jpg/file`
    try {
    let res = await fetch(`https://api.itsrose.life/downloader/mediafire?url=${args[0]}&apikey=${global.rose}`)
    let res2 = await res.json()
    let { filename, size, url } = res2.result
    let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${size}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: null, asDocument: true })
       } catch (e) {
		console.log(e)
		m.reply(`Sistem Yula *Error*`)
	}
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = 5

module.exports = handler