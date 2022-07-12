module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(` > Şu anda çalan müzik yok ${message.author}... tekrar deneyin ❌`);

        message.author.send(` > Parçayı kaydettin ${queue.current.title} | ${queue.current.author} sunucu; ${message.guild.name} ✅`).then(() => {
            message.channel.send(` > Müziğin adını özel mesajla gönderdim ✅`);
        }).catch(error => {
            message.channel.send(` > Size özel mesaj gönderilemiyor ${message.author}... tekrar deneyin ❌`);
        });
    },
};