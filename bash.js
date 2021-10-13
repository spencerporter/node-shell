const cat = require("./cat");
const ls = require("./ls");
const pwd = require("./pwd")
const curl = require("./curl");

process.stdout.write("Prompt>");

const done = (input) => {
    process.stdout.write(input.toString())
    process.stdout.write("\nPrompt> ") 
}

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const cmds = cmd.split(" ");
    console.log(cmds);

    if(cmd === "pwd"){
        pwd(done);
    }else if(cmd === "ls") {
        ls(done);
    }else if(cmds[0] === "cat"){
        cat(cmds[1], done);
    }else if(cmds[0] === "curl"){   
        curl(cmds[1].toString(), done)
    } else {
        process.stdout.write("You typed: " + cmd);
    }
    process.stdout.write("\nPrompt>")
})