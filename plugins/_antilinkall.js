let handler = m => m

let linkRegex = /http|t.me|facebook.com|instagram.com|wa.me\/62/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  if (chat.antiLinkall && isGroupLink) {
    if (isAdmin) return
    if (!isBotAdmin) return m.reply('*Yula is not an admin. how to delete someone message if yula is not admin*')
    await conn.sendMessage(m.chat, { delete: m.key })
  }
  return true
}

module.exports = handler