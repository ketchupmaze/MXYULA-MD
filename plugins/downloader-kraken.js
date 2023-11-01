let fetch = require("node-fetch");

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `
*example:* ${usedPrefix}${command} https://krakenfiles.com/view/jumGvugviY/file.html
`

      let apis = await fetch(`https://api.neoxr.eu/api/kraken?url=${args[0]}&apikey=${global.neoxr}`)
      let result = await apis.json()
      let { filename, type, size, views, downloads, last_download, upload_at, url } = result.data
      let caption = `
*💌 Name:* ${filename}
*👁️ View:* ${views}
*📊 Size:* ${size}
*🗂️ Type:* ${type}
*📨 Uploaded:* ${upload_at}
*⬇️ Download:* ${downloads}
*⏳ Last Download:* ${last_download}

*kalau mau download sendiri bisa kok :v*
${url}
`.trim()
       m.reply(caption)
       conn.sendFile(m.chat, url, `data.${type}`, '', m)
}

handler.help = ['krakendownload'];
handler.tags = ['downloader'];
handler.command =  /^(krakendl|krakendownload)$/i
handler.limit = 5;
handler.register = false;
handler.premium = false;

module.exports = handler;