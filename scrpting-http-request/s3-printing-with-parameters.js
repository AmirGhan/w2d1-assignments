var https = require('https');

var abc = {
  host : 'sytantris.github.io',
  path : '/http-examples/step3.html'
};

function getAndPrintHTML(requestOptions){

var emptyString = ""

https.get(requestOptions,function(response){
  response.setEncoding('utf8');

  response.on('data', function(data){
    emptyString += data
  });

  response.on('end', function(data){
    console.log(emptyString)
  });
});
};

getAndPrintHTML(abc);