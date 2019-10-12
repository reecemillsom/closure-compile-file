const {compile} = require("../../../dist/index.js");

compile('whitespace', [{
	src: './scripts/CompilationLevels/Whitespace/Whitespace.js', outputFile: "baz1.js"
}], './whitespaceTest');

