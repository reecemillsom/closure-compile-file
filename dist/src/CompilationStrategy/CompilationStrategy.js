"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClosureCompiler = require('google-closure-compiler').jsCompiler;
var Compilation_1 = require("../Compilation/Compilation");
var FsStreamService_1 = require("../FsStreamService/FsStreamService");
var CompilationStrategy = /** @class */ (function () {
    function CompilationStrategy() {
        var _this = this;
        this.compilationLevels = {
            simple: function (files, outputDirectory, streamService) {
                return _this.simple(files, outputDirectory, new ClosureCompiler({
                    compilation_level: "SIMPLE_OPTIMIZATIONS"
                }), streamService);
            },
            advanced: function (files, outputDirectory, streamService) {
                return _this.advanced(files, outputDirectory, new ClosureCompiler({
                    compilation_level: "ADVANCED_OPTIMIZATIONS"
                }), streamService);
            },
            whitespace: function (files, outputDirectory, streamService) {
                return _this.whitespace(files, outputDirectory, new ClosureCompiler({
                    compilation_level: "WHITESPACE_ONLY"
                }), streamService);
            }
        };
    }
    CompilationStrategy.prototype.compile = function (compilationLevel, files, outputDirectory) {
        return this.compilationLevels[compilationLevel](files, outputDirectory, FsStreamService_1.default);
    };
    CompilationStrategy.prototype.simple = function (files, outputDirectory, closureCompiler, streamService) {
        var compilation = new Compilation_1.Compilation(closureCompiler);
        return compilation.compile(files, outputDirectory, streamService);
    };
    CompilationStrategy.prototype.advanced = function (files, outputDirectory, closureCompiler, streamService) {
        var compilation = new Compilation_1.Compilation(closureCompiler);
        return compilation.compile(files, outputDirectory, streamService);
    };
    CompilationStrategy.prototype.whitespace = function (files, outputDirectory, closureCompiler, streamService) {
        var compilation = new Compilation_1.Compilation(closureCompiler);
        return compilation.compile(files, outputDirectory, streamService);
    };
    return CompilationStrategy;
}());
exports.default = CompilationStrategy;
