const sentence = "hello there from lighthouse labs";

// set delay as a variable 
let x = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, x);
  // add 50ms to each each pass to simulae delay
  x += 50;
}

x += sentence.length - 1 * 50;

setTimeout(() => {
  console.log()
}, x)