let Connect = require('../');
let con = new Connect();
con.createServer({port: 3000}, function (port) {
    console.log('server start on port: ', port);
});

let clients = [], id = 1;
con.on('connected', client => {
    client.id = ++id;
    client.on('disconnect', id => {
        console.log('..... disconnect ......', id);
    }).on('data', data => {
        console.log('..... data ......', data);
    });

    client.send({id: 21, event: 'request', data: {data: 121212}});
    clients.push(client);
});