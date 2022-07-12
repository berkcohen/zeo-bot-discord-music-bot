module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şu anda çalan müzik yok ${message.author}... tekrar deneyin ❌`);

        queue.destroy();

        message.channel.send(`Bu sunucuda müzik durduruldu, bir dahaki sefere görüşürüz ✅`);
    },
};