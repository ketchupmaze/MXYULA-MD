let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
    await conn.updateBlockStatus(m.sender, "block")
   }
   if (m.sender.startsWith('265' || '265')) {
    global.db.data.users[m.sender].banned = true
   	conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   if (m.sender.startsWith('91' || '91')) {
    global.db.data.users[m.sender].banned = true
   	conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
}

module.exports = handler

