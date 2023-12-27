let fs = require('fs') 
let chalk = require('chalk')

  // OWNER CONTOH EDIT : ['NOMORMU AWALI DENGAN 62 TANPA 0', 'NAMAMU', true]
owner = [
['6281283516246', 'Maximus Store', true]
] 

  // AUTOBACKUP DATABASE
backup = '6281283516246'

  // MODERATOR
mods = ['6288225750488'] 

  // PREMIUM USERS
prems = ['6281283516246']

  // APIKEYS
global.lolkey = 'APIKEYLU'
global.neoxr = 'APIKEYLU'
global.btc = 'APIKEYLU'
global.rose = 'Rk-APIKEYLU'

  // name: 'https://website'
global.APIs = {
  neoxr: 'https://api.neoxr.eu.org/',
  lol: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.life',
  TioXD: 'https://api.botcahx.biz.id',
  lann: 'https://api.betabotz.org',
} 

  // 'https://website': 'APIKEY'
global.APIKeys = {
  'https://api.neoxr.eu.org/': 'APIKEYLU',
  'https://api.lolhuman.xyz': 'APIKEYLU',
  'https://api.botcahx.live': 'APIKEYLU',
  'https://api.itsrose.life': 'Rk-APIKEYLU',
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

// ALL GLOBAL
global.nameown = 'Maximus Store'
global.waown = 'wa.me/6281283516246'
global.mail = 'maximusstoreindonesia@gmail.com'
global.fb = 'https://facebook.com/maximusstoreindonesia'
global.ig = 'https://instagram.com/maximusstore.id'
global.gcbot = 'https://chat.whatsapp.com/FJRtTzRKxP8A2wT6fcCW3s'
global.wait = '_*YuLa sedang memproses...*_'
global.eror = '*Sistem YuLa Error*'
global.maxwarn = '2'
global.packname = sticker_name
global.author = sticker_author
global.wm = '© ᴀssɪsᴛᴇɴ ʏᴜʟᴀ 💕'
global.pricelist = '*LIMIT* kamu habis. kamu bisa order akses premium\n\n*PREMIUM USER PRICE LIST*\n\n*3 Day premium*\n- OrderID: 3\n- Price: Rp. 5.000 IDR\n\n*7 Day premium*\n- OrderID: 7\n- Price: Rp. 10.000 IDR\n\n*30 Day premium*\n- OrderID: 30\n- Price: Rp. 15.000 IDR\n\n*60 Day premium*\n- OrderID: 60\n- Price: Rp. 30.000 IDR\n\n*90 Day premium*\n- OrderID: 90\n- Price: Rp. 40.000 IDR\n\n*365 Day premium*\n- OrderID: 365\n- Price: Rp. 115.000 IDR\n\nSilahkan ikuti contoh di bawah.\n*.order* <OrderID>\nExample: *.order* 30'

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
