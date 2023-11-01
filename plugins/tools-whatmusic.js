/*var uploadFile = require('../lib/uploadFile')
var fetch = require('node-fetch')

var handler = async (m, { conn, args, usedPrefix, command }) => {
 try {
	var q = m.quoted ? m.quoted : m
		var vid = await q.download?.()
		var out = await uploadFile(vid)
	    var tioxd = await fetch(`https://api.zahwazein.xyz/convert/whatmusic?url=${out}&apikey=${global.zein}`)
var tiodl = await tioxd.json()
var { 
title, 
artist, 
album, 
genres } = tiodl.result
var capt = `*WHAT MUSIC*
*Nama Music* : ${title}

• *Album :* ${album}
• *Artists :* ${artist}
• *Genres :* ${genres}
`
await conn.sendMessage(m.chat, {
                text: capt,
                contextInfo: {
                    externalAdReply: {
                        title: "What Music",
                        body: "Powered by Assisten Yula 💕",
                        thumbnailUrl: "https://telegra.ph/file/11e6b85d2c77adcffa6b5.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
   } catch (e) {
		console.log(e)
		m.reply(`Error atau kamu telah salah menggunakannya`)
	}
}
handler.help = ['searchmusic']
handler.tags = ['tools']
handler.command = /^(what(musik|music)|shazam)$/i
handler.register = false
handler.limit = 2

module.exports = handler*/


/*
TUTOR DAPETIN HOST, ACCESS_KEY, DAN ACCESS_SECRET
1. siapkan email palsu https://temp-mail.org/id
2. kesini https://console.acrcloud.com/#/register (isi bebas)
3. Kalian akan di arahkan ke website untuk login
4. pilih Audio & Video Recognition atau https://console.acrcloud.com/avr?region=ap-southeast-1
5. Pilih project dan pilih Audio & Video Recognition
6. Create project
7. isi project name bebas
8. pilih Recorded Audio (Audio captured via microphone or noisy audio files)
9. pilih ini Audio Fingerprinting & Cover Song (Humming) Identification
10. pilih buckets ACRCloud Music dan centang semua lalu confirm

NOTE: ini berlaku 14 hari, lakukan hal yang berulang kali. disarankan jangan spam atau terlalu ngasal.
*/

let acrcloud = require('acrcloud');

let acr = new acrcloud({
    host: 'identify-ap-southeast-1.acrcloud.com',
    access_key: 'bf93795c2a02658a1e6f77c869816192',
    access_secret: 'Yq7FuenKswZa9AISGKiQig0SdBd5HhQf5h4UnPkV'
});

const handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || q.mediaType || '';
        
        if (/video|audio/.test(mime)) {
            let buffer = await q.download();
           await conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
            
            let { status, metadata } = await acr.identify(buffer);
            if (status.code !== 0) throw status.msg;

            let { title, artists, album, genres, release_date } = metadata.music[0];
            
            let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`;
            txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`;
            txt += `*• Release Date:* ${release_date}`;
            
            conn.reply(m.chat, txt.trim(), m);
        } else {
            throw `Reply audio/video with command ${usedPrefix + command}`;
        }
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Sistem YuLa Error', m);
    }
};

handler.help = ['whatmusic'];
handler.tags = ['tools'];
handler.command = /^(whatmusic|whatsmusic|musikapa|whatmusik|detectmusic|deteksimusik|detectmusik)$/i;

module.exports = handler;