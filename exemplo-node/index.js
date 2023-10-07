const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor Node.js rodando na porta 3000!\n');
});

server.listen(process.env.PORT, () => {
  console.log('Servidor está ouvindo na porta 3000');
});
