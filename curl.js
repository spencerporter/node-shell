const request = require("request");

function curl(website, done) {
    console.log("Website:", website)
    request('http://www.google.com', function (error, response, body) {
        if(error){
            throw error;
            done("Something went wrong!")
        } else {
            done(body.toString());
        }
    });
} 

module.exports = curl;