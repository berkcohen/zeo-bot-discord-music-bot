module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şu anda çalan müzik yok${message.author}... tekrar dener misin ? ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Sonsuzluk') return message.channel.send(`Canlı oynatılıyor, görüntülenecek veri yok 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};