player.on('error', (queue, error) => {
    console.log(`Kuyruktan yayılan hata ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Bağlantıdan kaynaklanan hata ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Oynatma başlatıldı ${track.title} bu kanalda oynatıldı **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Track ${track.title} sıraya eklendi ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Ses kanalıyla bağlantım manuel olarak kesildi, sıra temizleniyor... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Ses kanalında kimse yok, ses kanalından çıkıyor... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Tüm kuyruğu çaldım, benden başka bir istediğin var ise lütfen z.play komutunu kullan!  ✅');
});