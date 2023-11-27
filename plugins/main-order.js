const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, usedPrefix, command}) => {
    if (!text) return conn.reply(m.chat, `*— YULA JOIN GROUP*\n\n*7 Day join the group*\n- OrderID: G7\n- Price: Rp. 7.000 IDR\n\n*30 Day join the group*\n- OrderID: G30\n- Price: Rp. 15.000 IDR\n\n*365 Day join the group*\n- OrderID: G365\n- Price: Rp. 110.000 IDR\n\n\n*— PREMIUM USER*\n\n*3 Day premium*\n- OrderID: 3\n- Price: Rp. 5.000 IDR\n\n*7 Day premium*\n- OrderID: 7\n- Price: Rp. 10.000 IDR\n\n*30 Day premium*\n- OrderID: 30\n- Price: Rp. 15.000 IDR\n\n*60 Day premium*\n- OrderID: 60\n- Price: Rp. 30.000 IDR\n\n*90 Day premium*\n- OrderID: 90\n- Price: Rp. 40.000 IDR\n\n*365 Day premium*\n- OrderID: 365\n- Price: Rp. 115.000 IDR\n\n${usedPrefix + command} <OrderID>\nexample: ${usedPrefix + command} 30`, m)
    let orderID;

  switch(text) {
      case '3':
      orderID = '3';
      break;
      case '7':
      orderID = '7';
      break;
      case '30':
      orderID = '30';
      break;
      case '60':
      orderID = '60';
      break;
       case '90':
      orderID = '90';
      break;
       case '365':
      orderID = '365';
      break;
      case 'G7':
      orderID = 'G7';
      break;
      case 'G30':
      orderID = 'G30';
      break;
      case 'G365':
      orderID = 'G365';
      break;
      default:
      throw `*OrderID* yang dipilih tidak tersedia, Silahkan pilih *OrderID* di bawah.
      
*— YULA JOIN GROUP*

*7 Day join the group*
- OrderID: G7
- Price: Rp. 7.000 IDR

*30 Day join the group*
- OrderID: G30
- Price: Rp. 15.000 IDR

*365 Day join the group*
- OrderID: G365
- Price: Rp. 110.000 IDR


*— PREMIUM USER*

*3 Day premium*
- OrderID: 3
- Price: Rp. 5.000 IDR

*7 Day premium*
- OrderID: 7
- Price: Rp. 10.000 IDR

*30 Day premium*
- OrderID: 30
- Price: Rp. 15.000 IDR

*60 Day premium*
- OrderID: 60
- Price: Rp. 30.000 IDR

*90 Day premium*
- OrderID: 90
- Price: Rp. 40.000 IDR

*365 Day premium*
- OrderID: 365
- Price: Rp. 115.000 IDR
`;
  };
    var nomor = m.sender
    const teks1 = `*[ Y U L A  O R D E R ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nORDER : ${orderID}`
    conn.reply('6281283516246@s.whatsapp.net', teks1, m)
    conn.reply(m.chat, '✔️ Orderan mu sudah di kirim ke OWNER, Harap tunggu pesan dari OWNER', m)
}
handler.help = ['order'];
handler.tags = ['main'];
handler.command =  /(order|sewa)/i
handler.register = false;
handler.premium = false;

module.exports = handler