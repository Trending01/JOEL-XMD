/*                                   
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████──────────██████████████──████████████████────████████████────────────────────────────██████──██████████████──██████████████──██████─────────
─██░░██──────────██░░░░░░░░░░██──██░░░░░░░░░░░░██────██░░░░░░░░████──────────────────────────██░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██─────────
─██░░██──────────██░░██████░░██──██░░████████░░██────██░░████░░░░██──────────────────────────██░░██──██░░██████░░██──██░░██████████──██░░██─────────
─██░░██──────────██░░██──██░░██──██░░██────██░░██────██░░██──██░░██──────────────────────────██░░██──██░░██──██░░██──██░░██──────────██░░██─────────
─██░░██──────────██░░██──██░░██──██░░████████░░██────██░░██──██░░██──██████████████──────────██░░██──██░░██──██░░██──██░░██████████──██░░██─────────
─██░░██──────────██░░██──██░░██──██░░░░░░░░░░░░██────██░░██──██░░██──██░░░░░░░░░░██──────────██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░██─────────
─██░░██──────────██░░██──██░░██──██░░██████░░████────██░░██──██░░██──██████████████──██████──██░░██──██░░██──██░░██──██░░██████████──██░░██─────────
─██░░██──────────██░░██──██░░██──██░░██──██░░██──────██░░██──██░░██──────────────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██─────────
─██░░██████████──██░░██████░░██──██░░██──██░░██████──██░░████░░░░██──────────────────██░░██████░░██──██░░██████░░██──██░░██████████──██░░██████████─
─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██░░░░░░██──██░░░░░░░░████──────────────────██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██─
─██████████████──██████████████──██████──██████████──████████████────────────────────██████████████──██████████████──██████████████──██████████████─
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
made by lord joel
contact owner +255714595078
dont waste ur time to empress me
*/












const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "run",
    react: "ᰔ",
    alias: ["m","b"],
    desc: "menu the bot",
    category: "main"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let desc = `ʜᴇʟʟᴏ ${pushname} ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ
╭───────────────━⊷
║ ᴊᴏᴇʟ-xᴍᴅ ᴍᴀɪɴ  ᴍᴇɴᴜ
╰───────────────━⊷
╭───────────────━⊷
║ *ɴᴀᴍᴇ:* ᴊᴏᴇʟ-xᴍᴅ
║ *ᴏᴡɴᴇʀ:* ${OWNER_NAME}
║ *ᴘʀᴇғɪx:*   ${PREFIXE}
║ *ᴘʟᴜɢɪɴ*  420
║ *sᴛᴀᴛᴜs:* ᴏɴʟɪɴᴇ
║ *ᴘʟᴀᴛɪғᴏʀᴍ:* ʜᴇʀᴏᴋᴜ
║ *ʟɪʙʀᴀʀʏ:* ʙᴀɪʟᴡᴀʏs
║ *ᴛʜᴇᴍᴇ:* ʟᴏʀᴅ ᴊᴏᴇʟ
╰───────────────━⊷
╭───────────────━⊷
║ sᴛᴀʀ ᴛʜᴇɴ ғᴏʀᴋ ᴍʏ ʀᴇᴘᴏ
║ ʀᴇᴘᴏ:https://shorturl.at/MV98C
╰───────────────━⊷
 *ʜᴇʟʟᴏ  ${pushname}  ᴛʏᴘᴇ  ⊏ ${PREFIXE} ᴀʟʟᴍᴇɴᴜ ⊐   ᴛᴏ ᴀᴄsᴇss ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs*`;

const vv = await conn.sendMessage(from, { 
  image: { url: config.ALIVE_IMG }, 
  caption: desc, 
  contextInfo: {
    mentionedJid: [''], 
    groupMentions: [],
    forwardingScore: 999, // برای فوروارد شدن
    isForwarded: true, // پیام به صورت فوروارد شده نشان داده می‌شود
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036329902932622@newsletter', 
      newsletterName: "ʟᴏʀᴅ ᴊᴏᴇʟ", 
      serverMessageId: 999
    },
    externalAdReply: { 
      title: 'ʟᴏʀᴅ ᴊᴏᴇʟ', 
      body: `${pushname}`, 
      mediaType: 1, 
      sourceUrl: "https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K", 
      thumbnailUrl: "https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K" ,
      previewType: 'PHOTO',
      renderLargerThumbnail: true,
      showAdAttribution: true
    }
  }
}, { quoted: mek });
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let owner = `
*OWNER-CMD*
*╭┈───────────────•*
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.sᴇᴛᴛɪɴɢs*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner }, { quoted: mek });                     
                        break;
                    case '2':               
                        let owner1 = `
*DOWNLOADER-CMD*                        
*╭┈───────────────•*
*┋* *.ғʙ*
*┋* *.ɪɴꜱᴛᴀ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ɢᴅʀɪᴠᴇ*
*┋* *.ᴛᴡɪᴛᴛᴇʀ*
*┋* *.ᴛᴛ*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *.ꜱᴏɴɢ*
*┋* *.ᴘʟᴀʏ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ᴠɪᴅᴇᴏ2*
*┋* *.ɪᴍɢ*
*┋* *.ᴀᴘᴋ*
*┋* *.ᴅᴀʀᴀᴍᴀ*
*┋* *.ᴘʟᴀʏ2*
*┋* *.ʙᴀɪsᴄᴏᴘᴇ*
*┋* *.ɢɪɴɪsɪsɪʟᴀ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
                        
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner1 }, { quoted: mek });                     
                        break;
                    case '3':               
                        let owner2 = `
*GROUP-CMD*
*╭┈───────────────•*
*┋* *.ʀᴇᴍᴏᴠᴇ*
*┋* *.ᴅᴇʟᴇᴛᴇ*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.ᴋɪᴄᴋᴀʟʟ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner2 }, { quoted: mek });                     
                        break;
                    case '4':               
                        let owner3 = `
*INFO-CMD*
*╭┈───────────────•*
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner3 }, { quoted: mek });                     
                        break;
                    case '5':               
                        let owner4 = `
*RANDOM-CMD*
*╭┈───────────────•*
*┋* *.ᴋɪɴɢ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;

await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner4 }, { quoted: mek });                     
                        break;
                    case '6':               
                        let owner5 = `
*CONVERTER-CMD*
*╭┈───────────────•*
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛʀᴛ <ᴛᴇxᴛ>*
*┋* *.ᴛᴛs <ᴛᴇxᴛ>*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner5 }, { quoted: mek });                     
                        break;
                    case '7':               
                        let owner6 = `
*AI-CMD *
*╭┈───────────────•*
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┋* *.ʙᴏᴛ <ᴛᴇxᴛ>*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner6 }, { quoted: mek });                     
                        break;
                    case '8':               
                        let owner7 = `
*WALLPAPERS-CMD*
*╭┈───────────────•*
*┋* *.ɪᴍɢ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner7 }, { quoted: mek });                     
                        break;
                    case '9':               
                        let owner8 = `
*OTHER-CMD*
*╭┈───────────────•*
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*╰┈───────────────•*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner8 }, { quoted: mek });                     
                        break;
                    default:
                        reply("*ʀᴇᴘᴏʀᴛ ᴀɴʏ ᴇʀʀᴏʀ ᴛᴏ ᴍʏ ᴏᴡɴᴇʀ wa.me 255714595078*");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
})
