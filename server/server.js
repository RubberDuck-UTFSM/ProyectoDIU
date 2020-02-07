
const fastify = require("fastify")({ logger: true });
const path = require('path')

// React App
const DistPath = path.join(__dirname, '..', 'proyectoprogramacion', 'dist');
fastify.register(require('fastify-static'), {
  root: DistPath,
});

// Fastify Initialization
const start = async () => {
	try {
		// Server Start
		await fastify.listen(3001, '0.0.0.0');
		fastify.log.info(
			`server listening on ${fastify.server.address().port}`
		);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();