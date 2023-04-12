const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  const proxyUrl = req.headers["x-proxy-url"];

  if (!proxyUrl) {
    proxyUrl = "http://3.6.211.9:5100";
  }
  proxy.web(req, res, { target: proxyUrl });
});

server.listen(8080, () => {
  console.log("Proxy server listening on port 8080");
});
