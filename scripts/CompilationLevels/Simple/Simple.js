const {compile} = require("../../../dist/index.js");

console.log('compile>', compile);

//TODO check this is right.
compile('simple', [{src: './testSimpleCompilation.js'}], '../dist.js');
