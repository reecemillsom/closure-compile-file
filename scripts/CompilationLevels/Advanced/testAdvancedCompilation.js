const {compile} = require("../../../dist/index.js");

compile('advanced', [{
	src: './scripts/CompilationLevels/Advanced/Advanced.js', outputFile: "bar.js"
}], './advancedTest');
