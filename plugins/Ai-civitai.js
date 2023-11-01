let fetch = require("node-fetch")
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
text,
    args
}) => {
if (!Number(text)) return m.reply("input number")
        await m.reply('```Harap tunggu...```')
        let res = await fetch('https://civitai.com/api/v1/models')
        let yula = await res.json()
        let line = yula.items[text].modelVersions[0].images[0].meta.prompt
        let line2 = yula.items[text].modelVersions[0].images[0].url
        await conn.sendFile(m.chat, line2, null, line, m)
}
handler.help = ["civitai"]
handler.tags = ["ai"]
handler.command = /^(civitai)$/i
handler.register = false
handler.premium = false
handler.limit = true

module.exports = handler