const http = require('http')
const port = process.env.PORT || 4000
const app = require('./index')
const server = http.createServer(app)

server.listen(port, () => console.log('server started in port '+ port))