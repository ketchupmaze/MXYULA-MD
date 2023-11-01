let util = require('util')
let path = require('path')
let fetch = require('node-fetch')


let handler = async (m, { conn, noPrefix }) => {
	let url = 'https://telegra.ph/file/7847524c8ed9dcb63980f.jpg'
	let text = `DOMAIN RABU & SABTU
`
	conn.sendFile(m.chat, url, 'foto.jpg', text, m)
}
handler.customPrefix = /^(rabu|sabtu)$/i
handler.command = new RegExp
handler.tags = ['domain']
handler.help = ['rabu', 'sabtu']
handler.register = true

module.exports = handler