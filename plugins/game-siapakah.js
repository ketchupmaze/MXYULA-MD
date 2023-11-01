let handler = async (m, { conn, participants }) => {
    let who
    if (!m.isGroup) {
        let member = [m.sender, conn.user.jid]
        who = member[Math.floor(Math.random() * member.length)]
    } else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
    m.reply(`@${who.split`@`[0]}`)
}
handler.help = ['siapakah']
handler.tags = ['game']
handler.command = /^siapa(kah)?$/i
handler.register = true

module.exports = handler
