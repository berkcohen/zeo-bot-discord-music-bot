module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `> **Şu anda çalan müzik yok... tekrar dener misiniz?** ❌`, ephemeral: true, components: [] });

            int.member.send(`> Parçayı kaydettin ${queue.current.title} | ${queue.current.author} şu sunucudan ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Müziğin adını özel mesaj yolu ile sana gönderdim`, ephemeral: true, components: [] });
            }).catch(error => {
             return int.reply({ content: `> **Size özel mesaj gönderilemiyor... lütfen özel mesajlarının açık olduğunu kontrol eder misin?**  ❌`, ephemeral: true, components: [] });
            });
        }
    }
};