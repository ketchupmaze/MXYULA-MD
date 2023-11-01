let fetch = require('node-fetch')
    let handler = async (m, { conn }) => {
    let res = await fetch(`https://api.neoxr.my.id/api/check/${global.neoxr}`)
    if (!res.ok) return await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    conn.sendMessage(m.chat, {
                text: json,
                contextInfo: {
                    externalAdReply: {
                        title: "Nhentai Search",
                        body: "Powered by Maximus",
                        thumbnailUrl: "https://telegra.ph/file/4db38003c24862b12549f.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['cekneoxr']
handler.tags = ['info']
handler.command = /^(cekneoxr|cekneoxr)$/i
handler.owner = true

module.exports = handler