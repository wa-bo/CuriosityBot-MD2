import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import moment from 'moment-timezone' 
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

//⊱ ━━━━━.⋅ Владелец ⋅.━━━━ ⊰
global.owner = [
  ['79940139737', 'Создатель ✅', true],
  ['79949930588', 'Бот ✅', true]]  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.animxscans = [['79949930588']]
global.suittag = ['79940139737'] 
global.mods = [] 
global.prems = []

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios'] 
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = { // API Prefix.
  
//⊱ ━━━━━.⋅ name: 'https://website' ⋅.━━━━ ⊰
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  azami: 'https://azami-mods.herokuapp.com',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
  
global.APIKeys = { // APIKey Here
  //⊱ ━━━━━.⋅ 'https://website': 'apikey' ⋅.━━━━ ⊰
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': 'GataDios',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

// IMAGENES 
global.raiz = './'
global.aniD = 'ANI_MX_SCANS/'
global.dirP = raiz//+aniD
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.imagen1 = fs.readFileSync(join(dirP,`storage/menus/Menu1.jpg`))
global.imagen2 = fs.readFileSync(join(dirP,`src/nuevobot.jpg`)) 
global.imagen3 = fs.readFileSync(join(dirP,`src/Pre Bot Publi.png`))
global.imagen4 = fs.readFileSync(join(dirP,`storage/menus/Menu2.jpg`))
global.stickerAMX = fs.readFileSync(join(dirP,`src/Curiosity.webp`))
global.imagen5 = fs.readFileSync('./storage/menus/Menu1.jpg')
global.imagen6 = fs.readFileSync('./storage/menus/Menu2.jpg')
global.imagen7 = fs.readFileSync('./storage/menus/Menu3.jpg')
global.imagen8 = fs.readFileSync('./storage/menus/Menu4.jpg')
global.img = 'https://telegra.ph/file/76816166bd79aa848848d.jpg'

//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = 'Bot-MD.js'
global.author = '@1.0.2'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

//⊱ ━━━━━.⋅ Información ⋅.━━━━ ⊰

global.wm = '『 Bot-MD 』'
global.azami = 'Azami ©'
global.cb = 'Bot-MD'
global.wait = '*_⌛ З А Г Р У З К А  ▬▬▬▭_*'
global.vs = '1.0.2'
global.yt = ''
global.ig = ''
global.md = 'https://chat.whatsapp.com/I6omqStfJJ22Lipyy7Mlas'
global.nn = 'https://chat.whatsapp.com/I6omqStfJJ22Lipyy7Mlas' //Grupo ofc
global.nnn = 'https://chat.whatsapp.com/HVzCx6A92RYAWiGUptLY5a' //Curiosity global
global.nnnn = 'https://chat.whatsapp.com/HSyPUm6ZDsp6hinVjaxrAy' //colaboración multi bots
global.nnnnn = '' //enlace curiosity
global.nna2 = 'J1R402WH1N0Hdl3S0NDEYu' 
global.paypal = 'https://tinyurl.com/yr9e9wv7'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
