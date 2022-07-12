const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şu anda çalan müzik yok ${message.author} ... lütfen tekrar dener misin ? ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setDescription(`Ses Seviyesi **${queue.volume}**%\nSüre **${trackDuration}**\nLoop modu **${methods[queue.repeatMode]}**\ntarafından talep edildi${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter('ZeoBot', message.author.avatarURL({ dynamic: true }));

        const saveButton = new MessageButton();

        saveButton.setLabel('Bu parçayı kayıt et');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};