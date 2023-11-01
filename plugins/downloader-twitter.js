var fetch = require("node-fetch");
var handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://twitter.com/ketchupnude/status/1713239814533955723`
if (!args[0].match(/twitter/gi)) throw `URL Tidak Ditemukan!`
try {
        const api = await fetch(`https://api.neoxr.eu/api/twitter?url=${args[0]}&apikey=${global.neoxr}`)
        conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
        const res = await api.json()
        for (let i of res.data) {
            conn.sendFile(m.chat, i.url, null, `*Twitter Downloader*`, m)
        }
    } catch (e) {
        throw `*Server Down!*`
    }
};
handler.command = /^(twitterdl|twitter)$/i
handler.help = ['twitter'].map(v => v + ' url');
handler.tags = ['downloader'];
handler.register = false;
handler.group = false;
handler.limit = 5;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;