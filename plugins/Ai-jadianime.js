let fetch = require('node-fetch')
let FormData = require('form-data')
let axios = require('axios')

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
let q = m.quoted ? m.quoted : m;
  let maximus = [
    "makima",
    "angle",
    "color_line",
    "snow_fall", 
    "manga", 
    "charming",
    "stipple",
    "cg",
    "idol",
    "comic_world",
    "princess",
    "anime25d",
    "realistic",
    "anime",
    "comic",
    "manhwa",
    "manhwa_female",
    "manhwa_male",
    "jewelry",
    "jewelry_sky",
    "basketball",
    "summer",
    "cute_child",
    "makeup_sunny",
    "anime_idol",
    "azure_sky",
    "today",
    "majestic",
    "ftlove",
    "loveft",
    "samyang",
    "student",
    "baby",
    "anime_1",
    "anime_2",
    "anime_3",
    "anime_4",
    "drawing" 
    ]
  let anime = "anime";
  let query = args[0] ? args[0] : anime;
  let list = `*OTHER STYLE*

makima, angle, color_line, snow_fall, manga, charming, stipple, cg, idol, comic_world, princess, anime25d, realistic, anime, comic, manhwa, manhwa_female, manhwa_male, jewelry, jewelry_sky, basketball, summer, cute_child, makeup_sunny, anime_idol, azure_sky, today,majestic, ftlove, loveft, samyang, student, baby, anime_1, anime_2, anime_3, anime_4, drawing

*example:* ${usedPrefix}${command} makima`;
  conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	});
	try {
  let media = await q.download();

    const API_URL = `https://api.itsrose.life/image/differentMe?style=${args[0] ? args[0] : anime}`;
    const form = new FormData();
    form.append("file", Buffer.from(media), {
    filename: 'img.jpg',
    contentType: 'image/jpg'
});
    const { data: responseData, status } = await axios.post(API_URL, form, {
      headers: {
        Authorization: `${global.rose}`,
        ...form.getHeaders(),
        'accept': 'application/json',
      },
      responseType: "arraybuffer"
    });
    if (status !== 200) {
      return "error";
    }
    await conn.sendMessage(m.chat, {
			image: responseData,
			caption: `Here your image.\n\n*Style:* ${query}\n\n——————————————\n\n${list}`
		}, { quoted: m });
		   } catch (e) {
    console.log(e)
    conn.reply(m.chat, '*Sorry there was an error accepting the request.*', m)
  };
};
handler.help = ['jadianime'];
handler.tags = ['ai']
handler.command = /^(jadianime|toanime)$/i;
handler.register = false
handler.premium = false
handler.limit = 5

module.exports = handler;