// demmarer le server http via la module server.js
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// collection de gestionnaires de requêtes
var handle = {};

handle["/"]       = requestHandlers.start;
handle["/start"]  = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
