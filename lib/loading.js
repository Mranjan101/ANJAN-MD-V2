export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "𝞓𝞜𝙅𝞓𝞜-𝞛𝘿-𝝯𝟮ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "𝐚𝐧𝐣𝐚𝐧 ʜᴀs ʟᴏᴀᴅᴇᴅ ᴄᴏᴍᴘʟᴇᴛʟʏ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
