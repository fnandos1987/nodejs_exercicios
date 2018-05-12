const argv = require('yargs').argv

if(argv.number && typeof argv.number === "number"){
    for (var i = 1; i <= 10; i++) {
        console.log(argv.number + " x " + i + " = " + argv.number * i);        
    }
} else{
    console.log("informe um número");
}