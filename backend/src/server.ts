import express from 'express';
const app = express();

app.get('/teste', (req, res) => {
  return res.json({ msg: 'mano' });
});

app.listen(3333, () => console.log('Server listenning on localhost:3333'));
