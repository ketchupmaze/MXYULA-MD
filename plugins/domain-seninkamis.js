let util = require('util')
let path = require('path')
let fetch = require('node-fetch')

let handler = async (m, { conn, noPrefix }) => {
	let url = 'https://telegra.ph/file/ce1fdafc6e81c28c69621.jpg'
	let text = `DOMAIN SENIN & KAMIS
`
	conn.sendFile(m.chat, url, 'foto.jpg', text, m)
}
handler.customPrefix = /^(senin|kamis)$/i
handler.command = new RegExp
handler.tags = ['domain']
handler.help = ['senin', 'kamis']
handler.register = true

module.exports = handler