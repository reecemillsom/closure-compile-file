const {compile} = require("../../../dist/index.js");

compile('advanced', [{
	src: './scripts/CompilationLevels/Advanced/testAdvancedCompilation.js', output: "bar.js"
}], './test');
