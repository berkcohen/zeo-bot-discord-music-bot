const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(` > Şu anda çalan müzik yok${message.author}... lütfen tekrar deneyin ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(` > Döngü modunda önce mevcut müziği devre dışı bırakmalısınız. (${client.config.app.px}loop) ${message.author}... lütfen tekrar deneyin  ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? ` > Repeat modu **${queue.repeatMode === 0 ? 'devre dışı' : 'aktif'}** tüm sıra durmadan tekrarlanacak 🔁` : `Bir şeyler yanlış gitti${message.author}... lütfen tekrar deneyin ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Döngü modunda önce mevcut kuyruğu devre dışı bırakmalısınız. (${client.config.app.px}döngü kuyruğu) ${message.author}... lütfen tekrar deneyin ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? ` > Repeat modu **${queue.repeatMode === 0 ? 'devre dışı' : 'aktif'}** o anki müzik durmadan tekrarlanacak z.queue seçeneği ile kuyruğu döngüye alabilirsiniz) 🔂` : `Bir şeyler yanlış gitti${message.author}... lütfen tekrar deneyin ? ❌`);
        };
    },
};