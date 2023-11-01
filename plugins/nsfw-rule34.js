const axios = require('axios')
const cheerio = require('cheerio')

let handler = async(m, { conn, text }) => {
if (m.isGroup && !db.data.chats[m.chat].nsfw) throw `Fitur *NSFW* belum aktif`;
if (!text) throw `Mana Linknya?\n\nContoh : \nhttps://rule34video.com/videos/3133052/eula-fuck/`
try {
let get = await axios.get('http://api.scrape.do?token=02b1bb63a7734234b943f325dce7acd8c1f3111db30&url=https://rule34video.com/videos/3133052/eula-fuck/')
let $ = await cheerio.load(get.data)
const scriptContent = $('script[type="application/ld+json"]').html();
const jsonData = JSON.parse(scriptContent);   
conn.sendFile(m.chat, jsonData.contentUrl, 'mmm.mp4', `*Name :* ${jsonData.name}\n*Upload date :* ${jsonData.uploadDate}\n*Deskripsi :* ${jsonData.description}`, m)
     } catch (e) {
		console.log(e)
		m.reply(`*Url Salah/Sistem Yula Error*`)
	}
}

handler.help = ['rule34video']
handler.tags = ['nsfw', 'downloader']
handler.command = /^(rule34|rule34video)$/i
handler.owner = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
