let fetch = require("node-fetch");

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `*Tulis nama/gendre animenya*`
    try {
  let res = await fetch(`https://api.zahwazein.xyz/animeweb/otakudesu/search?query=${text}&apikey=${global.zein}`)
  conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
  let res2 = await res.json()
  let cap = `*Hasil Pencarian Dari ${text}*\n\n`
  for (let json of res2.result) {
      cap += `\n• *Title:* ${json.title}
• *Genre:* ${json.genres}
• *Status:* ${json.status}
• *Rating:* ${json.rating}
• *Link:* ${json.url}\n`
  	}
  await conn.sendMessage(m.chat, {
                text: cap,
                contextInfo: {
                    externalAdReply: {
                        title: "Otakudesu Search",
                        body: "Powered by Assisten YuLa💕",
                        thumbnailUrl: "https://telegra.ph/file/4b4b96cbf6bb3f93c2991.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m })
            } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['otakudesusearch'].map(v => v + ' name')
handler.command = /^(otakudesusearch)$/i
handler.tags = ['anime']
handler.register = false
handler.premium = false
handler.limit = 5

module.exports = handler