const fs = require("fs");
const emotes = JSON.parse(fs.readFileSync('config/json/emotes.json'));

module.exports = {
  generatePlayersLength: async (bot) => {
    const players = await bot.room.players.fetch();
    const playersLength = players.length ? players.length : 0;

    return playersLength;
  },

  getUptime: () => {
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 60 * 60));
    const hours = Math.floor((uptimeSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((uptimeSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    return `⏰ ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
  },
 
  getRandomWelcomeMessage: () => {
    const messages = [
     'komutlar; 1-30 arası emot kullanabilirsiniz, Oyun yazarak bilgi alabilirsiniz, Sponsor yazarak kimler ödüle sponsor olmuş kontrol edebilirsiniz. Tipse gold atmayı unutmayın 🥰🪙',
    ] 
    return messages[Math.floor(Math.random() * messages.length)];
  }
}