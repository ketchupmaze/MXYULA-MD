let fetch = require('node-fetch')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

let handler = async (m, { args, text, conn, usedPrefix, command }) => {
  m.reply('_Testing speed..._🔥')
  let o
  try {
    try {
      o = await exec('speedtest --accept-license')
    } catch (e) {
      o = e
    } finally {
      let { stdout, stderr } = o
      o = stdout ? stdout : stderr 
    }
  } catch {
    try {
    //  o = await exec('python lib/speed.py')
o = await exec('speedtest --accept-license')
    } catch (e) {
      o = e
    } finally {
      let { stdout, stderr } = o
      o = stdout ? stdout : stderr 
    }
  }
  conn.reply(m.chat, o, m)
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^(spdt|speedtest)$/i
module.exports = handler