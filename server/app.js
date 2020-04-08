const nconf = require("nconf");
const server = require("./server");
const appSettingsPath = "./config.json";

nconf.file({
	file: "./config.json",
	logicalSeparator: "."
});

const serverOptions = {
	logSeverity: nconf.get("logSeverity")
};

server.createServer(serverOptions);
