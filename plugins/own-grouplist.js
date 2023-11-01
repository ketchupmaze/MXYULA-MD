let handler = async (m, { conn, participants }) => {

	let now = new Date() * 1
	let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let txt = ''
    // let tolgp = `${participants.lenght}`
    
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) 
    txt += `${await conn.getName(jid)}\n${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n${db.data.chats[jid] == undefined ? db.data.chats[jid] = {
      isBanned: false,
      welcome: false,
      antiLinkall: false,
      antiLinkkick: false,
      antiLinkdelete: false,
      antiJasa: false,
      antiJualan: false,
      delete: false,
    } : db.data.chats[jid].expired ? msToDate(db.data.chats[jid].expired - now) : '*Tidak Diatur Expired Group*'}
${db.data.chats[jid].isBanned ? '✅' : '❌'} _Group Banned_
${db.data.chats[jid].welcome ? '✅' : '❌'} _Auto Welcome_
${db.data.chats[jid].antiLinkkick ? '✅' : '❌'} _Anti Link Group_
${db.data.chats[jid].antiLinkdelete ? '✅' : '❌'} _Anti Link Delete_
${db.data.chats[jid].antiLinkall ? '✅' : '❌'} _Anti Link All_
${db.data.chats[jid].antiJualan ? '✅' : '❌'} _Anti Jualan_
${db.data.chats[jid].antiRpg ? '✅' : '❌'} _Anti Rpg_
${db.data.chats[jid].antiToxic ? '✅' : '❌'} _Anti Toxic_
${db.data.chats[jid].nfsw ? '✅' : '❌'} _NFSW_\n\n`
    m.reply(`List Groups:
Total Group: ${groups.length}

${txt}

`.trim())

}

handler.help = ['grouplist']
handler.tags = ['group']

handler.command = /^(group(s|list)|(s|list)group)$/i
handler.owner = true


module.exports = handler
handler.owner = true

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24 * 60 * 60 * 1000));
  daysms = ms % (24 * 60 * 60 * 1000);
  hours = Math.floor((daysms) / (60 * 60 * 1000));
  hoursms = ms % (60 * 60 * 1000);
  minutes = Math.floor((hoursms) / (60 * 1000));
  minutesms = ms % (60 * 1000);
  sec = Math.floor((minutesms) / (1000));
  return days + " hari " + hours + " jam " + minutes + " menit";
  // +minutes+":"+sec;
}