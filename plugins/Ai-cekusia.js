let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let startTime = new Date();
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `*reply/send ur image with .${command}*`
try {
conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
let media = await q.download()
let url = await uploadImage(media)
let api = await fetch(`https://api.lolhuman.xyz/api/agedetect?apikey=${global.lolkey}&img=${url}`)
let data = await api.json()
let lol = `Your current detected age is ${data.result}`
 await m.reply(lol)
    } catch (e) {
    console.log(e)
    conn.reply(m.chat, '*Sorry there was an error accepting the request.*', m)
  }
  	}
handler.help = ['cekusia']
handler.tags = ['ai']
handler.command = /^(cekusia)$/i
handler.register = false
handler.premium = false
handler.limit = true

module.exports = handler