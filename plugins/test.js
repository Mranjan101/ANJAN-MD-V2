import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let img = "https://avatars.githubusercontent.com/u/106463398?v=4"
let info = `*ANJAN-MD-V2 BOT IS ACTIVE*`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: author, body: botname, sourceUrl: fgyt, thumbnail: await conn.getFile(img) }}})
}
handler.customPrefix = /^(Ab|bot|test)$/i
handler.command = new RegExp

export default handler
