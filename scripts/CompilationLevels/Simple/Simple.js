const {compile} = require("../../../dist/index.js");

compile('simple', [{
	src: './scripts/CompilationLevels/Simple/testSimpleCompilation.js', output: "foo.js"
}], './test');
