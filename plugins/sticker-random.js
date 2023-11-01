var { sticker5 } = require('../lib/sticker')
var handler = async (m, {
 conn, 
 command
 }) => {
    var error = (`https://telegra.ph/file/12141dd462ecabeed1347.png`)
    try {
        if (command == 'dinokuning' || command == 'sdino') {
        const res = `https://api.botcahx.live/api/sticker/dinokuning?apikey=dasarneoxr`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'stickergenshin' || command == 'sgenshin') {
        const res = `https://api.botcahx.live/api/sticker/paimon?apikey=dasarneoxr`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'spongebob' || command == 'sspongebob') {
        const res = `https://api.botcahx.live/api/sticker/spongebob?apikey=dasarneoxr`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'manusialidi' || command == 'smanusialidi') {
        const res = `https://api.botcahx.live/api/sticker/manusialidi?apikey=dasarneoxr`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'stickerdog' || command == 'sdog') {
        const res = `https://api.lolhuman.xyz/api/sticker/anjing?apikey=${global.lolkey}`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'stickerpatrick' || command == 'spatrick') {
        const res = `https://api.lolhuman.xyz/api/sticker/patrick?apikey=${global.lolkey}`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'stickeramongus' || command == 'samongus') {
        const res = `https://api.lolhuman.xyz/api/sticker/amongus?apikey=${global.lolkey}`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
    } catch (e) {
        console.log(e)
        await conn.sendFile(m.chat, error, 'error.webp', '', m)
    }
}

handler.command = handler.help = ['dinokuning', 'spongebob', 'manusialidi', 'sdino', 'sspongebob', 'smanusialidi', 'stickergenshin', 'sgenshin', 'stickerdog', 'sdog', 'stickerpatrick', 'spatrick', 'stickeramongus', 'samongus']
handler.tags = ['sticker']
handler.register = false
handler.limit = 2
module.exports = handler
