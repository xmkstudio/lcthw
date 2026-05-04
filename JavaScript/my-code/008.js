/* 008.js
 * 08: Command Line Arguments
 */

let name = process.argv[2];
let age = process.argv[3];
let eyes = process.argv[4];

console.log(`
  Your name is ${name},
  your age is ${age},
  and your eyes are ${eyes}.`);
