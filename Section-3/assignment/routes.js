
const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;

    if(url === '/')
        {
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>first Page</title></head>');
            res.write('<body>');
            res.write('<h1>Hello to User Server!</h1>');
            res.write('<form action="/create-user" method="POST">');
            res.write('<input type="text" name="create-user">')
            res.write('<button type="submit" value="Submit">Press user</button>')
            res.write('</form>')
            res.write('</body>');
            res.write('</html>');
            return res.end(); 
        }
        if(url === '/create-user' && method === 'POST')
        {
            const body = [];
            req.on('data', (chunk)=>{
                    console.log(chunk);
                    body.push(chunk);
            });
            req.on('end', ()=>{
                    const parsedBody = Buffer.concat(body).toString();
                    console.log(parsedBody);
                    const message = parsedBody.split('=')[1];
                    console.log('User : ' , message);
                    res.statusCode = 302;
                    res.setHeader('Location','/users');
                    return res.end();
            });
            return;
        }
        if(url === '/users')
        {
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<head><title>Users Page</title></head>');
            res.write('<body><ul><li>User 1</li></ul></body>')
            res.write('</html>');
            res.end();
        }
}


module.exports.handler = requestHandler;
module.exports.text = "Request Handler runnning";