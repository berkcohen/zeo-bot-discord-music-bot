module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şu anda çalan müzik yok ${message.author}... tekrar deneyin ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Mevcut müzik ${queue.current.title} atlandı ✅` : `Bir şeyler yanlış gitti ${message.author}... tekrar deneyin ❌`);
    },
};