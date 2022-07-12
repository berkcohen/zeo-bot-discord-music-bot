module.exports = {
    app: {
        px: '?',
        token: 'OTQ1NzYxMTU2OTA2MjQyMDYx.G0teY-.AnM7Rh7NYwmo9v2QU7APVFRA7ngyKPFNqy3glE',
        playing: '?help'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
