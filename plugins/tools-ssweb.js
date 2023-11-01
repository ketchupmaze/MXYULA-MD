/*var fetch = require('node-fetch')

var handler = async (m, { 
conn, 
command, 
args 
}) => {
   if (!args[0]) return conn.reply(m.chat, 'Input URL', m)

  await m.reply('_Please Waiting．．._')
  
   var img = await fetch(`https://api.zahwazein.xyz/convert/ssweb?url=${args[0]}&query=desktop&apikey=${global.zein}`)
   var maximus = await img.json()
   var { from, url } = maximus.result
   
   conn.sendFile(m.chat, url, `ssweb.png`, `From : ${from}`, m)
}
handler.help = ['ssweb']
handler.tags = ['tools']
handler.command = /^(ssweb|ss)$/i

handler.limit = true
handler.fail = null

module.exports = handler*/

let fetch = require('node-fetch');

let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Linknya Mana Kak', m)
        
let api = await fetch(`https://screenia.best/api/screenshot?url=${args[0]}`)
let data = await api.buffer()

   conn.sendMessage(m.chat, { image: data, caption: 'Here' }, { quoted: m })
}
handler.help = ['ssweb']
handler.tags = ['tools']
handler.command = /^(ssweb|ss)$/i

handler.limit = true
handler.fail = null

module.exports = handler