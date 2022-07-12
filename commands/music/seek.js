const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şu anda çalan müzik yok ${message.author}... tekrar dener misin ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Belirtilen süre, mevcut şarkının toplam süresinden daha yüksek ${message.author}... tekrar dener misin ? ❌\n*Örneğin, geçerli bir zaman deneyin**5s, 10s, 20 saniye, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Geçerli şarkıda ayarlanan süre** ${ms(timeToMS, { long: true })}** ✅`);
    },
};