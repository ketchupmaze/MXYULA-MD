let { sticker } = require('../lib/sticker.js')
let axios = require('axios')

let handler = async (m, { conn, args }) => {
let who
if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	else who = m.quoted ? m.quoted.sender : m.chat
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input teks atau reply teks yang ingin di jadikan quote!"
   if (!text) return m.reply('masukan text')
   if (text.length > 100) return m.reply('Maksimal 100 Teks!')
    let username = conn.getName(who)
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": username,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc'].map(v => v + ' text & reply')
handler.tags = ['sticker']
handler.command = /^(qc|quotely)$/i
handler.register = false
handler.limit = true

module.exports = handler


/*let { sticker } = require('../lib/sticker.js')
let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
let who
if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	else who = m.quoted ? m.quoted.sender : m.chat
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input teks atau reply teks yang ingin di jadikan quote!"
   if (!text) return m.reply('masukan text')
   if (text.length > 100) return m.reply('Maksimal 100 Teks!')
    let username = conn.getName(who)
    let pp = 'https://telegra.ph/file/320b066dc81928b782c7b.png'
    try {
    let api = await fetch(`https://api.lolhuman.xyz/api/bubblechat?apikey=${global.lolkey}&avatar=${pp}&name=${username}&text=${text}`)
    let buffer = await api.buffer()
    let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
     } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['qc'].map(v => v + ' text & reply')
handler.tags = ['sticker']
handler.command = /^(qc|quotely)$/i
handler.register = false
handler.limit = 2

module.exports = handler*/