let fetch = require('node-fetch');

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
  if (!text) throw `
*example:* .ttsstyle *style*| Hello, I'm Maximus, I accept game jockeys & topups

• T Y P E   S T Y L E

1. rachel
2. domi
3. bella
4. antoni
`
  if (!text.includes('| ')) throw `Tolong gunakan prompt dengan benar. Gunakan *[ | ]* untuk memisahkan style & text.\n*Contoh:* ${usedPrefix}${command} style, Hello, I'm Maximus, I accept game jockeys & topups`;  
  const [ style, teks ] = text.split('|');
let res = `https://api.itsrose.life/tools/tts?text=${teks}&voice_id=${style}&apikey=${global.rose}`
let voice = await fetch(res).catch()
conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
};

handler.help = ['ttsstyle']
handler.tags = ['ai']
handler.command = /^(ttsstyle|artisvoice)$/i

handler.register = false
handler.premium = false
handler.limit = 5

module.exports = handler