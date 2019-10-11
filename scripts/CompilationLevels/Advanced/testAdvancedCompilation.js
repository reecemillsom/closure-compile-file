const {compile} = require("../../../dist/index.js");

compile('advanced', [{
	src: './scripts/Compilation/Advanced/Advanced.js', output: "bar.js"
}], './advancedTest');
