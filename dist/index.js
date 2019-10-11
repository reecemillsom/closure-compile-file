"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompilationStrategy_1 = require("./src/CompilationStrategy/CompilationStrategy");
var CompilationLevel;
(function (CompilationLevel) {
    CompilationLevel["Simple"] = "simple";
    CompilationLevel["Whitespace"] = "whitespace";
    CompilationLevel["Advanced"] = "advanced";
})(CompilationLevel = exports.CompilationLevel || (exports.CompilationLevel = {}));
function compile(compilationLevel, files, outputDestination) {
    var compilationStrategy = new CompilationStrategy_1.default();
    return compilationStrategy.compile(compilationLevel, files, outputDestination);
}
exports.compile = compile;
