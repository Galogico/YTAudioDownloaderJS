const express = require('express');
const ytdl = require('ytdl-core');
const app = express();

app.get('/', function (req, res) {
  const { url } = req.query;

  res.header('Content-Disposition', 'attachment; filename="saas.mp3"')
  const download = ytdl(url, { quality: 'highestaudio' }).pipe(res);
});

app.listen(3000)