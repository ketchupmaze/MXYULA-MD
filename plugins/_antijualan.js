let handler = m => m

let linkRegex = /WTS|WTB|tawarkan|buy|sell|joki|sewa|melayani|laku|Jasa|topup|harting/i
handler.before = async function (m, { user, isBotAdmin, isAdmin, isOwner }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  if (chat.antiJualan && isGroupLink) {
    if (!isBotAdmin) return m.reply('Yula is not an admin. how to delete someone message if yula is not admin')
    await conn.sendMessage(m.chat, { delete: m.key })
  }
  return true
}

module.exports = handler