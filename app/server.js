const webSocket = require('ws')

const server = new webSocket.Server( {port: 3001 })

server.on('connection', ws => {

    ws.send('Connected to the server!')
    ws.on('message', message => {
        if (message === 'exit') ws.close()

        server.clients.forEach(client => {
            client.send(message)
        })
    })
})