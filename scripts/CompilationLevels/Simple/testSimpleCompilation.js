const {compile} = require("../../../dist/index.js");

compile('simple', [{
	src: './scripts/Compilation/Simple/Simple.js', output: "foo1.js"
}, {
	src: './scripts/Compilation/Simple/Simple2.js', output: "foo2.js"
}, {
	src: './scripts/Compilation/Simple/Simple3.js', output: "foo3.js"
}], './simpleTest');

