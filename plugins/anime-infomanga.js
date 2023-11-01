let fetch = require('node-fetch')

var handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Judul Manga Yang Ingin Kamu Cari !*`
conn.reply(m.chat, 'Sedang mencari manga... Silahkan tunggu', m)
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) throw 'Tidak Ditemukan'
let json = await res.json()
let { chapters, url, type, score, scored, scored_by, rank, popularity, members, background, status, volumes, synopsis, favorites } = json.data[0]
// let author = json.data[0].authors[0].name
// let authormynimelist = json.data[0].authors[0].url
let judul = json.data[0].titles.map(jud => `${jud.title} [${jud.type}]`).join('\n');
let xnuvers007 = json.data[0].authors.map(Xnuvers007 => `${Xnuvers007.name} (${Xnuvers007.url})`).join('\n');
let genrenya = json.data[0].genres.map(xnvrs007 => `${xnvrs007.name}`).join('\n');
  
let animeingfo = `📚 ᴛɪᴛʟᴇ: ${judul}
📑 ᴄʜᴀᴘᴛᴇʀ: ${chapters}
✉️ ᴛʀᴀɴsᴍɪsɪ: ${type}
🗂 sᴛᴀᴛᴜs: ${status}
😎 Genre: ${genrenya}
🗃 ᴠᴏʟᴜᴍᴇs: ${volumes}
🌟 ғᴀᴠᴏʀɪᴛᴇ: ${favorites}
🧮 sᴄᴏʀᴇ: ${score}
🧮 SCORED: ${scored}
🧮 SCORED BY: ${scored_by}
🌟 Rank: ${rank}
🤩 Popularitas: ${popularity}
👥 ᴍᴇᴍʙᴇʀs: ${members}
⛓️ ᴜʀʟ: ${url}
👨‍🔬 ᴀᴜᴛʜᴏʀs: ${xnuvers007}
📝 ʙᴀᴄᴋɢʀᴏᴜɴᴅ: ${background}
💬 sɪɴᴏᴘsɪs: ${synopsis}
`
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'manga.jpg', `*MANGA INFORMASI*\n` + animeingfo, m)
    conn.reply(m.chat, 'DONASI LAH', m)
}
handler.help = ['infomanga'].map(v => v + ' name')
handler.tags = ['anime']
handler.command = /^(mangainfo|infomanga)$/i
handler.register = false
handler.limit = 5

module.exports = handler