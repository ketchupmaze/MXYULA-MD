let fs = require('fs') 
let chalk = require('chalk')

owner = [
  ['6281283516246', 'Maximus', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
mods = ['6281283516246'] // Want some help?
prems = ['6281283516246'] // Premium user has unlimited limit
global.lolkey = 'Apikeylu' // Buy keys at https://api.lolhuman.xyz
global.neoxr = 'Apikeylu' // Buy keys at https://api.neoxr.eu
global.btc = 'Apikeylu' // Buy keys at https://api.botchax.live
global.rose = 'Apikeylu' // Buy keys at https://api.itsrose.life
global.APIs = { // API Prefix
  // name: 'https://website'
  neoxr: 'https://api.neoxr.eu.org/',
  lol: 'https://api.lolhuman.xyz',
  gimez: 'https://masgimenz.my.id/',
  rose: 'https://api.itsrose.life',
  melcanz: 'https://melcanz.com',
  TioXD: 'https://api.botcahx.biz.id',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu': 'Apikeylu',
  'https://api.lolhuman.xyz': 'Apikeylu',
  'https://api.botcahx.live': 'Apikeylu',
  'https://api.itsrose.life': 'Rk-Apikeylu',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'sᴛɪᴄᴋᴇʀ ʙʏ'
  var sticker_author = 'ᴀssɪsᴛᴇɴ ʏᴜʟᴀ 💕'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
packname = sticker_name
author = sticker_author
wm = '© ᴀssɪsᴛᴇɴ ʏᴜʟᴀ 💕'

Intervalmsg = 1800 //detik

multiplier = 1000 // The higher, The harder levelup

rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
