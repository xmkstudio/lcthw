/* 010.js
 * 10: Files, Args, and Variables
 */

const fs = require("fs");
const readline = require("readline-sync");

let file_to_open = process.argv[2];
let file_add = fs.writeFileSync(
  file_to_open,
  readline.question("Please input some text to write to the file: "),
);
// let file_content_add = readline.question("Please input some text to write to file: ");
let file_contents = fs.readFileSync(file_to_open);

console.log(`The file named ${file_to_open} contains:`);
console.log(file_contents.toString());
