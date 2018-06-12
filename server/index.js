const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({
        extended: true,
    }));
    
    server.get('/', (req, res) => res.redirect('/talktalk'));
    server.get('*', (req, res) => handle(req, res));
    
    server.listen(port, (err) => {
        if (err) {
            throw err;
        }
        
        console.log(`> Ready on http://localhost:${port}`);
    });
});