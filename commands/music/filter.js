module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Şu anda çalan müzik yok ${message.author}... lütfen tekrar dener misin ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Lütfen etkinleştirmek veya devre dışı bırakmak için geçerli bir filtre belirtin ${message.author}... try again ? ❌\n${actualFilter ? `Filtre şu anda etkin ${actualFilter} (${client.config.app.px}filter ${actualFilter} devre dışı bırakmak için).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Bu filtre mevcut değil${message.author}... lütfen tekrar dener misin ? ❌\n${actualFilter ? `Filtre şu anda etkin${actualFilter}.\n` : ''}Kullanılabilir filtrelerin listesi ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Filtre ${filter} şimdi **${queue.getFiltersEnabled().includes(filter) ? 'aktif' : 'devre dışı'}** ✅\n*Hatırlatma, müzik ne kadar uzun olursa, o kadar uzun sürer.*`);
    },
};