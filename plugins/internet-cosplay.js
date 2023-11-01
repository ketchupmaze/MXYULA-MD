const fetch = require('node-fetch');
const fs = require('fs');

const handler = async (m, { conn, command, usedPrefix }) => {

let text2 = `ini Kak (⁠◠⁠‿⁠◕⁠)\n\nLINK :`;

  if (command == 'cosplay' ) {
    const blow = JSON.parse(fs.readFileSync('./json/cosplay.json'));
    const res = blow[Math.floor(Math.random() * blow.length)];
    conn.sendFile(m.chat, res, 'foto.jpg', text2 + res, m);
  }
}

handler.command = handler.help = ['cosplay'];
handler.tags = ['internet'];
handler.limit = true;

module.exports = handler;