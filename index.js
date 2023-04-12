const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  const proxyUrl = req.headers['x-proxy-url'];

  if (proxyUrl) {
    proxy.web(req, res, { target: proxyUrl });
  } else {
    res.statusCode = 400;
    res.end('No X-Proxy-Url header specified');
  }
});

server.listen(8080, () => {
  console.log('Proxy server listening on port 8080');
});
