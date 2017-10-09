var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

 var emptyString = "";

https.get(options,function(response){
  response.setEncoding('utf8');

  response.on('data', function(data){
    emptyString += data;
  });

  response.on('end', function(data){
    callback(emptyString);
  });
});

};

function printHTML (html) {
  console.log(html);
};

getHTML(requestOptions, printHTML);