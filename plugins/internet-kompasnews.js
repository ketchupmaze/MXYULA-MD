const fetch = require("node-fetch")
let handler = async(m, { conn }) => {
   var a = await require('dhn-api').KompasNews()
   var b = JSON.parse(JSON.stringify(a))
   var c = await conn.rand(b)
   //var c = b[Math.floor(Math.random() * b.length)]
   var { berita, berita_url, berita_thumb, berita_jenis, berita_diupload } = c
   var sell = `📺 *Kompas News*

📢 *Berita:* ${berita}
📁 *Type News:* ${berita_jenis}
⌚ *Uploded:* ${berita_diupload}
🛰 *Source Url:* ${berita_url}`
  conn.sendMessage(m.chat, {
                text: sell,
                contextInfo: {
                    externalAdReply: {
                        title: "KompasNews",
                        body: "Powered by Maximus",
                        thumbnailUrl: berita_thumb,
                        sourceUrl: berita_url,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['kompasnews']
handler.tags = ['internet']
handler.command = /^kompas(news)?$/i
handler.limit = true

module.exports = handler
