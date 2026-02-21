const fs = require('fs');

const requestHandler = (req, res) => { //request, response
    const url = req.url;
    const method = req.method;

    if(url === '/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Hello from the server</h1><br><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Press Me</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        return;
    };

    if(url === '/user')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><ul><li>User 1</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
}

module.exports.handler = requestHandler;
module.exports.text = 'Some Hardcoded test';