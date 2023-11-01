let handler = async (m, { conn, args, command }) => {
    if (!args[0]) throw `Mana idgroup nya?`
	let group = args[0]
        await m.reply('Byee 👋\nBot akan keluar dari group', args[0])
        await conn.delay(1000)
        await conn.groupLeave(group)
        await m.reply('Bot Sudah keluar', m.chat)
        }
handler.help = ['leavegc']
handler.tags = ['owner']
handler.command = /^(leavegroup|leavegc|pergi)$/i

handler.owner = true

module.exports = handler