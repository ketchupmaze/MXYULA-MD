const uploadFile = require('../lib/uploadFile.js')
const uploadImage = require('../lib/uploadImage.js')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada media yang ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4\/mp3/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let max = `${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}

${global.wm}`
         conn.sendMessage(m.chat, {
                text: max,
                contextInfo: {
                    externalAdReply: {
                        title: "File-Uploader",
                        body: "",
                        thumbnailUrl: "https://telegra.ph/file/7a20200e053f8906d375f.jpg",
                        sourceUrl: link,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['tourl <reply image>']
handler.tags = ['tools']
handler.command = /^(tourl)$/i
handler.limit = true

module.exports = handler