const fetch = require('node-fetch')
const defaultLang = 'id'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0] && !m.quoted) {
        throw `*• Example* :  ${usedPrefix}${command} id how are you`
    }
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    let result = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${global.lolkey}&text=${text}`)
    let res = await result.json()
    let { translated } = res.result
    m.reply(translated)
}
handler.help = ['tr <leng> <text>']
handler.tags = ['tools']
handler.command = ['translate', 'tl', 'trad', 'tr']
handler.limit = true
module.exports = handler