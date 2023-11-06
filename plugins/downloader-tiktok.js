let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
if (!args[0].match(/tiktok/gi)) throw `URL Yang Tuan Berikan *Salah!!!*`
 let tioxd = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${args[0]}`)
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
if (!tioxd.ok) throw await tioxd.text()
let tiodl = await tioxd.json()
if (!tiodl.status) throw tiodl
let { 
title, 
link, 
author, 
statistic
} = tiodl.result
await conn.sendFile(m.chat, link, 'tiovid.mp4', `┌─❖\n│「 *T I K T O K  D L* 」\n└┬❖ 「  I N F O ⁩ 」\n   │✑ *Username :* ${author.username}\n   │✑ *Nickname :* ${author.nickname}\n   │\n   │✑ *Play :* ${statistic.play_count}\n   │✑ *Like :* ${statistic.like_count}\n   │✑ *Share :* ${statistic.share_count}\n   │✑ *Comment :* ${statistic.comment_count}\n   └───────────────┈ ⳹`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['tiktok'].map(v => v + ' url')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true
handler.register = false
module.exports = handler
