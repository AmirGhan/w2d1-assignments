var https = require('https');

var requestOptions = {
  host : 'sytantris.github.io',
  path : '/http-examples/step3.html'
};

function getAndPrintHTML(options){

var emptyString = ""

https.get(options,function(response){
  response.setEncoding('utf8');

  response.on('data', function(data){
    emptyString += data
  });

  response.on('end', function(data){
    console.log(emptyString)
  });
});
};

getAndPrintHTML(requestOptions);