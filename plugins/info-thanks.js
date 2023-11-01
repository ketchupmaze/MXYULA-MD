let handler = async m => m.reply(`Terima kasih atas yang membantu :

TIO
MARK
LANN
ZANS
FAHRI
PENYEWA BOT
`.trim())
handler.help = ['thanks']
handler.tags = ['info']
handler.command = /thanks/i
module.exports = handler