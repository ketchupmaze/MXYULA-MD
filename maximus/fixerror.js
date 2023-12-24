// DIBUAT OLEH D'SKYNKT
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
const { spawn } = require('child_process');
const { on } = require('events');

module.exports = (conn) => {
  if (conn.child && conn.child instanceof require('child_process').ChildProcess) {
    on(conn.child, 'exit', (code, signal) => {
      if (code === null) {
        console.log(`Exited with signal: ${signal}`);
        process.send('reset');
      }
    });
  }
}
