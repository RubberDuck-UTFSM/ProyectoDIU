
const fastify = require("fastify")({ logger: true });
const path = require('path');
const mongoose = require('./database.js');

const jwt = require('fastify-jwt');

// React App
const DistPath = path.join(__dirname, '..', 'proyectoprogramacion', 'dist');
fastify.register(require('fastify-static'), {
  root: DistPath,
});

fastify.get('/', (req, reply) => {
	reply.sendFile('index.html');
});

fastify.register(require('./routes.js', {})); 

// Inicializar Fastify
const start = async () => {
	try {
		// Iniciar servidor
		await fastify.listen(3002, '0.0.0.0');
		fastify.log.info(
			`server listening on ${fastify.server.address().port}`
		);

	/*	fastify.register(jwt, {
			secret: nconf.get('secrets.jwt')
		});*/
		
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();