let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Contoh: ${usedPrefix + command} Eula`
  let res = await fetch(`https://api.lolhuman.xyz/api/gimage2?apikey=${global.lolkey}&query=${text}`)
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.result[Math.floor(Math.random() * json.result.length)];
  conn.sendFile(m.chat, pint, 'mmk.png', `
-= *GOOGLE IMAGE* =-
*Hasil pencarian*
${text}
`.trim(), m)
}
handler.help = ['gimage'].map(v => v + ' keyword')
handler.tags = ['downloader']
handler.command = /^(gimage|image)$/i
handler.limit = 5

module.exports = handler