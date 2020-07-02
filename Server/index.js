const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3007;

// app.use(express.static(__dirname + '/../client/'));
app.use('/:productId', express.static(__dirname + '/../client/'));
app.use(cors());

app.use('/photoGallery', createProxyMiddleware({target: 'http://localhost:3003', changeOrigin: true}));
app.use('/checkout', createProxyMiddleware({target: 'http://localhost:4000', changeOrigin: true}));
app.use('/explorethis', createProxyMiddleware({target: 'http://localhost:3141', changeOrigin: true}));

app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)});


