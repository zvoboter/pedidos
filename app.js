var server = require('./server');

// Inicia a api na porta passada por parametro
server.listen(process.env.PORT || 3003);