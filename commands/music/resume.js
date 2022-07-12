module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Şu anda çalan müzik yok ${message.author}... tekrar dener misin ? ❌`);

        const success = queue.setPaused(false);return message.channel.send(success ? `Mevcut müzik ${queue.current.title} devam ettirildi ✅` : `Bir şeyler yanlış gitti ${message.author}... tekrar dener misin ? ❌`);
    },
};