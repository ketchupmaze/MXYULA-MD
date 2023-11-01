var fetch = require('node-fetch');
    var handler = async (m, { conn, command, args }) => {
    try {
    if (!args[0]) return conn.reply(m.chat, 'Input URL!', m);
    if (args[0].match(/xnxx\.com|hamster\.com|nekopoi\.care/i)) {
      return conn.reply(m.chat, 'Link tersebut dilarang!', m);
    }
    if (args[0].match(/porno|pornhub|redtube|xvideos/i)) {
      return conn.reply(m.chat, 'Link porno tidak diperbolehkan', m);
    }
    await conn.reply(m.chat, '_Ｌｏａｄｉｎｇ．．._', m);
    var url = args[0].startsWith('http') ? args[0] : 'https://' + args[0];
    const apiUrl = `https://ss.tioo.eu.org/api/webscreen?url=${url}&mediatype=desktop&filetype=jpeg&responsetype=json`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const takeScreenshot = async (apiUrl, options, conn) => {
      try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
        m.reply("Maaf, Terjadi Kesalahan!");
        throw new Error('Failed to take screenshot');
      }
    }
    const sendScreenshot = async (conn, m, apiUrl, options) => {
      try {
        const result = await takeScreenshot(apiUrl, options, conn);
        conn.sendFile(m.chat, result.result.link.file, 'ss.jpg', '', m);
      } catch (error) {
        console.error(error);
        m.reply("Maaf, Terjadi Kesalahan!");
        throw new Error('Failed to send screenshot');
      }
    }
    try {
      await sendScreenshot(conn, m, apiUrl, options);
    } catch (error) {
      console.error(error);
      console.log('Trying Again...');
      try {
        await sendScreenshot(conn, m, apiUrl, options);
      } catch (error) {
        console.error(error);
        m.reply('Failed after retrying', m);
      }
    }
  } catch (error) {
    console.log(error);
    m.reply("Maaf, Terjadi Kesalahan!");
  }
}

handler.command = ['ssjson'];
handler.help = ['ssjson <url>'];
handler.tags = ['tools'];
handler.limit = true;
handler.fail = null;
module.exports = handler;