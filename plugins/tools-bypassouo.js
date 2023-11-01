let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://ouo.io/8BgQ1w`
  let apis = await fetch(`https://api.lolhuman.xyz/api/ouo?apikey=${global.lolkey}&url=${args[0]}`)
  let ouo = await apis.json()
  let ouo2 = ouo.result
  m.reply(ouo2)
}
handler.command = handler.help = ['ouo']
handler.tags = ['tools']
handler.premium = true

module.exports = handler