let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, text, usedPrefix, command }) => {
let [soal, mapel] = text.split("|")
if (!soal || !mapel) throw `*example:* ${usedPrefix}${command} vpn|1`
  let res = await axios.get(`https://api.neoxr.eu/api/apkmod?q=${soal}&no=${mapel}&apikey=${global.neoxr}`)
  let apk = res.data.data
  let apk2 = res.data.file
  let caption = ` • *A P K - M O D*
  ◦ *Version:* ${apk.version}
  ◦ *Mod:* ${apk.mod}
  ◦ *Category:* ${apk.category}
  ◦ *Author:* ${apk.author}
  ◦ *Published:* ${apk.publish}
  `.trim()
	conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: apk.name,
body: "",
thumbnailUrl: apk.thumbnail,
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
  conn.sendFile(m.chat, apk2.url, `${apk.name} + .apk`,   `DONE`, m)
}
handler.help = ['apkmod'].map(v => v + ' app|number')
handler.tags = ['downloader']
handler.command = /^apkmod/i
handler.register = false
handler.premium = 5
handler.limit = false

module.exports = handler