

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/ALIVE.mp3"
    let url = "https://github.com/Xcelsama"
    let murl = "https://YouTube.com"
    let img = "https://i.imgur.com/UmnxnvO.jpeg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '919341378016@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Excel",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮 𝞘𝙎 𝞓𝙇𝞘𝝯𝞢 🌟",
          body: "STAR-MD",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/KLNTBqPjqCW5Pa8vCzcXBw',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
