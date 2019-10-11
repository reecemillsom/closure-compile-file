const {compile} = require("../../../dist/index.js");

compile('simple', [{
	src: './scripts/CompilationLevels/Simple/Simple.js', output: "foo1.js"
}, {
	src: './scripts/CompilationLevels/Simple/Simple2.js', output: "foo2.js"
}, {
	src: './scripts/CompilationLevels/Simple/Simple3.js', output: "foo3.js"
}], './simpleTest');

