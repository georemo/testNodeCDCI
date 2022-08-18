const port = 3001
const host = '0.0.0.0'
const {
    constants
} = require('buffer');
const http = require('http');
const qs = require('querystring')
const calculator = require('./calculator')
let html = '';
const server = http.createServer(function (request, response) {
    if(request.param){
        console.log(`RequiestParams: ${request.param}`)
    }
    if (request.method == 'POST') {
        console.log('POST')
        var body = ''
        request.on('data', function (data) {
            body += data
        })

        request.on('end', function () {
            const post = qs.parse(body)
            const numbers = post.numbers
            const result = calculator.add(numbers)
            html = buildHtml(result)
            response.writeHead(200, {
                'Content-Length': html.length,
                'Expires': new Date().toUTCString()
            })
            response.end(html)
        })
    } else {
        html = buildHtml();
        response.writeHead(200, {
            'Content-Length': html.length,
            'Expires': new Date().toUTCString()
        });
        response.end(html)
    }
})

server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)

function buildHtml(result=null) {
    return `
    <html>
        <body>
            <form method="post" action="http://localhost:3001">Numbers: 
                <input type="text" name="numbers" />
                <input type="submit" value="Add" />
            </form>
            <p>Result:${result}</p>
        </body>
    </html>`;
};