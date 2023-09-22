//top of index where u define 

const { DisTube } = require("distube");
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { YtDlpPlugin } = require('@distube/yt-dlp');

//anywehre in index 

//Distube Client

client.distube = new DisTube(client, {
    emitNewSongOnly: false,
    leaveOnFinish: false,
    emitAddSongWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()]
  });
