process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = true;
import './config.js';
import { createRequire } from "module";
import path, { join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { platform } from 'process';
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) };
import * as ws from 'ws';
import { writeFileSync, readdirSync, statSync, unlinkSync, existsSync, readFileSync, copyFileSync, watch, rmSync, readdir, stat, mkdirSync } from 'fs';
import yargs from 'yargs';
import { spawn } from 'child_process';
import lodash from 'lodash';
import chalk from 'chalk';
import syntaxerror from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import P from 'pino';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const { DisconnectReason, useMultiFileAuthState } = await import('@adiwajshing/baileys');
const { CONNECTING } = ws;
const { chain } = lodash;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

protoType();
serialize();

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = { start: new Date }
const __dirname = global.__dirname(import.meta.url)
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || 'xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-HhhHBb.aA').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}${dirP}database.json`))

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {})
}
global.db.chain = chain(global.db.data)
}
loadDatabase()
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
if (!existsSync(jadibts)) {
  mkdirSync(jadibts);
  console.log('Успешно созданный каталог jadibts');
}
if (!existsSync(authFileRespald)) {
  mkdirSync(authFileRespald);
  console.log('Каталог сеансовРезервное копирование успешно создано');
}
if (!existsSync(temp)) {
  mkdirSync(temp);
  console.log('Каталог tmp успешно создан');
}
const { state, saveState, saveCreds } = await useMultiFileAuthState(global.authFile)

const connectionOptions = {
logger: P({ level: 'silent' }),
printQRInTerminal: true,
auth: state,
browser: ['CuriosityBot-MD','Edge','1.0.0'], 

}

global.conn = makeWASocket(connectionOptions)
conn.isInit = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))}, 30 * 1000)}
if (opts['server']) (await import(join(__dirname, 'server.js'))).default(global.conn, PORT)

  const SESSION_DIR = authFile;
  const SESSION_BACKUP_DIR = authFileRespald;
  const CREDENTIALS_FILE = 'creds.json';
  const CREDENTIALS_BACKUP_FILE = 'creds.json';
  
function backupCreds() {
const credsFilePath = path.join(SESSION_DIR, CREDENTIALS_FILE);
  const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);
  

  copyFileSync(credsFilePath, backupFilePath);
  console.log(`\nСоздан файл резервной копии: ${backupFilePath}`);

}
 
function actualizarNumero() {
  const configPath = path.join(__dirname, 'config.js');
  const configData = readFileSync(configPath, 'utf8');
  const updatedConfigData = configData.replace(/(global\.animxscans\s*=\s*\[\s*\[')[0-9]+'(,\s*'Bot principal\s*-\s*CuriosityBot-MD',\s*true\]\s*\])/, function(match) {
    const archivoCreds = readFileSync(path.join(__dirname, 'sesionRespaldo/creds.json'));
    const numero = JSON.parse(archivoCreds).me.id.split(':')[0];
    return `global.animxscans = [['${numero}', 'CuriosityBot-MD', true]]`;
  });
  writeFileSync(configPath, updatedConfigData);
}

function cleanupOnConnectionError() {

  readdirSync(SESSION_DIR).forEach(file => {
    const filePath = path.join(SESSION_DIR, file);
    try {
      unlinkSync(filePath);
      console.log(`Удаленный файл: ${filePath}`);
    } catch (error) {
      console.log(`Не удалось удалить файл: ${filePath}`);
    }
  });

  const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);
  try {
    unlinkSync(backupFilePath);
    console.log(`Удаленный файл резервной копии: ${backupFilePath}`);
  } catch (error) {
    console.log(`Файл резервной копии не может быть удален или не существует: ${backupFilePath}`);
  }
  process.send('reset')
} 

function credsStatus() {

  const credsFilePath = path.join(SESSION_DIR, CREDENTIALS_FILE);
  const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);
  
  // Проверьте, существует ли исходный файл учетных данных и не имеет ли он 0 байт
  let originalFileValid = false;
  try {
    const stats = statSync(credsFilePath);
    originalFileValid = stats.isFile() && stats.size > 0;
  } catch (error) {
    console.log(`Файл учетных данных не существует или пуст. Генерация QR-кода...`);
    connectionOptions
      console.log(`Отсканируйте QR-код, чтобы продолжить.`);
  }
  
  if (!originalFileValid) {
    // Исходный файл учетных данных недействителен или отсутствует, поэтому скопируйте файл резервной копии и переименуйте его
    const backupStats = statSync(backupFilePath);
    if (backupStats.isFile() && backupStats.size > 0) {
      copyFileSync(backupFilePath, credsFilePath);
      console.log(`Archivo de credenciales restaurado desde la copia de seguridad: ${backupFilePath} -> ${credsFilePath}`);
        process.send('reset')
    } else {
      console.log(`No se encuentra el archivo de credenciales válido y el archivo de copia de seguridad no es válido o falta: ${credsFilePath}, ${backupFilePath}`);
      connectionOptions
    }
  } else {
    console.log('Резервное копирование файла выполнено успешно, продолжается вход в систему');
  }
}

function waitTwoMinutes() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2 * 60 * 1000); 
  });
}

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin } = update
if (isNewLogin) conn.isInit = true
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
console.log(await global.reloadHandler(true).catch(console.error))
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined) {
console.log(chalk.yellow('☢️ Отсканируйте этот QR-код,\nСрок действия QR-кода истекает через 45 секунд.'));
      }
if (connection === 'open') {
console.log(chalk.yellow('🟢  УСПЕШНОЕ ПОДКЛЮЧЕНИЕ'))
if (existsSync(global.authFile)) {
    console.log(chalk.green('\n✓ Успешно сохраненный файл учетных данных'));
  } else {
    console.log(chalk.yellow('⚠️ᅠОшибка при сохранении файла учетных данных'));
  }
          backupCreds();
          actualizarNumero()
          credsStatus();
          try {
            // Leer la base de datos
            await db.read();
            const chats = db.data.chats;
            let successfulBans = 0;
            for (const [key, value] of Object.entries(chats)) {
              if (value.isBanned === false) {
                value.isBanned = true;
                //console.log('Baneando chat:', key);
                successfulBans++;
              }
            }
            await db.write();
          
            if (successfulBans === 0) {
              throw new Error('Не удалось заблокировать ни одного чата');
            } else {
              console.log(`Se banearon ${successfulBans} chats correctamente`);
            }
          } catch (e) {
            console.log(`Error: ${e.message}`);
          } 
          await waitTwoMinutes()         
          try {
            await db.read();
            const chats = db.data.chats;
            let successfulUnbans = 0;
            for (const [key, value] of Object.entries(chats)) {
              if (value.isBanned === true) {
                value.isBanned = false;
                //console.log('Desbaneando chat:', key);
                successfulUnbans++;
              }
            }
            await db.write();
            if (successfulUnbans === 0) {
              throw new Error('Не удалось разгадать ни одного чата');
            } else {
              console.log(`Se desbanearon ${successfulUnbans} chats correctamente`);
            }
          } catch (e) {
            console.log(`Error: ${e.message}`);
          }
          
          }
        try {
          await waitTwoMinutes(); 
          await conn.groupAcceptInvite(global.nna2);
          } catch (error) {
              console.log('Ошибка при принятии группового приглашения:', error);
          }
}
 
process.on('uncaughtException', console.error)

let isInit = true;
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = global.conn.chats
try { global.conn.ws.close() } catch { }
conn.ev.removeAllListeners()
global.conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
  
conn.welcome = '┏━━━━━━━━━━━━\n┃〘 💛 *ДОБРО ПОЖАЛОВАТЬ* 💛〙\n┃━━━━━━━━━━━━\n┃ *_В @subject ✨_* \n┃ *_👀 @user_*\n┃\n┃\n┃=> *_Вот описание_* \n┃ *_группы, прочтите его!!_*\n┃\n\n*@desc*\n┃ _ДОБРО ПОЖАЛОВАТЬ_\n┗━━━━━━━━━━━'
  conn.bye = '┏━━━━━━━━━━━━\n┃〘 👋🏻 *ПРОЩАЙ* 👋🏻 〙\n┃━━━━━━━━━━━━\n┃ *_👋 Участник @user_* \n┃ *Покинул нашу* \n┃ *группу*\n┗━━━━━━━━━━'
   conn.spromote = '⚠️ *@user ПРИСОЕДИНЯЕТСЯ К ГРУППЕ АДМИНИСТРАТОРОВ!!*'
    conn.sdemote = '⚠️ *@user ВЫХОД ИЗ ГРУППЫ АДМИНИСТРАТОРОВ!!*'
     conn.sDesc = '📝 *ОПИСАНИЕ БЫЛО ИЗМЕНЕНО*\n\n*НОВОЕ ОПИСАНИЕ:* @desc'
      conn.sSubject = '📝 *НАЗВАНИЕ ГРУППЫ БЫЛО ИЗМЕНЕНО*\n*НОВОЕ НАЗВАНИЕ:* @subject'
       conn.sIcon = '🥏 *ГРУППОВОЕ ФОТО ИЗМЕНЕНО!!*'
        conn.sRevoke = '🥏 *ОБНОВЛЕННАЯ ССЫЛКА НА ГРУППУ!!*\n*НОВАЯ ССЫЛКА:* @revoke'

conn.handler = handler.handler.bind(global.conn)
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
conn.onDelete = handler.deleteUpdate.bind(global.conn)
conn.onCall = handler.callUpdate.bind(global.conn)
conn.connectionUpdate = connectionUpdate.bind(global.conn)
conn.credsUpdate = saveCreds.bind(global.conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('call', conn.onCall)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
  for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let file = global.__filename(join(pluginFolder, filename))
      const module = await import(file)
      global.plugins[filename] = module.default || module
    } catch (e) {
      conn.logger.error(e)
      delete global.plugins[filename]
    }
  }
}
filesInit().then(_ => console.log(Object.keys(global.plugins))).catch(console.error)

global.reload = async (_ev, filename) => {
  if (pluginFilter(filename)) {
    let dir = global.__filename(join(pluginFolder, filename), true)
    if (filename in global.plugins) {
      if (existsSync(dir)) conn.logger.info(` updated plugin - '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin - '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`new plugin - '${filename}'`)
    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: 'module',
      allowAwaitOutsideFunction: true
    })
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`)
    else try {
      const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
      global.plugins[filename] = module.default || module
    } catch (e) {
      conn.logger.error(`error require plugin '${filename}\n${format(e)}'`)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()
async function _quickTest() {
let test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version'])
].map(p => {
return Promise.race([
new Promise(resolve => {
p.on('close', code => {
resolve(code !== 127)
})}),
new Promise(resolve => {
p.on('error', _ => resolve(false))
})])}))
let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
//let s = global.support = { ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find }
Object.freeze(global.support)
}

function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, 'tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
      const stats = statSync(file)
      if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
      return false })
  }
  
  function purgeSession() {
      
      let prekey = []
      let directorio = readdirSync(authFile)
      let filesFolderPreKeys = directorio.filter((file) => {
          if (file.startsWith('pre-key-')) {
          return true 
          }
          const stats = statSync(path.join(join(__dirname, file)));
          const mtime = new Date(stats.mtime);
        const now = new Date();
        const hourAgo = new Date(now - 60 * 60 * 1000);
        return (
          (file.startsWith('sender-key-') ||
            file.startsWith('sender-key-memory-') ||
            file.startsWith('sender-key-status@broadcast') ||
            file.startsWith('session')) &&
          mtime <= hourAgo
        )
      })
      if (prekey.length === 0) {
        console.log("Файлы не найдены");
      } else {
      prekey = [...prekey, ...filesFolderPreKeys]
      filesFolderPreKeys.forEach(files => {
      unlinkSync(join(__dirname, files))
      console.log(`${files} fueron eliminados`)
  
  })
  }
  }  
  
  function purgeSessionSB() {
    const listaDirectorios = readdirSync(join(__dirname, jadibts));
    console.log(listaDirectorios);
    let SBprekey = [];
  
    listaDirectorios.forEach((filesInDir) => {
      const directorio = readdirSync(join(__dirname, jadibts+filesInDir));
      console.log(directorio);
      const DSBPreKeys = directorio.filter((fileInDir) => {
        if (fileInDir.startsWith('pre-key-')) {
          return true;
        }
        const stats = statSync(path.join(join(__dirname, jadibts+filesInDir+'/'+fileInDir)));
        const mtime = new Date(stats.mtime);
        const now = new Date();
        const hourAgo = new Date(now - 60 * 60 * 1000);
        return (
          (fileInDir.startsWith('sender-key-') ||
            fileInDir.startsWith('sender-key-memory-') ||
            fileInDir.startsWith('sender-key-status@broadcast') ||
            fileInDir.startsWith('session')) &&
          mtime <= hourAgo
        );
      });
      if (DSBPreKeys.length === 0) {
        console.log('Файлы не найдены');
      } else {
        SBprekey = [...SBprekey, ...DSBPreKeys];
        DSBPreKeys.forEach((fileInDir) => {
          unlinkSync(dirP+jadibts+filesInDir+'/'+fileInDir);
          console.log(`${fileInDir} fueron eliminados`);
        });
      }
    });
  }
  
  function purgeOldFiles() {
      const directories = [authFile, jadibts];
      const oneHourAgo = new Date(Date.now() - (60 * 60 * 1000));
     
      directories.forEach((dir) => {
          readdirSync(dir, (err, files) => {
          if (err) throw err;
          files.forEach((file) => {
            const filePath = path.join(dir, file);
            statSync(filePath, (err, stats) => {
              if (err) throw err;
              const createTime = new Date(stats.birthtimeMs);
              const modTime = new Date(stats.mtimeMs);
              const isOld = createTime < oneHourAgo || modTime < oneHourAgo;
              const isCreds = file === 'creds.json';
              if (stats.isFile() && isOld && !isCreds) {
                  unlinkSync(filePath, (err) => {
                  if (err) throw err;
                  console.log(`Записи ${filePath} Успешное удаление`);
                });
              } else {
                console.log(`Файл ${filePath} Не удаляется`);
              }
            });
          });
        });
      });
    }
    purgeOldFiles()

setInterval(async () => {
    backupCreds()
    console.log(chalk.whiteBright(`УСПЕШНАЯ ПОДДЕРЖКА`))
    }, 15 * 60 * 1000)
setInterval(async () => {
    clearTmp()
    console.log(chalk.cyanBright(`АВТООЧИСТКА`))
    }, 1000 * 60 * 3)
setInterval(async () => {
     purgeSession()
    console.log(chalk.yellowBright(`АВТОПРОДУВКИ`))
    }, 1000 * 60 * 60)
setInterval(async () => {
      purgeSessionSB()
     console.log(chalk.yellowBright(`УДАЛЕННЫЕ ФАЙЛЫ`))
    }, 1000 * 60 * 60)
setInterval(async () => {
     purgeOldFiles()
    console.log(chalk.yellowBright(`УДАЛЕННЫЕ ФАЙЛЫ`))
    }, 1000 * 60 * 60)

_quickTest()
.then(() => conn.logger.info(`\n\n З А Г Р У З К А ⚡\n`))
.catch(console.error)
