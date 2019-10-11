const {compile} = require("../../../dist/index.js");

compile('advanced', [{
	src: './scripts/CompilationLevels/Advanced/Advanced.js', output: "bar.js"
}], './advancedTest');
