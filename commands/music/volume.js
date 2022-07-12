const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(` > Şuanda çalan bir müzik yok ${message.author}... tekrar dener misin ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(` > Mevcut ses seviyesi ${queue.volume} 🔊\n*Sesi değiştirmek için lütfen 1 ila **${maxVol}**.* arasında bir sayı belirleyin.`);

        if (queue.volume === vol) return message.channel.send(` > Değiştirmek istediğiniz ses düzeyi zaten geçerli olan ses düzeyidir ${message.author}... tekrar deneyin ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(` > Belirtilen numara geçerli değil. arasında bir sayı girin; **1** ve ya **${maxVol}** ${message.author}... tekrar deneyin ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? ` > Ses seviyesi değiştirildi **${vol}**/**${maxVol}**% 🔊` : `Bir şeyler yanlış gitti ${message.author}... tekrar deneyin ❌`);
    },
};