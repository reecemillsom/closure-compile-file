const {compile} = require("../../../dist/index.js");

compile('advanced', [{
	src: './scripts/CompilationLevels/Simple/testSimpleCompilation.js', output: "foo.js"
}], './test');
