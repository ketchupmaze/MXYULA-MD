let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} ditzz0072`
    try {
         let api = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${global.lolkey}`)
let json = await api.json()
let { 
user_picture, 
username, 
nickname, 
bio, 
followers, 
followings, 
likes, 
video } = json.result
let maximus = `*Username :* ${username}
*Nickname :* ${nickname}
*Bio :* ${bio}

*Followers :* ${followers}
*Followings :* ${followings}
*Likes :* ${likes}
*Video :* ${video}`
conn.sendFile(m.chat, user_picture, 'igstalk.jpg', maximus, m)
    } catch (e) {
        m.reply('Sistem Sedang Bermasalah!')
    }
}

handler.help = ['tiktokstalk'].map(v => v + ' username')
handler.tags = ['downloader']
handler.command = /^(ttstalk|stalktt|stalktiktok|tiktokstalk)$/i
handler.limit = 5

module.exports = handler
