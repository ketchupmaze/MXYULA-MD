let util = require('util')
let path = require('path')
let fetch = require('node-fetch')

let handler = async (m, { conn, noPrefix }) => {
	let url = 'https://telegra.ph/file/40e26ae891e2c8247ed03.jpg'
	let text = `DOMAIN SELASA & JUM'AT`
	conn.sendFile(m.chat, url, 'foto.jpg', text, m)
}
handler.customPrefix = /^(selasa|jumat)$/i
handler.command = new RegExp
handler.tags = ['domain']
handler.help = ['selasa', 'jumat']
handler.register = true

module.exports = handler