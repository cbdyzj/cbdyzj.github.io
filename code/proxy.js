const http = require('http')
const httpProxy = require('http-proxy')

// 新建http代理
const proxy = httpProxy.createProxyServer({ changeOrigin: true })

// 配置网关
const gateway = (req, res) => proxy.web(req, res, { target: 'http://jianzhao.org/' })

// 启动http服务
if (require.main === module) {
    http.createServer(gateway).listen(8000)
}