let handler = async(m, { conn }) => {
	let who, pp
	if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	else who = m.quoted ? m.quoted.sender : m.chat
	try {
		try { pp = await conn.profilePictureUrl(who, 'image') }
		catch { pp = './src/avatar_contact.png' }
		await conn.sendFile(m.chat, pp, 'img.jpg', `Status : Selesai`, m)
	} catch (e) {
		console.log(e)
		m.reply(`Sistem YuLa Error`)
	}
}

handler.help = ['getprofile @tag']
handler.tags = ['group']
handler.command = /^(get(pp|profile))$/i

module.exports = handler