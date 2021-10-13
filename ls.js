const fs = require("fs");

function ls(done){
    fs.readdir(`./`, 'utf8', (err, files) => {
        if(err){
            throw err;
            done("Something Went Wrong!")
        } else {
            done(files.join('\n'))
        }
    })
}

module.exports = ls;