/*
 * console.log("You are writing text to your screen.")
 * console.log("This is called 'standard output'.")
 * console.log("This stuff in the () is a string.")
 * console.log("Start a string with a double quote.")
 * console.log("Write what you want.")
 * console.log("Then end with a double quote.")
 */

const myLog = (toPrint) => {
  console.log(toPrint);
};

module.exports = {
  myLog: myLog,
};

/*
 * myLog("You are writing text to your screen.");
 * myLog("This is called 'standard output'.");
 * myLog("This stuff in the () is a string.");
 * myLog("Start a string with a double quote.");
 * myLog("Write what you want.");
 * myLog("Then end with a double quote.");
 */
