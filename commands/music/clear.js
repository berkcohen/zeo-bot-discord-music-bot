module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şuanda müzik çalmıyor ${message.author}... lütfen tekrar dener misin? ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Sırada geçerli bir müzik yok ${message.author}... lütfen tekrar dener misin ? ❌`);

        await queue.clear();

        message.channel.send(`Kuyruk daha yeni temizlendi 🗑️`);
    },
};