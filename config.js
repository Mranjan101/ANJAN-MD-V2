import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['', '𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮', true], 
  ['919883457657', '𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮', true], 
  ['', '𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮', true],
  ['919883457657', '𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮', true] ]

 //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['2341', '2348021779696', '2347045035241','233533763772'] 
global.prems = ['2347045035241','233208179431','233533763772']
global.allowed = ['2348021779696', '2347045035241','233533763772']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,        
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮'
global.premium = 'true'
global.packname = '©𝚫𝚴𝐉𝚫𝚴᭕' 
global.author = '919883457657' 
global.menuvid = 'https://i.imgur.com/7ZMfACG.mp4'
global.igfg = '▢✓ Follow My channel\nhttps://whatsapp.com/channel/0029VaefLbmDOQIeE6U05X0t\n' 
global.dygp='▢✓ Follow My channel\nhttps://whatsapp.com/channel/0029VaefLbmDOQIeE6U05X0t\n'
global.fgsc = 'https://github.com/Xcelsama/STAR-MD-V2' 
global.fgyt = 'https://whatsapp.com/channel/0029VaefLbmDOQIeE6U05X0t'
global.fgpyp = 'https://whatsapp.com/channel/0029VaefLbmDOQIeE6U05X0t'
global.fglog = 'STAR.jpg' 
global.thumb = fs.readFileSync('./STAR.jpg')


global.wait = '*🕣 _ANJAN-IS LOADING..._*\n*▰▰▰▱▱▱▱▱🕗*'
global.rwait = '🔜'
global.dmoji = '⚡'
global.done = '☑️'
global.error = '❎' 
global.xmoji = '⤵️' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
