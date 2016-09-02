// recup des modules de node.js
var http = require("http");
var url  = require("url");


function start(route, handle){
  // function en réponse à une requete au serveur http
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Requête reçue pour le chemin " + pathname + ".");
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Paquet POST reçu '" + postDataChunk + "'.");
    });
    request.addListener("end", function(){
      route(handle, pathname, response, postData);
    });

  }

  // creation du serveur http
  http.createServer(onRequest).listen(8888);
  console.log("Démarrage du serveur.");

  }

exports.start = start;
