/** Command-line tool to generate Markov text. */


const fs= require('fs');
const axios=require('axios');
const process = require('process');


function readMe(file){
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) {
      // handle possible error
      console.error(err);
      // kill the process and tell the shell it errored
      process.exit(1);
    }
    // otherwise success
    console.log(`file contents: ${data}`);
    return data
  });
}

async function webCat(url) {
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
    } catch (err) {
      console.error(`Error fetching ${url}: ${err}`);
      process.exit(1);
    }
  }

// // // let mm = new MarkovMachine( "the cat in the hat is in the hat")

const argv = process.argv;
console.log(argv)
// let eggs=readMe('eggs.txt')
// console.log(eggs)
// let mmm= new MarkovMachine(eggs)
// mmm.makeText(numWords=25)
