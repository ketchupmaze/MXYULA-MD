let fetch = require('node-fetch');

let axios = require('axios');

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
  if (!text) throw `
*example:* .stablediff *style* | *a woman taking a picture of herself in a mirror, ulzzang, lalisa manobal, cute top, polka dot, wearing a cute top, petite, dots, lalisa manoban of blackpink, polkadots, mirror selfie, cute outfit, black dots, bralette, suki, outfit photo, wearing a camisole, slender waist*
`
  if (!text.includes(',')) throw `Tolong gunakan prompt dengan benar. Gunakan koma *[ , ]* untuk memisahkan argumen.\n*Contoh:* ${usedPrefix}${command} 1girl, blush, looking to viewer, warm smile`;  
  const prompt = text.split(',').join(', ');
let res = await (await fetch(`https://api.itsrose.life/image/stable/diffusion?prompt=${prompt}&negative_prompt=bad%20anatomy&ratio=9%3A16&cfg=7.5&model_id=midjourney&seed=123456&apikey=${global.rose}`)).buffer()
  conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
await conn.sendFile(m.chat, res, 'hd.jpg', "Here your image.", m)
};

handler.help = ['stablediffusion']
handler.tags = ['ai']
handler.command = /^(stablediffusion|stablediff|stabledif|stablediffusion)$/i

handler.register = false;
handler.premium = false;
handler.limit = 5;

module.exports = handler
