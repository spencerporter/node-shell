const fs = require("fs");

function cat(file, done){
    fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            throw err;
            done("Something Went Wrong!")
        } else {
            done(data);
        }
    })
}

module.exports = cat;