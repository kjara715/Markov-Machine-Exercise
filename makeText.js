/** Command-line tool to generate Markov text. */


const fs= require('fs');
const axios=require('axios');
const process = require('process');
const { MarkovMachine }=require('./markov');
const argv = process.argv;

// const text = fs.readFileSync('eggs.txt','utf8')

// // const fail=fs.readFileSync("fail.txt", 'utf8')
// // console.log(fail)

// let mmm= new MarkovMachine(text)
// mmm.makeText(numWords=10)


// const argv = process.argv;
// console.log(argv)

if(argv.length >=2){
    if(argv[2] === "file"){
        console.log("file")
        console.log(`...generated text from ${argv[3]}:`)
        try{
            let file = fs.readFileSync(argv[3], 'utf8')
            let mmm= new MarkovMachine(file)
            mmm.makeText()

        } catch (e) {
            console.log("Error with file input:", e)
        }
        

    
    } else if(argv[2] ==="url") {
        console.log("url")
        console.log(`...generated text from ${argv[3]}:`)
        try{
            let file = fs.readFileSync(argv[3], 'utf8')
            let mmm= new MarkovMachine(file)
            mmm.makeText()
        } catch (e) {
            console.log("Error with file input:", e)
        }
    }

}

// let eggs=readMe('eggs.txt')
// console.log(eggs)
// let mmm= new MarkovMachine(eggs)
// mmm.makeText(numWords=25)
