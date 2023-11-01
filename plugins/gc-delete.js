let handler = async (m, { conn, command }) => {
if (!m.quoted) throw 'Pesan Mana Yang Mau Di Hapus?'
try {
let bilek = m.message.extendedTextMessage.contextInfo.participant
let banh = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: banh, participant: bilek }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']

handler.command = /^del(ete)?$/i
handler.admin = true

module.exports = handler