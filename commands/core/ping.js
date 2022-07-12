const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`> Hesaplanan en son değer ping değerlerim!  ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} önce **${client.ws.ping}ms** 🛰️`);
    },
};