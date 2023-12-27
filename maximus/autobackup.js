// DIBUAT OLEH D'SKYNKT
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
const fs = require('fs')

module.exports = (conn) => {
  setInterval(async () => {
    const q = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": ""
      },
      "message": {
        "conversation": "Successfull Backup User Database."
      }
    }
    let sesi = await fs.readFileSync('./database.json')
    await conn.sendMessage(global.backup + '@s.whatsapp.net', { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: q })
  }, 50 * 40 * 1000)
}

