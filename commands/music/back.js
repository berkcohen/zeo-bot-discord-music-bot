module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şuanda çalmış olduğum bir müzik yok ${message.author}... lütfen tekrar dener misin ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Daha önce hiç müzik çalınmamıştı. ${message.author}... lütfen tekrar dener misin ? ❌`);

        await queue.back();

        message.channel.send(`Önceki parçayı çal ✅`);
    },
};