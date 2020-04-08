const path = require("path");

module.exports = async function(fastify, opts) {
	fastify.get("/", async function(request, reply) {
		reply.sendFile("front.html");
		return reply;
	});

	fastify.get("/panel/*", async function(request, reply) {
		reply.sendFile("panel.html");
		return reply;
	});
};
