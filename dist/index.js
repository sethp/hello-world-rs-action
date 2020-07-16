const mylib = require("./mylib.js");

try {
  mylib.main();
} catch (e) {
  // panics abort with `RuntimeError: unreachable`
  if (e.message != 'unreachable') {
    console.log(e);
  }
}
