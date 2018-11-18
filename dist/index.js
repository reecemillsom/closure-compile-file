"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompilationStrategy_1 = require("./src/CompilationStrategy/CompilationStrategy");
function compile(compilationLevel, files, outputDestination) {
    var compilationStrategy = new CompilationStrategy_1.default();
    return compilationStrategy.compile(compilationLevel, files, outputDestination);
}
exports.compile = compile;
