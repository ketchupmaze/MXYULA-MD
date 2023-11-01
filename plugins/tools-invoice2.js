const fetch = require('node-fetch');
let handler = async (m, { command, conn, usedPrefix, text }) => {
if (!text) throw `Contoh Penggunaan \n\nExample: ${usedPrefix}${command} *produk*,*id*,*username*,*refid*`
let waktu = getCurrentDate();
let [ produk, id, username, refid ] = text.split(',');
  let api_url = `https://api.lolhuman.xyz/api/creator/invoice?apikey=${global.lolkey}&produk=${produk}&id=${id}&jumlah=1&username=${username}&refid=${refid}&waktu=${waktu}`
	let img = await fetch(api_url)
	await conn.sendMessage(m.chat, {
		image: img,
		caption: 'Ini hasilnya!'
	}, {
		quoted: m
	})
}
handler.command = handler.help = ['invoice2'];
handler.tags = ['tools'];
handler.register = false
handler.limit = 2

module.exports = handler;

function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; 
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
}