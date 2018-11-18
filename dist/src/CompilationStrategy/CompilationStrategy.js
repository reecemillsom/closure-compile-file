"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClosureCompiler = require('google-closure-compiler').jsCompiler;
var Advanced_1 = require("../CompilationLevels/Advanced/Advanced");
var Simple_1 = require("../CompilationLevels/Simple/Simple");
var Whitespace_1 = require("../CompilationLevels/Whitespace/Whitespace");
var CompilationStrategy = /** @class */ (function () {
    function CompilationStrategy() {
        this.compilationLevels = {
            whitespace: new Whitespace_1.Whitespace(),
            simple: new Simple_1.Simple(new ClosureCompiler({
                compilation_level: "SIMPLE",
            })),
            advanced: new Advanced_1.Advanced()
        };
    }
    CompilationStrategy.prototype.compile = function (compilationLevel, files, outputDestination) {
        return this.compilationLevels[compilationLevel].compile(files, outputDestination);
    };
    return CompilationStrategy;
}());
exports.default = CompilationStrategy;
