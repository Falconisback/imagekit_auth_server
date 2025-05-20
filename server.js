const express = require('express');
const ImageKit = require('imagekit');
const cors = require('cors');

const app = express();
app.use(cors());

const imagekit = new ImageKit({
  publicKey: 'public_t2qqOlqlNqxw4TRySFejKbW0CKU=',
  privateKey: 'private_NkLLtzK54af/OzzfMd6/fczSbHY=',
  urlEndpoint: 'https://ik.imagekit.io/ksyvleqav',
});

app.get('/auth', (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('✅ ImageKit auth server running on port ${PORT}');
});
