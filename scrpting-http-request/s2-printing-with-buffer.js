var https = require('https');


function getAndPrintHTML(){

var requestOptions = {
  host : 'sytantris.github.io',
  path : '/http-examples/step2.html'
};

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

getAndPrintHTML();