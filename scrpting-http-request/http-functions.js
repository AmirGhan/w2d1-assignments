var https = require('https');

module.exports = function getHTML (options, callback) {
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