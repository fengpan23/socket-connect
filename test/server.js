let Connect = require('../index');

let server = Connect.createServer({port: 4567});

let clients = [], id = 1;
server.on('connected', client => {

    client.id = ++id;
    client.on('disconnect', id => {
        console.log('..... disconnect ......', id);
    }).on('data', data => {
        console.log('..... data ......', data);
    });

    client.send({id: 21, event: 'request', data: {data: 121212}});
    clients.push(client);
});