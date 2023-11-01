let handler = async (m, { conn, text }) => {
  if (!text) throw `MANA IDNYA`
  global.db.data.chats[text].isBanned = false
  m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat|bannd$/i
handler.owner,handler.mods = true

module.exports = handler
