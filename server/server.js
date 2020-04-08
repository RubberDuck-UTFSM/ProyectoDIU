const Fastify = require("fastify");
const path = require("path");
const AutoLoad = require("fastify-autoload");
const nconf = require("nconf");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const jwt = require("fastify-jwt");
const objection = require("fastify-objectionjs");

const User = require('./models/User');
const Curso = require('./models/Curso');
const Seccion = require('./models/Seccion');
const Subseccion = require('./models/Subseccion');

const createRequestId = () => uuidv4();

const createServer = options => {
    const { logSeverity } = options;

    const server = Fastify({
        ignoreTrailingSlash: true,
        genReqId: createRequestId,
        logger: {
            level: logSeverity
        }
    });

    server.register(jwt, {
        secret: nconf.get("secrets.jwt")
    });

    server.register(objection, {
        knexConfig: {
            client: "mysql",
            connection: {
                port: nconf.get("db.mysql.port"),
                host: nconf.get("db.mysql.host"),
                user: nconf.get("db.mysql.user"),
                password: nconf.get("db.mysql.password"),
                database: nconf.get("db.mysql.database"),
                timezone: nconf.get("db.mysql.offset"),
            }
        },
        models: [User, Curso, Seccion, Subseccion]
    });

    server.register(AutoLoad, {
        dir: path.join(__dirname, "routes")
    });

    server.register(require("fastify-static"), {
        root: path.join(__dirname, "..", "dist"),
    });

    server.listen(9000, err => {
        if (err) {
            server.log.error(err);
            console.log(err);
            process.exit(1);
        }
        server.log.info("Server Started");
    });
};

module.exports = { createServer };
