const fetch = require('node-fetch');
let handler = async (m, { command, conn, usedPrefix, text }) => {
if (!text) throw `Contoh Penggunaan \n\nExample: ${usedPrefix}${command} *produk*,*id*,*username*,*refid*,*waktu&tanggal*`
let [ produk, id, username, refid, waktu ] = text.split(',');
  let api_url = `https://api.lolhuman.xyz/api/creator/invoice2?apikey=${global.lolkey}&produk=${produk}&id=${id}&jumlah=1&username=${username}&refid=${refid}&waktu=${waktu}&status=Sukses`
	let img = await fetch(api_url)
	await conn.sendMessage(m.chat, {
		image: img,
		caption: 'Ini hasilnya!'
	}, {
		quoted: m
	})
}
handler.command = handler.help = ['invoice'];
handler.tags = ['tools'];
handler.register = false
handler.limit = 2

module.exports = handler;