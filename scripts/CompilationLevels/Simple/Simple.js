const {compile} = require("../../../dist/index.js");

//TODO check this is right.
//TODO the src path is relative to the route.
//TODO compilation level, src is file and output is the compiled file code, output destination is directory.
compile('simple', [{
	src: './scripts/CompilationLevels/Simple/testSimpleCompilation.js', output: "foo.js"
}, {
	src: './scripts/CompilationLevels/Simple/testSimpleCompilation.js',
	output: 'foo.js'
}], './test');
