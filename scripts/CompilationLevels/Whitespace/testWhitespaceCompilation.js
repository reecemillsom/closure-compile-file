const {compile} = require("../../../dist/index.js");

compile('whitespace', [{
	src: './scripts/CompilationLevels/Whitespace/Whitespace.js', output: "baz1.js"
}], './whitespaceTest');

