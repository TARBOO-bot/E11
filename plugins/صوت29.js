let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/غني.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `غني.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['غني', 'بوت غني','غنيلي','غنيلو'] 
handler.customPrefix = /^(غني|بوت غني|غنيلي|غنيلو)$/i;
handler.command = new RegExp;
export default handler