const {compile} = require("../../../dist/index.js");

compile('simple', [{
	src: './scripts/CompilationLevels/Simple/Simple.js', outputFile: "foo1.js"
}, {
	src: './scripts/CompilationLevels/Simple/Simple2.js', outputFile: "foo2.js"
}, {
	src: './scripts/CompilationLevels/Simple/Simple3.js', outputFile: "foo3.js"
}], './simpleTest');

