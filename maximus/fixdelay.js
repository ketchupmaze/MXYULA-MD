const delay = 500;

module.exports = {
  fixDelay: (conn, message) => {
    setTimeout(() => {
      conn.sendMessage(message.chat, message.content, message);
    }, delay);
  }
};
