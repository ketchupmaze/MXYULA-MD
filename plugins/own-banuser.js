let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, isOwner }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
  var own2 = ``
  for(let i of global.owner){
  own2 += i[0]
  }
  
  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}ban number/tag\n*Example:* ${usedPrefix}ban 6281283516246|99\n\n• ${usedPrefix}ban @tag\n*Example:* ${usedPrefix}ban @⁨+62 812-8351-6246`, m)
  if(hl[0].includes(own2)) return conn.reply(m.chat, `Tidak bisa ban nomor owner :v`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  var jumlahHari = 86400000 * hl[1]
  // var jumlahHari = 1000 * text
  var now = new Date() * 1
  global.db.data.users[hl[0]].banned = true
  if (now < global.db.data.users[hl[0]].bannedDate) global.db.data.users[hl[0]].bannedDate += jumlahHari
  else global.db.data.users[hl[0]].bannedDate = now + jumlahHari
  m.reply("DONE")
  conn.reply("120363047029251042@g.us",`*BANNED NOTIFICATION*\n\n*${m.sender.split('@')[0]} _Telah membanned_ @${hl[0].split('@')[0]}`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
}
handler.help = ['ban *@tag/number*']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.owner = true
handler.fail = null
module.exports = handler

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+"H "+hours+"J "+ minutes + "M";
  // +minutes+":"+sec;
}