module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Şu anda çalan müzik yok ${message.author}... tekrar dener misin ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Mevcut müzik${queue.current.title} duraklatıldı ✅` : `Bir şeyler yanlış gitti${message.author}... tekrar dener misin ? ❌`);
    },
};