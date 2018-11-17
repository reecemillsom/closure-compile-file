"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompilationStrategy_1 = require("./src/CompilationStrategy/CompilationStrategy");
function compile(compilationLevel, files, outputDestination) {
    var compilationStrategy = new CompilationStrategy_1.default();
    //TODO if this doesn't spit out file relative to users project maybe pass compiled string back and allow them to
    //TODO store in file or something.
    return compilationStrategy.compile(compilationLevel, files, outputDestination);
}
exports.compile = compile;
