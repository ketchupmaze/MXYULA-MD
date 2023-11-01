let handler = m => m
handler.before = async (m, { conn, isPrems, owner }) => {
	if (isPrems) {
    if (new Date() * 1 >= global.db.data.users[m.sender].premiumDate) {
      conn.reply(m.chat, "*『 A N N O U N C E M E N T 』\n\nMasa Premium Kamu Telah Habis. Jika Ingin Perpanjang Masa Premium Silahkan Hubungi Nomor Di Bawah*\n081283516246", m).then(() => {
        global.db.data.users[m.sender].premium = false
    //       const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    //       this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m).then(() => {
    //       this.sendContact(m.chat, owner[0], this.getName(owner[0] + '@s.whatsapp.net'), m).then(() => {
         })
      }
   }
}
module.exports = handler