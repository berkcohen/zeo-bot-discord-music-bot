module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şu anda çalan müzik yok ${message.author}... tekrar deneyin❌`);

        if (!queue.tracks[0]) return message.channel.send(`Geçerli olandan sonra sırada müzik yok ${message.author}... tekrar deneyin ❌`);

        await queue.shuffle();

        return message.channel.send(`Sıra karıştılırdı **${queue.tracks.length}** şarkı(lar) ! ✅`);
    },
};