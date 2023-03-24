const httpProxy = require("http-proxy");

const target = "http://3.6.211.9:5100"
 
const proxy = httpProxy.createProxyServer({
    target: target,
})

proxy.on("error", (err, req, res) => {
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end("Something went wrong, And we are reporting a custom error message.")
})

const port = 3000;

proxy.listen(port, () => {
    console.log(`Proxy server is running on port ${port}........`);
});
