const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const fs = require("fs");

// fs.readFile("./test.txt", (error, data) => {
//   fs.mkdir("./files", () => {
//     fs.writeFile("./files/test2.txt", `${data} New text!`, (error) => {
//       error ? console.log(error) : null;
//     });
//   });
// });

// setTimeout(() => {
//   fs.unlink("./files/test2.txt", () => {});
// }, 4000);

// setTimeout(() => {
//   fs.rmdir("./files", () => {});
// }, 6000);
