let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  if (!text) return conn.reply(m.chat, `mana nomornya?`, m)
  text = no(text) + "@s.whatsapp.net"
  global.db.data.users[text].registered = true
  conn.reply(m.chat,`*Berhasil mendaftarkan paksa @${text.split('@')[0]}.*`,m,{ contextInfo: { mentionedJid: [text] } })

}
handler.help = ['paksaregister']
handler.tags = ['owner']
handler.command = /^paksaregister|paksaregis$/i
handler.mods = true
handler.fail = null
module.exports = handler